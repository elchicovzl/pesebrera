import Image from "next/image";
import Link from "next/link";

export default function AuthNav() {
  return (
    <Link href="/" className="flex absolute top-2 left-2 lg:top-5 lg:left-10 items-center">
      <Image width="50" height="50" src="/images/logo.png" alt="logo" />
      <h1 className="text-2xl font-normal ml-2 text-[#cbd272]">Pesebrera el Grillo</h1>
    </Link >
  );
}
