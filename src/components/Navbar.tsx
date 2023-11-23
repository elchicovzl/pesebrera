"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Avatar, { UserNav } from "./UserNav";

export default function Navbar() {
  const pathname: string = usePathname();
  const { data: session, status } = useSession();


  return (
    <div className="h-16 w-full flex justify-between items-center px-6 container pt-5">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/images/logo.png" alt="home_icon" width="40" height="40" />
        <h1 className="text-2xl font-normal ml-2 text-[#cbd272]">Pesebrera el Grillo</h1>
      </Link>

      <div className="flex items-center space-x-2 lg:space-x-3 ">
        <Link href="/">
          <Button
            variant="link"
            className={`text-md lg:text-lg text-[#cbd272] ${
              pathname == "/" ? "font-bold" : ""
            }`}
          >
            Inicio
          </Button>
        </Link>
        <Link href="/eventos">
          <Button
            variant="link"
            className={`text-md lg:text-lg text-[#cbd272] ${
              pathname == "/eventos" ? "font-bold" : ""
            }`}
          >
            Eventos
          </Button>
        </Link>
        {status === "authenticated" ? (
          <>
          <Link href="/boletas">
            <Button
              variant="link"
              className={`text-md lg:text-lg text-[#cbd272] ${
                pathname == "/boletas" ? "font-bold" : ""
              }`}
            >
              Tus Boletas
            </Button>
          </Link>
          <UserNav />
          </>
        ) : (
          <Link href="/login">
            <Button
              variant="link"
              className={`text-md lg:text-lg text-[#cbd272] ${
                pathname == "/login" ? "font-bold" : ""
              }`}
            >
              Inicia Sessión
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
