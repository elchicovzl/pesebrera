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
            <div className=" grid grid-cols-1 lg:grid-cols-2 ">
                <div className="hidden lg:block">
                    <Image
                        src="/images/horse.png"
                        width="600"
                        height="600"
                        alt="register logo"
                        className="h-3/4 w-3/4 mt-20 ml-20"
                    />
                </div>
                <div className="flex justify-center items-center mt-20 lg:mt-0">
                    {children}
                </div>
            </div>
        </main>
    );
  }
   
export default AuthLayout;