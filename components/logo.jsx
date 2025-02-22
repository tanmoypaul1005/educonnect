import Image from "next/image";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[50px]", className)} src={logo} alt="logo" />
  );
};
