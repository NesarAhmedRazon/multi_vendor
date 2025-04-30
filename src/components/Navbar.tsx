"use client";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <nav className="h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-bold,")}>Home</span>
      </Link>
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
    </nav>
  );
}

export default Navbar;
