"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiBox, FiShoppingCart, FiUsers, FiSettings } from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <FiGrid /> },
    { name: "Products", href: "/admin/products", icon: <FiBox /> },
    { name: "Orders", href: "/admin/orders", icon: <FiShoppingCart /> },
    { name: "Users", href: "/admin/users", icon: <FiUsers /> },
    { name: "Settings", href: "/admin/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 bg-white border-r h-screen fixed left-0 top-0 p-5 flex flex-col z-50">
      <div className="mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">E</div>
        <span className="text-xl font-bold tracking-tight">Ecomus Admin</span>
      </div>

      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          // Linkin aktiv olub olmadığını yoxlayırıq
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-black text-white shadow-md"
                  : "text-gray-500 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <p className="text-sm font-bold text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">admin@ecomus.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}