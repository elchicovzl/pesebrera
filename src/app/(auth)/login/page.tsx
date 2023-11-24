"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AuthNav from "@/components/AuthNav";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function Login() {
  const params = useSearchParams();
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<AuthValidationType>({});
  const [loading, setLoading] = useState<boolean>(false);

  const login = () => {
    setLoading(true);
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status == 200) {
          signIn("credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/",
            redirect: true,
          });
        } else if (response.status == 400) {
          setErrors(response.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("the error is", err);
      });
  };

  return (
    <div className="px-10 lg:px-32 w-full">
      {params.get("message") ? (
        <Alert

          variant="default"
          className="text-white border-gray-300 bg-transparent mb-10"
        >
          <AlertTitle>Éxito!</AlertTitle>
          <AlertDescription>{params.get("message")}</AlertDescription>
        </Alert>
      ) : (
        <></>
      )}

      <h1 className="text-3xl lg:text-5xl font-bold text-[#cbd272]">Bienvenido!</h1>
      <p className="text-[#cbd272]">Inicia Session para poder comprar tu rifa. </p>
      <div className="mt-4">
        <Label htmlFor="email" className="text-[#cbd272]">Correo Electrónico</Label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) =>
            setAuthState({ ...authState, email: e.target.value })
          }
        />
        <span className="text-red-700 font-bold">{errors?.email}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password" className="text-[#cbd272]">Contraseña</Label>
        <Input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) =>
            setAuthState({ ...authState, password: e.target.value })
          }
        />
        <span className="text-red-700 font-bold">{errors?.password}</span>
      </div>
      <div className="mt-4">
        <Button
          variant="default"
          className="w-full bg-[#cdcdcd]"
          disabled={loading}
          onClick={login}
        >
          {loading ? "Procesando" : "Iniciar sesión"}
        </Button>
      </div>
      <div className="mt-4 text-center">
        <strong className="text-gray-400">No tienes cuenta?</strong>
        <Link href="/register" className="pl-2 text-white">
          Registrate
        </Link>
      </div>
    </div>
  );
}
