import AuthNav from "@/components/AuthNav";
import Image from "next/image";

const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
        <main className="h-screen">
            <AuthNav />
            <div className="flex items-center justify-center h-screen">
               
                <div className="flex justify-center items-center mt-20 lg:mt-0 w-1/2">
                    {children}
                </div>
            </div>
        </main>
    );
  }
   
export default AuthLayout;