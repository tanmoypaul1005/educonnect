import Image from "next/image";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
export const Logo = ({ className = "" }) => {
  return (
    <Link href="/">
      <Image className={cn("max-w-[50px]", className)} src={logo} alt="logo" />
    </Link>
  );
};
