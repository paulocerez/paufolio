import React from "react";
import { ArrowLeft, ArrowRight, Layers, Zap, Eye } from "lucide-react";
import Image from "next/image";

export default function Init() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden p-8 md:p-16">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-12 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Exploring Offsets
        </span>
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-50 animate-pulse" />
      </h1>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start mb-16">
          <p className="text-lg md:text-xl text-gray-700 max-w-md mb-8 md:mb-0 md:mr-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            This page demonstrates various elements with horizontal and vertical
            offsets, creating an interesting visual layout.
            <Layers className="inline-block ml-2 text-purple-600" />
          </p>

          <div className="relative left-0 md:left-1/4 mb-12 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Placeholder image"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform hover:rotate-3 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-bounce" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-end justify-end mb-16">
          <div className="relative -left-0 md:-left-12 mb-12 md:mb-0 mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=250&width=350"
              alt="Another placeholder image"
              width={350}
              height={250}
              className="rounded-lg shadow-lg transform hover:-rotate-3 transition-transform duration-300"
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-50 animate-ping" />
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-md mb-8 md:mb-0 md:ml-8 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            By positioning elements with offsets, we can create depth and visual
            interest in our layouts.
            <Zap className="inline-block ml-2 text-yellow-600" />
          </p>
        </div>
      </div>

      <div className="w-full bg-transparent fixed top-[80%] flex justify-center items-center z-50 space-x-4">
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md"
          aria-label="Previous page"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md"
          aria-label="Next page"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed bottom-4 left-4 text-sm text-gray-500 flex items-center">
        <Eye className="w-4 h-4 mr-1" />
        Videos by Simon Leander.
      </div>
    </div>
  );
}
