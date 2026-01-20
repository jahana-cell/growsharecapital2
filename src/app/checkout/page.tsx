'use client';

import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2, PartyPopper, Lock, Truck, Store, ShoppingCart } from 'lucide-react';
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
      {/* FIX: Removed 'appearance' prop from here. It is handled by the parent <Elements> provider. */}
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

// --- Config ---
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

// --- Main Page ---
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

  // --- STYLING CONFIGURATION ---
  // The appearance object must be defined here, passed to <Elements>
  const options: StripeElementsOptions | undefined = clientSecret ? {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#000000',
        fontFamily: 'inherit',
        spacingUnit: '4px',
        borderRadius: '0px',
      }
    },
  } : undefined;

  // Success State
  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full border-none shadow-2xl text-center p-12 bg-white">
          <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <PartyPopper className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-serif mb-4">Order Confirmed</h2>
          <p className="text-muted-foreground mb-10 text-lg font-light">Thank you. Your order has been placed successfully.</p>
          <Button asChild className="w-full h-14 rounded-none uppercase tracking-widest text-xs font-bold">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen font-sans">
      <header className="py-8 border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
           <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3">
             <CreditCard className="w-4 h-4"/> Secure Checkout
           </Link>
           <Lock className="w-4 h-4 text-muted-foreground"/>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Forms */}
          <div className="lg:col-span-7 space-y-16">
            {!clientSecret ? (
              <FadeIn>
                <form onSubmit={handleCustomerSubmit} className="space-y-16">
                  
                  {/* Delivery */}
                  <section>
                    <h3 className="text-2xl font-serif mb-8 flex items-center gap-3"><span className="text-primary/40 font-sans text-lg">01.</span> Delivery Method</h3>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid grid-cols-2 gap-6">
                      <Label htmlFor="pickup" className={`flex flex-col items-center justify-center border p-8 cursor-pointer transition-all duration-300 ${deliveryMethod === 'pickup' ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                        <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                        <Store className="mb-4 h-6 w-6" />
                        <span className="text-xs uppercase tracking-widest font-bold">Local Pickup</span>
                      </Label>
                      <Label htmlFor="shipping" className={`flex flex-col items-center justify-center border p-8 cursor-pointer transition-all duration-300 ${deliveryMethod === 'shipping' ? 'border-primary ring-1 ring-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                        <RadioGroupItem value="shipping" id="shipping" className="sr-only" />
                        <Truck className="mb-4 h-6 w-6" />
                        <span className="text-xs uppercase tracking-widest font-bold">Shipping</span>
                      </Label>
                    </RadioGroup>

                    {deliveryMethod === 'pickup' && pickupLocation && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                        <Alert className="mt-8 bg-muted/20 border-primary/20 rounded-none border-l-2">
                          <Store className="h-4 w-4 text-primary" />
                          <AlertTitle className="font-bold uppercase tracking-wider text-xs">Pickup Location</AlertTitle>
                          <AlertDescription className="text-sm text-muted-foreground mt-2 font-serif">
                            <span className="block text-foreground text-lg mb-1">{pickupLocation.name}</span>
                            {pickupLocation.address}, {pickupLocation.city}
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </section>

                  {/* Contact */}
                  <section>
                    <h3 className="text-2xl font-serif mb-8 flex items-center gap-3"><span className="text-primary/40 font-sans text-lg">02.</span> Your Details</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Full Name</Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} required className="h-14 bg-muted/10 border-border focus:border-primary rounded-none text-lg px-4" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Email Address</Label>
                        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className="h-14 bg-muted/10 border-border focus:border-primary rounded-none text-lg px-4" placeholder="jane@example.com" />
                      </div>
                    </div>
                  </section>

                  {/* Address */}
                  {deliveryMethod === 'shipping' && (
                    <FadeIn>
                      <section className="space-y-8">
                        <h3 className="text-2xl font-serif mb-8 flex items-center gap-3"><span className="text-primary/40 font-sans text-lg">03.</span> Shipping Address</h3>
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <Label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Street Address</Label>
                            <Input name="line1" value={shipping.line1} onChange={handleShippingChange} required className="h-14 bg-muted/10 rounded-none px-4" />
                          </div>
                          <div className="space-y-3">
                            <Label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Apartment / Suite (Optional)</Label>
                            <Input name="line2" value={shipping.line2 || ''} onChange={handleShippingChange} className="h-14 bg-muted/10 rounded-none px-4" />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <Label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">City</Label>
                              <Input name="city" value={shipping.city} onChange={handleShippingChange} required className="h-14 bg-muted/10 rounded-none px-4" />
                            </div>
                            <div className="space-y-3">
                              <Label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">State</Label>
                              <Input name="state" value={shipping.state} onChange={handleShippingChange} required className="h-14 bg-muted/10 rounded-none px-4" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <Label className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">ZIP Code</Label>
                            <Input name="postal_code" value={shipping.postal_code} onChange={handleShippingChange} required className="h-14 bg-muted/10 rounded-none px-4" />
                          </div>
                        </div>
                      </section>
                    </FadeIn>
                  )}

                  {error && <p className="text-sm text-destructive font-medium border border-destructive/20 bg-destructive/5 p-4 text-center">{error}</p>}
                  
                  <Button type="submit" disabled={loading || cartCount === 0} className="w-full h-16 bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-[0.25em] font-bold rounded-none shadow-xl transition-all hover:scale-[1.01]">
                    {loading ? <Loader2 className="mr-3 h-5 w-5 animate-spin" /> : "Proceed to Payment"}
                  </Button>
                </form>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="bg-white border border-border p-10 shadow-sm relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-serif">Payment</h3>
                    <Button variant="ghost" size="sm" onClick={() => setClientSecret(null)} className="text-xs uppercase tracking-wider font-bold text-muted-foreground hover:text-foreground">Change Details</Button>
                  </div>
                  
                  <div className="mb-10 text-sm space-y-2 pb-8 border-b border-border/50">
                    <p className="flex justify-between"><span className="text-muted-foreground">Customer:</span> <span className="font-medium">{name}</span></p>
                    <p className="flex justify-between"><span className="text-muted-foreground">Email:</span> <span className="font-medium">{email}</span></p>
                    <p className="flex justify-between"><span className="text-muted-foreground">Delivery:</span> <span className="font-medium">{deliveryMethod === 'shipping' ? 'Standard Shipping' : 'Local Pickup'}</span></p>
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

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-[#F9F9F7] border border-border/60 p-10 shadow-sm">
              <h3 className="font-serif text-3xl mb-8 flex items-baseline justify-between">
                Your Order 
                <span className="text-base text-muted-foreground font-sans font-normal">{cartCount} Items</span>
              </h3>
              
              {cartCount > 0 ? (
                <>
                  <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-5 group">
                        <div className="relative w-20 h-20 bg-white border border-border shrink-0 overflow-hidden">
                          <Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" />
                        </div>
                        <div className="flex-grow py-1">
                          <p className="font-serif text-lg leading-tight mb-1">{item.name}</p>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-lg py-1">${(item.quantity * item.price).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-8 opacity-50" />

                  <div className="space-y-4 text-sm font-light">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shippingFee === 0 ? 'Free / Pickup' : `$${shippingFee.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing</span>
                      <span>${processingFee.toFixed(2)}</span>
                    </div>
                    
                    <Separator className="my-6 opacity-100 bg-foreground/10" />
                    
                    <div className="flex justify-between items-center text-2xl font-serif text-foreground">
                      <span>Total</span>
                      <span>${totalCharge.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    <Lock className="w-3 h-3" /> Encrypted Transaction
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground/20 mx-auto mb-6" />
                  <p className="text-muted-foreground mb-8">Your cart is currently empty.</p>
                  <Button asChild variant="outline" className="w-full h-12 uppercase tracking-widest text-xs font-bold rounded-none">
                    <Link href="/shop">Return to Shop</Link>
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