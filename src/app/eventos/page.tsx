import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import PostCard from "@/components/postCard";
import { getEvents } from "@/actions/get-events";

export default async function Explore() {

  const posts = await getEvents();

  if (posts && posts.length == 0) {
    return (
      <div className="h-screen">
        <h2 className="text-[#cbd272] text-4xl font-bold mt-20 text-center px-3">No hay fecha de Eventos en este momento.</h2>
      </div>
    )
  }
 
  return (
    <div>
      <div className="container sm:min-h-screen">
        <div className="flex justify-center items-center mt-10 flex-col">
          <h2 className="text-4xl font-bold text-[#cbd272]">Proximos Eventos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:place-content-center sm:items-center mt-10">
            {posts.map((item) => (
              <PostCard post={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
