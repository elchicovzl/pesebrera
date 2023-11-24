"use client";
import Link from "next/link";
import Image from "next/image";
import { formateDate } from "@/lib/utils";

export default function PostCard({ post }: { post: UiApiType }) {
  return (
    <>
    
      <div className="flex flex-col w-full bg-white rounded shadow-lg">
        <div className="w-full h-64 bg-top bg-cover rounded-t" 
        style={{
          backgroundImage: `url(http://localhost:3000/uploads/${post.image})` 
        }}
      >
        </div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">Jan</div>
                <div className="md:text-6xl">13</div>
                <div className="md:text-xl">7 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{post.title}</h1>
                <p className="leading-normal">{post.description}</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col w-full bg-white rounded shadow-lg">
        <div className="w-full h-64 bg-top bg-cover rounded-t" 
        style={{
          backgroundImage: `url(http://localhost:3000/uploads/${post.image})` 
        }}
      >
        </div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">Jan</div>
                <div className="md:text-6xl">13</div>
                <div className="md:text-xl">7 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{post.title}</h1>
                <p className="leading-normal">{post.description}</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col w-full bg-white rounded shadow-lg">
        <div className="w-full h-64 bg-top bg-cover rounded-t" 
        style={{
          backgroundImage: `url(http://localhost:3000/uploads/${post.image})` 
        }}
      >
        </div>
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                <div className="md:text-3xl">Jan</div>
                <div className="md:text-6xl">13</div>
                <div className="md:text-xl">7 pm</div>
            </div>
            <div className="p-4 font-normal text-gray-800 md:w-3/4">
                <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{post.title}</h1>
                <p className="leading-normal">{post.description}</p>
            </div>
          </div>
      </div>
    </> 
  );
}
