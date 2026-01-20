'use client';

import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2, PartyPopper, Lock, Truck, Store, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { createCheckoutPaymentIntent } from './actions';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Initialize Stripe outside component
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// --- Sub-Component: Stripe Payment Form ---
const CheckoutForm = ({ clientSecret, email, setPaymentSuccess, totalCharge }: { clientSecret: string; email: string; setPaymentSuccess: (success: boolean) => void; totalCharge: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { clearCart } = useCart();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout?success=true`,
        receipt_email: email,
      },
      redirect: 'if_required',
    });

    if (confirmError) {
      setError(confirmError.message || 'An unexpected error occurred.');
      toast({
        title: 'Payment Failed',
        description: confirmError.message || 'Please check your details and try again.',
        variant: 'destructive',
      });
      setLoading(false);
    } else {
      setPaymentSuccess(true);
      clearCart();
      toast({
        title: 'Order Confirmed',
        description: 'A receipt has been sent to your email.',
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <PaymentElement options={{ layout: 'tabs' }} />
      
      <Button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full h-14 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all rounded-none"
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lock className="mr-2 h-3 w-3" />}
        Pay ${totalCharge.toFixed(2)}
      </Button>
      {error && <p className="text-xs text-destructive text-center mt-2">{error}</p>}
    </form>
  );
};

// --- Types & Config ---
interface ShippingInfo {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

const pickupLocations: Record<string, { name: string; address: string; city: string; country: string }> = {
  'Shop': {
    name: 'Main Store Pickup',
    address: '3622 Central Ave',
    city: 'Memphis, TN 38111',
    country: 'United States'
  },
  'Pre-Booking': {
    name: 'Khalui Farm Pickup',
    address: '900 Orr Rd',
    city: 'Arlington, TN 38002',
    country: 'United States'
  }
};

// --- Main Page Component ---
export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount, cartType } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [shipping, setShipping] = useState<ShippingInfo>({
    line1: '', line2: '', city: '', state: '', postal_code: '', country: 'US',
  });

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const shippingFee = deliveryMethod === 'shipping' && cartTotal > 0 ? 7.50 : 0;
  const processingFee = cartTotal > 0 ? (cartTotal * 0.029) + 0.30 : 0;
  const totalCharge = cartTotal + shippingFee + processingFee;
  
  const pickupLocation = cartType ? pickupLocations[cartType] : pickupLocations['Shop'];

  const handleCustomerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const isShippingInvalid = deliveryMethod === 'shipping' && (!shipping.line1 || !shipping.city || !shipping.state || !shipping.postal_code);

    if (!name || !email || isShippingInvalid) {
      setError('Please complete all required fields.');
      return;
    }
    if (cartCount === 0) {
      setError('Your cart is empty.');
      return;
    }

    setLoading(true);
    
    const intentResult = await createCheckoutPaymentIntent(
      totalCharge * 100, 
      name, 
      email, 
      deliveryMethod === 'shipping' ? shipping : null,
      cartItems,
      cartType
    );

    if (intentResult.clientSecret) {
      setClientSecret(intentResult.clientSecret);
    } else {
      setError(intentResult.error || 'Failed to initialize payment.');
    }
    setLoading(false);
  }

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const options: StripeElementsOptions | undefined = clientSecret ? {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: { colorPrimary: '#000000', fontFamily: 'inherit' }
    },
  } : undefined;

  // --- Success State ---
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full border-none shadow-2xl text-center p-10">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <PartyPopper className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4">Order Confirmed</h2>
          <p className="text-muted-foreground mb-8">Thank you for your purchase. A receipt has been sent to your email.</p>
          <Button asChild className="w-full h-12 uppercase tracking-widest text-xs font-bold">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen font-sans">
      
      {/* Header */}
      <header className="py-8 border-b border-border">
        <div className="container mx-auto px-6 flex items-center justify-between">
           <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
             <CreditCard className="w-4 h-4"/> Secure Checkout
           </Link>
           <Lock className="w-4 h-4 text-muted-foreground"/>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Customer & Shipping Details */}
          <div className="lg:col-span-7 space-y-12">
            {!clientSecret ? (
              <FadeIn>
                <form onSubmit={handleCustomerSubmit} className="space-y-12">
                  
                  {/* Delivery Method */}
                  <section>
                    <h3 className="text-lg font-serif font-medium mb-6">1. Delivery Method</h3>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid grid-cols-2 gap-4">
                      <Label htmlFor="shipping" className={`flex flex-col items-center justify-center border p-6 cursor-pointer hover:bg-muted/30 transition-all ${deliveryMethod === 'shipping' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                        <RadioGroupItem value="shipping" id="shipping" className="sr-only" />
                        <Truck className="mb-3 h-6 w-6 text-foreground" />
                        <span className="text-xs uppercase tracking-widest font-bold">Shipping</span>
                      </Label>
                      <Label htmlFor="pickup" className={`flex flex-col items-center justify-center border p-6 cursor-pointer hover:bg-muted/30 transition-all ${deliveryMethod === 'pickup' ? 'border-primary bg-primary/5' : 'border-border'}`}>
                        <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                        <Store className="mb-3 h-6 w-6 text-foreground" />
                        <span className="text-xs uppercase tracking-widest font-bold">Local Pickup</span>
                      </Label>
                    </RadioGroup>

                    {deliveryMethod === 'pickup' && pickupLocation && (
                      <Alert className="mt-6 bg-muted/30 border-primary/20">
                        <Store className="h-4 w-4" />
                        <AlertTitle className="font-bold">{pickupLocation.name}</AlertTitle>
                        <AlertDescription className="text-xs text-muted-foreground mt-1">
                          {pickupLocation.address}, {pickupLocation.city}
                        </AlertDescription>
                      </Alert>
                    )}
                  </section>

                  {/* Contact Info */}
                  <section>
                    <h3 className="text-lg font-serif font-medium mb-6">2. Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Full Name</Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} required className="h-12 border-border focus:border-primary rounded-none" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Email</Label>
                        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 border-border focus:border-primary rounded-none" placeholder="jane@example.com" />
                      </div>
                    </div>
                  </section>

                  {/* Shipping Address (Conditional) */}
                  {deliveryMethod === 'shipping' && (
                    <FadeIn>
                      <section className="space-y-6">
                        <h3 className="text-lg font-serif font-medium mb-6">3. Shipping Address</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Address</Label>
                            <Input name="line1" value={shipping.line1} onChange={handleShippingChange} required className="h-12 rounded-none" />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Apartment / Suite</Label>
                            <Input name="line2" value={shipping.line2 || ''} onChange={handleShippingChange} className="h-12 rounded-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">City</Label>
                              <Input name="city" value={shipping.city} onChange={handleShippingChange} required className="h-12 rounded-none" />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">State</Label>
                              <Input name="state" value={shipping.state} onChange={handleShippingChange} required className="h-12 rounded-none" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">ZIP Code</Label>
                            <Input name="postal_code" value={shipping.postal_code} onChange={handleShippingChange} required className="h-12 rounded-none" />
                          </div>
                        </div>
                      </section>
                    </FadeIn>
                  )}

                  {error && <p className="text-sm text-destructive font-medium">{error}</p>}
                  
                  <Button type="submit" disabled={loading || cartCount === 0} className="w-full h-14 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all rounded-none mt-8">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Proceed to Payment"}
                  </Button>
                </form>
              </FadeIn>
            ) : (
              /* PAYMENT STEP */
              <FadeIn>
                <div className="bg-muted/10 border border-border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-serif font-medium">Payment Details</h3>
                    <Button variant="ghost" size="sm" onClick={() => setClientSecret(null)} className="text-xs text-muted-foreground hover:text-foreground">Edit Details</Button>
                  </div>
                  
                  <div className="mb-8 text-sm space-y-1 text-muted-foreground">
                    <p><span className="font-bold text-foreground">Customer:</span> {name} ({email})</p>
                    <p><span className="font-bold text-foreground">Delivery:</span> {deliveryMethod === 'shipping' ? `${shipping.line1}, ${shipping.city}` : pickupLocation?.name}</p>
                  </div>

                  {options && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm 
                        clientSecret={clientSecret} 
                        email={email}
                        setPaymentSuccess={setPaymentSuccess}
                        totalCharge={totalCharge}
                      />
                    </Elements>
                  )}
                </div>
              </FadeIn>
            )}
          </div>

          {/* RIGHT COLUMN: Order Summary (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-12 bg-muted/10 border border-border p-8">
              <h3 className="font-serif text-2xl mb-8 flex items-center gap-3">Your Order <span className="text-base text-muted-foreground font-sans font-normal">({cartCount})</span></h3>
              
              {cartCount > 0 ? (
                <>
                  <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-white border border-border shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium text-sm text-foreground line-clamp-1">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-sm">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-8" />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>{shippingFee === 0 ? 'Free / Pickup' : `$${shippingFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Processing</span>
                      <span>${processingFee.toFixed(2)}</span>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between items-center text-xl font-serif font-medium text-foreground">
                      <span>Total</span>
                      <span>${totalCharge.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Lock className="w-3 h-3" /> Secure SSL Encryption
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                  <p className="text-muted-foreground mb-4">Your cart is empty.</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shop">Browse Shop</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
