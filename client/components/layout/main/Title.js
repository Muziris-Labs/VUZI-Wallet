"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Title() {
  const pathName = usePathname();

  return (
    <div className="z-10 mt-[4vh]">
      {pathName === "/" && (
        <Image src="/logo.svg" alt="Logo" width={60} height={60} />
      )}
      {pathName === "/home" && (
        <h1 className="text-3xl font-semibold text-black/80">HOME</h1>
      )}
      {pathName === "/wallet" && (
        <Image src="/logo.svg" alt="Logo" width={60} height={60} />
      )}
      {pathName === "/transfer" && (
        <h1 className="text-3xl font-semibold text-black/80">TRANSFER</h1>
      )}
      {pathName === "/deposit" && (
        <h1 className="text-3xl font-semibold text-black/80">DEPOSIT</h1>
      )}
      {pathName === "/transactions" && (
        <h1 className="text-3xl font-semibold text-black/80">TX</h1>
      )}
      {pathName === "/recover" && (
        <h1 className="text-3xl font-semibold text-black/80">RECOVER</h1>
      )}
    </div>
  );
}
