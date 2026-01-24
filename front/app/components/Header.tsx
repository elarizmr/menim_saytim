"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// İkonları import edirik
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiGrid, FiLogOut } from "react-icons/fi";
import { FaChessKnight, FaDice, FaPuzzlePiece, FaCar } from "react-icons/fa";

// İstifadəçi tipini təyin edirik
interface User {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
}

const Header = () => {
    const [user, setUser] = useState<User | null>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    // Səhifə yüklənəndə LocalStorage-dan istifadəçini oxuyuruq
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem('userInfo'); // Login səhifəsində 'userInfo' kimi yazmısansa bura diqqət et
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error('Failed to parse user:', error);
                    localStorage.removeItem('userInfo'); // Əgər xətalı data varsa silək
                }
            }
        }
    }, []);

    // Çıxış etmək funksiyası
    const handleLogout = () => {
        localStorage.removeItem('userInfo'); // Məlumatları silirik
        localStorage.removeItem('token');
        setUser(null);
        setShowDropdown(false);
        router.push('/login'); // Loginə yönləndiririk
        // Səhifəni yeniləyirik ki, header təzələnsin (Context API istifadə etmədiyimiz üçün)
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <header className="w-full">

            {/* ----------------- 1. ÜST HİSSƏ (AĞ) ----------------- */}
            <div className="bg-white py-5 border-b border-gray-200">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <img src="https://game-workdo.myshopify.com/cdn/shop/files/Game.png?v=1675229751" alt="GameWork Logo" />
                    </Link>

                    {/* Axtarış (Search) - Olduğu kimi qaldı */}
                    <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
                        <div className="flex items-center bg-gray-200 rounded-full p-1 pl-5">
                            <FiSearch className="text-xl text-gray-500 mr-3" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
                            />
                            <button className="bg-[#E60023] text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition whitespace-nowrap">
                                All Collections
                                <FiChevronDown />
                            </button>
                        </div>
                    </div>

                    {/* Məlumat və Profillər */}
                    <div className="flex items-center gap-6 text-sm">

                        {/* İş Saatları - Olduğu kimi qaldı */}
                        <div className="hidden xl:flex flex-col text-right">
                            <span className="font-bold text-gray-900 text-sm">Monday - Friday:</span>
                            <span className="text-gray-600">8:00 AM - 9:00 PM</span>
                        </div>

                        {/* Dəstək - Olduğu kimi qaldı */}
                        <div className="hidden xl:flex flex-col text-right">
                            <span className="text-gray-600">Support 24/7:</span>
                            <span className="font-bold text-[#E60023] text-base">+12 002-224-111</span>
                        </div>

                        {/* Dil və Valyuta - Olduğu kimi qaldı */}
                        <div className="hidden md:flex items-center gap-3">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm font-bold text-gray-700">
                                USD <FiChevronDown />
                            </button>
                            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm font-bold text-gray-700">
                                English <FiChevronDown />
                            </button>
                        </div>

                        {/* ----------------- LOGIN / USER MƏNTİQİ BURADADIR ----------------- */}
                        <div className="flex items-center gap-5 ml-2">
                            {user ? (
                                // ƏGƏR USER VARSA (LOGIN OLUB):
                                <div className="relative">
                                    <button
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                                    >
                                        <FiUser className="text-lg text-[#E60023]" />
                                        <span className="text-sm font-bold hidden sm:inline text-gray-800">
                                            {user.name} {/* Adı burada görünür */}
                                        </span>
                                        <FiChevronDown className="text-sm" />
                                    </button>
                                    
                                    {/* Dropdown Menyu */}
                                    {showDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                                            <div className="p-4 border-b bg-gray-50 rounded-t-lg">
                                                <p className="text-sm font-bold text-gray-900">{user.name}</p>
                                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                            </div>
                                            
                                            {/* Admin Panel Linki (Əgər admindirsə) */}
                                            {user.isAdmin && (
                                                <Link href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E60023]">
                                                    Admin Panel
                                                </Link>
                                            )}

                                            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#E60023]">
                                                Profilim
                                            </Link>
                                            
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 rounded-b-lg"
                                            >
                                                <FiLogOut />
                                                Çıxış
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // ƏGƏR USER YOXDURSA (LOGIN OLMAYIB):
                                <Link href="/login" className="text-3xl text-gray-600 hover:text-[#E60023] transition" title="Daxil ol">
                                    <FiUser />
                                </Link>
                            )}

                            {/* Səbət - Olduğu kimi qaldı */}
                            <Link href="/cart" className="flex items-center gap-3 group">
                                <div className="relative text-3xl text-gray-600 group-hover:text-black">
                                    <FiShoppingCart />
                                    <span className="absolute -top-2 -right-2 bg-[#E60023] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                        0
                                    </span>
                                </div>
                                <div className="hidden sm:block text-right leading-tight">
                                    <span className="block text-xs text-gray-500 font-bold">My Cart:</span>
                                    <span className="block text-sm font-black text-gray-900">$0.00</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------- 2. ALT HİSSƏ (QIRMIZI NAVBAR) - DƏYİŞİLMƏDİ ----------------- */}
            <div className="bg-[#E60023] text-white">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">

                    {/* Sol Tərəf: Naviqasiya Linkləri */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
                        <Link href="/blog" className="flex items-center gap-2 hover:text-black/80 transition">
                            <FiGrid className="text-xl" />
                            Blog
                            <FiChevronDown />
                        </Link>
                        <Link href="/shop" className="flex items-center gap-2 hover:text-black/80 transition">
                            <FaPuzzlePiece className="text-lg" />
                            Shop All
                            <FiChevronDown />
                        </Link>
                        <Link href="/about" className="flex items-center gap-2 hover:text-black/80 transition">
                            <FaCar className="text-lg" />
                            About Us
                            <FiChevronDown />
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2 hover:text-black/80 transition">
                            <FaChessKnight className="text-lg" />
                            Contact
                            <FiChevronDown />
                        </Link>
                        <Link href="/faq" className="flex items-center gap-2 hover:text-black/80 transition">
                            <FaDice className="text-lg" />
                            FAQ
                            <FiChevronDown />
                        </Link>
                    </nav>

                    {/* Sağ Tərəf: Email */}
                    <div className="flex items-center gap-2 font-semibold">
                        <span className="opacity-90">Send Email:</span>
                        <a href="mailto:contact@shop.com" className="flex items-center gap-2 text-white hover:underline text-lg font-bold">
                            contact@shop.com
                        </a>
                    </div>

                </div>
            </div>

        </header>
    );
};

export default Header;