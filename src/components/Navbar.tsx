"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Avatar, { UserNav } from "./UserNav";
import { signOut } from "next-auth/react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider
} from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname: string = usePathname();
  const { data: session, status } = useSession();

  return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center justify-center">
              <Image src="/images/logo.png" alt="home_icon" width="40" height="40" />
              <h1 className="text-2xl font-normal ml-2 text-[#cbd272]">Pesebrera el Grillo</h1>
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex items-center space-x-2 lg:space-x-3" justify="center">
          <NavbarItem>
            <Link className={`${pathname == "/" ? "font-bold" : ""}`} color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem className="">
            <Link className={`${pathname == "/eventos" ? "font-bold" : ""}`} href="/eventos" aria-current="page">
              Eventos
            </Link>
          </NavbarItem>
          {status === "authenticated" ? (
            <>
              <NavbarItem>
                <Link className={`${pathname == "/boletas" ? "font-bold" : ""}`} href="/boletas" aria-current="page">
                  Tus Boletas
                </Link>
              </NavbarItem>
              <NavbarItem>
                <UserNav />
              </NavbarItem>
            </>
          ) : (
            <NavbarItem>
              <Link className={`${pathname == "/login" ? "font-bold" : ""}`} href="/login" aria-current="page">
                Inicia Sessión
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarMenu>
            <NavbarMenuItem key="1">
              <Link
                color="foreground"
                className="w-full"
                href="/"
              >
                Inicio
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem key="2">
              <Link
                color="foreground"
                className="w-full"
                href="/eventos"
              >
                Eventos
              </Link>
            </NavbarMenuItem>
            {status === "authenticated" ? (
              <>
                <NavbarMenuItem key="3">
                  <Link href="/boletas" aria-current="page">
                    Tus Boletas
                  </Link>
                </NavbarMenuItem>
                <Divider className="my-4" />
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                  </p>
                </div>
                <NavbarMenuItem key="3">
                  <Link href="#" onClick={() => signOut({ callbackUrl: "/login", redirect: true })} aria-current="page">
                    Cerrar Sesión
                  </Link>
                </NavbarMenuItem>
              </>
            ) : (
              <NavbarMenuItem key="3">
                <Link href="/login" aria-current="page">
                  Inicia Sessión
                </Link>
              </NavbarMenuItem>
            )}
        </NavbarMenu>
      </Navbar>
  );
}
