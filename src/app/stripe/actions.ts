'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function createInvestmentPaymentIntent(data: {
    name: string;
    email: string;
    investmentDetails: {
        shares: number;
        investmentAmount: number;
        totalCharge: number;
        project: string;
    }
}) {
    const { name, email, investmentDetails } = data;

    try {
        // Check for an existing customer by email, or create a new one.
        let customer = (await stripe.customers.list({ email: email, limit: 1 })).data[0];
        if (!customer) {
            customer = await stripe.customers.create({ name, email });
        }

        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(investmentDetails.totalCharge * 100), // Stripe expects the amount in cents
            currency: 'usd',
            customer: customer.id,
            receipt_email: email,
            description: `Investment: ${investmentDetails.shares} shares in ${investmentDetails.project}`,
            metadata: {
                investorName: name,
                investorEmail: email,
                project: investmentDetails.project,
                shares: investmentDetails.shares,
                investmentAmount: investmentDetails.investmentAmount,
                totalCharge: investmentDetails.totalCharge,
            },
            automatic_payment_methods: { enabled: true },
        });

        return { clientSecret: paymentIntent.client_secret };

    } catch (error: any) {
        console.error("Stripe Error:", error.message);
        return { error: `Failed to initialize payment: ${error.message}` };
    }
}
