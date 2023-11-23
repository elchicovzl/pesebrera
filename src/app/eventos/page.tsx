import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import PostCard from "@/components/postCard";
import Footer from "@/components/Footer";
import { getEvents } from "@/actions/get-events";

export default async function Explore() {

  const posts = await getEvents();
 
  return (
    <div>
      <Navbar />
      <div className="container min-h-screen">
        <div className="flex justify-center items-center mt-10 flex-col">
          <h2 className="text-4xl font-bold text-[#cbd272]">Proximos Eventos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:place-content-center sm:items-center mt-10">
            {posts.map((item) => (
              <PostCard post={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
