'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const AuthHandler = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        
        const token = searchParams.get('token');

        if (token) {
            
            getUserData(token);
        } else {
            
            router.push('/login');
        }
    }, [router, searchParams]);

    const getUserData = async (token: string) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            };

            const { data } = await axios.get('http://localhost:5001/api/users/me', config);

            const userInfo = {
                ...data,      
                token: token  
            };

            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            alert(`Xoş gəldin, ${data.name}!`);
            router.push('/');

        } catch (error) {
            console.error("User məlumatı alına bilmədi:", error);
            
            router.push('/login');
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-bold">Giriş edilir...</h2>
            <p className="text-gray-400">Zəhmət olmasa gözləyin</p>
        </div>
    );
};

const AuthSuccessPage = () => {
    return (
        <Suspense fallback={<div className="text-white">Loading...</div>}>
            <AuthHandler />
        </Suspense>
    );
};

export default AuthSuccessPage;