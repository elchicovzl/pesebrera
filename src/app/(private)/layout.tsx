import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivateLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="bg-[#111827] overflow-auto  flex flex-col h-screen">
        <Navbar />
        <div className="mx-auto max-w-screen-xl w-full mb-10">
          {children}
        </div>
        <Footer />
      </main>
     );
  }
   
  export default PrivateLayout;