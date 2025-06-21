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
    if (!imageElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      // Debugging: see if scroll event fires
      // Remove this log after verifying
      console.log("scroll fired", scrollPosition);
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Fire once on mount in case user is already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-white tech-grid">
      {/* Floating Orbs Background */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Animated Grid Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-500 rounded-full animate-pulse animate-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse animate-delay-500"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse animate-delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse animate-delay-2000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Title with Logo Colors */}
        <h1
          ref={titleRef}
          className="relative inline-block text-4xl md:text-7xl lg:text-8xl xl:text-[105px] pb-8 font-extrabold leading-[1.15]"
        >
          <span
            className="gradient-text relative z-10 block mb-4 pb-2"
            style={{
              marginBottom: "0.5rem",
              paddingBottom: "0.5rem",
              overflow: "visible",
              display: "inline-block",
            }}
          >
            Manage Your Finances
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-gray-700 text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              with
            </span>
            <span
              className="glitch-text gradient-text text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black pb-2"
              data-text="Intelligence"
              style={{
                marginBottom: "0.5rem",
                paddingBottom: "0.5rem",
                overflow: "visible",
                display: "inline-block",
              }}
            >
              Intelligence
            </span>
          </div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-400/20 blur-3xl opacity-50"></div>
          </div>
        </h1>

        {/* Enhanced Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          An <span className="gradient-text-inline font-bold">AI-powered</span>{" "}
          financial management platform that helps you track, analyze, and
          optimize your spending with{" "}
          <span className="gradient-text-inline-blue font-bold">
            real-time insights
          </span>
          .
        </p>

        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform font-semibold text-lg glow-effect"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </Link>
          <Link href="https://www.youtube.com/">
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-4 border-2 border-purple-500 text-purple-600 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 transform font-semibold text-lg"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4"
                />
              </svg>
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* Enhanced Hero Image */}
        <div className="relative mt-8">
          <div ref={imageRef} className="hero-image-enhanced relative">
            <div className="relative">
              <Image
                src="/banner.jpeg"
                width={1280}
                height={720}
                alt="Wealth Tracker Dashboard Preview"
                className="rounded-xl shadow-2xl border-2 border-purple-200/50 mx-auto relative z-0 backdrop-blur-sm"
                priority
              />
            </div>
          </div>

          {/* Enhanced System Status */}
          <div className="absolute -top-12 -left-12 text-xs text-purple-500 font-mono opacity-70 font-semibold">
            &gt; WEALTH_TRACKER_ONLINE
          </div>
          <div className="absolute -top-8 -right-12 text-xs text-blue-500 font-mono opacity-70 font-semibold">
            AI_STATUS: ACTIVE
          </div>
        </div>

        {/* Enhanced Tech Specs */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-mono font-semibold">
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 tech-badge">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700">REAL-TIME PROCESSING</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 tech-badge">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse animate-delay-300"></div>
            <span className="text-gray-700">AI ANALYTICS</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-200 tech-badge">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse animate-delay-700"></div>
            <span className="text-gray-700">SECURE ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
