import AuthNav from "@/components/AuthNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <main className="">
            <div className="flex items-start lg:items-center justify-center sm:min-h-screen">
                <div className="flex justify-center items-center mt-20 lg:mt-0 w-full lg:w-1/2">
                    {children}
                </div>
            </div>
        </main>
    );
  }
   
export default AuthLayout;