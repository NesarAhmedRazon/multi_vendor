"use client";
import { cn } from "@/lib/utils";

import { MenuIcon } from "@/components/icons/menu";
import { NavSidebar } from "@/components/Nav/NavSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavBarProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NaveBarItem = ({ href, children, isActive }: NavBarProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300",
        isActive && "bg-orange-500 text-white border-orange-500"
      )}
    >
      <Link
        href={href}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </Link>
    </Button>
  );
};

const navItems = [
  { href: "/", children: "Home" },
  { href: "/settings", children: "Settings" },
  { href: "/contact", children: "Contact" }
];

function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-bold,")}>Home</span>
      </Link>
      <NavSidebar
        items={navItems}
        open={isSidebarOpen}
        onOpenChange={setSidebarOpen}
      />
      <div className="hidden md:flex items-center gap-2">
        {navItems.map((item) => (
          <NaveBarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          >
            {item.children}
          </NaveBarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="px-12 border-r-0 border-b-0 border-l border-top-0 rounded-none h-full text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="px-12 border-r-0 border-b-0 border-l border-top-0 rounded-none h-full text-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
        >
          <Link href="/sign-up">start Selling</Link>
        </Button>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent border-0 hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
          aria-label="Menu"
          data-state={isSidebarOpen ? "open" : "closed"}
          data-state-closed="closed"
          data-state-open="open"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
