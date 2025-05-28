import React from "react";
import backgroundImage from "../assets/landing-background.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Where random finds become treasures
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A Marketplace where for everyone for eveything.
          </p>
        </div>
      </main>
    </div>
  );
}
