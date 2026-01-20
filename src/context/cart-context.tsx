'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

type CartType = 'Shop' | 'Pre-Booking';

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, type: CartType) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  cartType: CartType | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartType, setCartType] = useState<CartType | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    const storedType = localStorage.getItem('cartType');
    if (storedCart) {
// eslint-disable-next-line react-hooks/set-state-in-effect
      setCartItems(JSON.parse(storedCart));
    }
    if (storedType) {
// eslint-disable-next-line react-hooks/set-state-in-effect
      setCartType(storedType as CartType);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    if (cartType) {
      localStorage.setItem('cartType', cartType);
    } else {
      localStorage.removeItem('cartType');
    }
  }, [cartItems, cartType]);

  const addItem = (item: Omit<CartItem, 'quantity'>, type: CartType) => {
    setCartType(type);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(prevItems => 
        prevItems.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartType(null);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantity, clearCart, cartCount, cartTotal, cartType }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
