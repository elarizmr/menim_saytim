"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setCartCount(0);
      return;
    }

    try {
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

      const res = await fetch(`${apiUrl}/cart`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json();
        
        const total = data.reduce((acc: number, item: any) => acc + item.quantity, 0);
        setCartCount(total);
      }
    } catch (error) {
      console.error("Cart count error:", error);
    }
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);