"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <div>
        <div className="h-screen w-screen flex justify-center items-center flex-col">
          <Image
            src="/images/logo.png"
            width="200"
            height="200"
            alt="Error image"
          />
          <h1 className="text-2xl font-bold text-[#cbd272]">Cargando espere....</h1>
        </div>
      </div>
    </div>
  );
}
