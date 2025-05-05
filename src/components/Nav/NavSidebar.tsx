import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

interface NavBarItem {
  href: string;
  children: React.ReactNode;
}
interface Props {
  items: NavBarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavSidebar = ({ items, open, onOpenChange }: Props) => {
  console.log("NavSidebar", items);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="p-0 transition-none" side="left">
        <SheetHeader className="p-4  border-b">
          <div className="flex items-center justify-between">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className=" flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full flex text-left p-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
            >
              {item.children}
            </Link>
          ))}
          <div className="border-t">
            <Link
              href="/sign-in"
              className="w-full flex text-left p-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="w-full flex text-left p-4 hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
            >
              start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
