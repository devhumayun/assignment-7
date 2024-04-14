"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <p>Invalid pathname:{pathname} </p>
        <Link className=" bg-[#00D991] text-white p-2 rounded-md" href="/">
          Go to home
        </Link>
      </div>
    </div>
  );
}