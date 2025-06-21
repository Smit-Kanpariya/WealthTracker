import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header
      className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-blue-100 cyber-border"
      style={{ zIndex: 9999 }}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src={"/logo.png"}
            alt="WealthTracker Logo"
            width={580}
            height={150}
            className="max-h-16 w-auto object-contain cursor-pointer scale-150"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            <a
              href="#features"
              className="text-blue-700 hover:text-blue-900 transition-all duration-300 relative group robotic-text"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-blue-700 hover:text-blue-900 transition-all duration-300 relative group robotic-text"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 relative z-10">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-white flex items-center gap-2 transition-all duration-300 relative z-10"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline robotic-text">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create" className="relative z-10">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0 glow-blue transition-all duration-300 hover:scale-105 cursor-pointer">
                <PenBox size={18} />
                <span className="hidden md:inline robotic-text">
                  Add Transaction
                </span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-blue-200 bg-transparent hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 robotic-text cursor-pointer relative z-10"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="relative z-10">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "w-10 h-10 border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 cursor-pointer",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
