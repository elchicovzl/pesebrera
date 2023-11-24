"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import PhoneInput from 'react-phone-number-input/input'
import Image from "next/image";
import AuthNav from "@/components/AuthNav";

export default function Register() {
  const router = useRouter();
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState<AuthValidationType>({});
  const [loading, setLoading] = useState<boolean>(false);

  const register = () => {
    setLoading(true);
    axios
      .post("/api/auth/register", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status == 200) {
          router.push(`/login?message=${response.message}`);
        } else if (response.status == 400) {
          console.log("errores...")
          console.log(response.errors);
          setErrors(response.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("error is", err);
      });
  };
  return (
    <div className="px-10 lg:px-32 w-full pb-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-[#cbd272]">Crea tu Cuenta</h1>
      <p className="text-[#cbd272]">Explora nuestro contenido.</p>
      <div className="mt-4">
        <Label htmlFor="name" className="text-gray-400">Nombre</Label>
        <Input
          type="text"
          id="name"
          placeholder="Ingresa tu nombre"
          onChange={(e) =>
            setAuthState({ ...authState, name: e.target.value })
          }
        />
        <span className="text-red-400 font-bold text-xs">{errors?.name}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="email" className="text-gray-400">Correo eléctronico</Label>
        <Input
          type="email"
          id="email"
          placeholder="Ingresa tu correo eléctronico"
          onChange={(e) =>
            setAuthState({ ...authState, email: e.target.value })
          }
        />
        <span className="text-red-400 font-bold text-xs">{errors?.email}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="phone" className="text-gray-400">Número de teléfono</Label>
        <PhoneInput
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          international={false}
          defaultCountry="CO"
          placeholder="Ingresa tu número de teléfono"
          onChange={(e) =>
            setAuthState({ ...authState, phone: e })
          }
        />
        <span className="text-red-400 font-bold text-xs">{errors?.phone}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password" className="text-gray-400">Contraseña</Label>
        <Input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) =>
            setAuthState({ ...authState, password: e.target.value })
          }
        />
        <span className="text-red-400 font-bold text-xs">{errors?.password}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="cpassword" className="text-gray-400">Confirmar contraseña</Label>
        <Input
          type="password"
          id="cpassword"
          placeholder="Confirma tu contraseña"
          onChange={(e) =>
            setAuthState({
              ...authState,
              password_confirmation: e.target.value,
            })
          }
        />
      </div>
      <div className="mt-4">
        <Button
          variant="default"
          className="w-full"
          onClick={register}
          disabled={loading}
        >
          {loading ? "Procesando" : "Registrate"}
        </Button>
      </div>
      <div className="mt-4 text-center">
        <strong className="text-gray-400">Ya tienes cuenta?</strong>
        <Link href="/login" className="pl-2 text-white">
          Login
        </Link>
      </div>
    </div>
  );
}
