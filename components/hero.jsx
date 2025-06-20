"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 robotic-grid relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1
          ref={titleRef}
          className="relative inline-block text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold text-blue-900 drop-shadow-md"
        >
          <span className="relative z-10">Manage Your Finances</span>
          <span className="absolute inset-0 -z-1 animate-gradient-move rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 blur-2xl opacity-60"></span>
          <br />
          with <span className="blue-accent glitch-text" data-text="Intelligence">Intelligence</span>
        </h1>

        <p className="text-xl text-blue-900 mb-8 max-w-2xl mx-auto leading-relaxed robotic-text">
          An <span className="text-blue-600 font-semibold">AI-powered</span>{" "}
          financial management platform that helps you track, analyze, and
          optimize your spending with{" "}
          <span className="text-blue-700 font-semibold">
            real-time insights
          </span>
          .
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 glow-blue transition-all duration-300 hover:scale-105 robotic-text font-semibold"
            >
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-all duration-300 hover:scale-105 robotic-text font-semibold"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Hero Image with Enhanced Styling */}
        <div className="hero-image-wrapper mt-5 md:mt-0 relative">
          {/* Glowing frame effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-800/20 rounded-lg blur-xl"></div>

          <div ref={imageRef} className="hero-image relative">
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-blue-600 z-10"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-blue-600 z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-blue-600 z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-blue-600 z-10"></div>

              <Image
                src="/banner.jpeg"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border mx-auto relative z-0"
                priority
              />

              {/* Scanning line overlay */}
              <div className="absolute inset-0 scan-line rounded-lg"></div>
            </div>
          </div>

          {/* Floating UI elements */}
          <div className="absolute -top-8 -left-8 text-xs text-gray-400 robotic-text opacity-70">
            &gt; SYSTEM_ONLINE
          </div>
        </div>

        {/* Tech specs display */}
        <div className="mt-16 flex justify-center space-x-8 text-sm text-gray-500 robotic-text">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>REAL-TIME PROCESSING</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
            <span>AI ANALYTICS</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-700"></div>
            <span>SECURE ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
