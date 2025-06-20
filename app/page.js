import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden robotic-grid">
        <div className="absolute inset-0 scan-line"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-500 cyber-border rounded-lg p-6 bg-white/50 backdrop-blur-sm glow-white hover:glow-blue"
              >
                <div className="text-5xl font-black text-blue-900 mb-3 robotic-text">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium tracking-wide robotic-text text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative circuit-lines">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-title animate-gradient-move">
              Everything you need to manage your finances
            </h2>
            <div className="w-24 h-1 blue-accent-bg mx-auto rounded-full glow-blue"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className={`group bg-white border-glow shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:scale-105 hover:glow-blue relative cyber-border ${
                  feature.title === "Smart Receipt Scanner"
                    ? "ring-2 ring-blue-500/30 ring-offset-2 ring-offset-white shadow-2xl shadow-blue-500/20"
                    : ""
                }`}
                style={
                  feature.title === "Smart Receipt Scanner"
                    ? {
                        background:
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(147, 197, 253, 0.05) 50%, rgba(59, 130, 246, 0.03) 100%)",
                        boxShadow:
                          "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                        animation: "pulse 3s ease-in-out infinite",
                      }
                    : {}
                }
              >
                {/* Enhanced scan line for receipt scanner */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    feature.title === "Smart Receipt Scanner"
                      ? "scan-line"
                      : "scan-line"
                  }`}
                ></div>

                {/* Special floating particles for receipt scanner */}
                {feature.title === "Smart Receipt Scanner" && (
                  <>
                    <div
                      className="absolute top-4 left-4 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-ping"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-6 left-8 w-1 h-1 bg-blue-600 rounded-full opacity-60 animate-ping"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                      className="absolute bottom-4 right-4 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-ping"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </>
                )}

                <CardContent className="space-y-6 p-8 relative z-10">
                  <div
                    className={`text-4xl flex items-center justify-center transition-all duration-500 relative ${
                      feature.title === "Smart Receipt Scanner"
                        ? "text-blue-600 group-hover:scale-125 group-hover:rotate-3"
                        : "text-blue-600 group-hover:scale-110"
                    } group-hover:blue-accent`}
                  >
                    {/* Special container for receipt scanner icon */}
                    {feature.title === "Smart Receipt Scanner" ? (
                      <div className="relative">
                        {/* Animated border around icon */}
                        <div
                          className="absolute -inset-3 rounded-full border-2 border-blue-500/20 animate-spin"
                          style={{ animationDuration: "8s" }}
                        ></div>
                        <div
                          className="absolute -inset-2 rounded-full border border-blue-400/30 animate-spin"
                          style={{
                            animationDuration: "6s",
                            animationDirection: "reverse",
                          }}
                        ></div>

                        {/* Scanning line effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
                        </div>

                        {feature.icon}

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                      </div>
                    ) : (
                      feature.icon
                    )}
                  </div>

                  <h3
                    className={`text-xl font-bold transition-all duration-300 robotic-text text-center ${
                      feature.title === "Smart Receipt Scanner"
                        ? "text-blue-800 group-hover:text-blue-600"
                        : "text-blue-900 group-hover:blue-accent"
                    }`}
                  >
                    {feature.title}
                    {feature.title === "Smart Receipt Scanner" && (
                      <div className="flex items-center justify-center mt-2 space-x-2">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                          style={{
                            boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.4)",
                            animation: "pulse 2s ease-in-out infinite",
                          }}
                        >
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
                          AI POWERED
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-bounce"
                          style={{ animationDelay: "0.5s" }}
                        >
                          NEW
                        </span>
                      </div>
                    )}
                  </h3>

                  <p
                    className={`leading-relaxed text-center transition-all duration-300 ${
                      feature.title === "Smart Receipt Scanner"
                        ? "text-gray-800 group-hover:text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {feature.title === "Smart Receipt Scanner" ? (
                      <span className="relative">
                        Extract data automatically from receipts using{" "}
                        <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
                          advanced AI technology
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                        </span>
                        <span className="block mt-2 text-sm text-blue-600 font-medium">
                          99.9% accuracy • Instant processing • Secure
                        </span>
                      </span>
                    ) : (
                      feature.description
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-blue-50 relative overflow-hidden robotic-grid">
        <div className="absolute top-10 left-10 w-20 h-20 glow-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 glow-blue rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-title animate-gradient-move">
              How It Works
            </h2>
            <div className="w-24 h-1 blue-accent-bg mx-auto rounded-full glow-blue"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center group relative">
                {/* Connecting line for desktop */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 gradient z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 blue-accent-bg rounded-full flex items-center justify-center mx-auto mb-8 glow-blue group-hover:glow-white transform group-hover:scale-110 transition-all duration-500 text-white cyber-border">
                    <div className="text-2xl robotic-text font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:blue-accent transition-colors duration-300 robotic-text text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-white relative circuit-lines"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-title animate-gradient-move">
              What Our Users Say
            </h2>
            <div className="w-24 h-1 blue-accent-bg mx-auto rounded-full glow-blue"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="group bg-white border-glow shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:scale-105 relative cyber-border hover:glow-blue"
              >
                <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full border-glow group-hover:glow-blue transition-all duration-300"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white glow-white"></div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900 group-hover:blue-accent transition-colors duration-300 robotic-text">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 font-medium robotic-text">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="blue-accent text-4xl opacity-20 absolute -top-2 -left-2">
                      "
                    </div>
                    <p className="text-gray-700 leading-relaxed relative z-10 italic">
                      {testimonial.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden robotic-grid">
        <div className="absolute inset-0 circuit-lines opacity-30"></div>
        <div className="absolute top-10 left-10 w-20 h-20 glow-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 glow-blue rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-white rounded-full blur-3xl opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight glitch-text robotic-text"
            data-text="Ready to Take Control of Your Finances?"
          >
            Ready to Take Control of Your{" "}
            <span className="blue-accent">Finances?</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Join thousands of users who are already managing their finances
            smarter with{" "}
            <span className="font-bold text-white robotic-text">
              WealthTracker.io
            </span>
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="blue-accent-bg text-white hover:bg-blue-600 font-bold px-12 py-4 text-lg rounded-full glow-blue hover:glow-white transform hover:scale-105 transition-all duration-300 border-glow cyber-border robotic-text scan-line"
            >
              START FREE TRIAL
              <span className="ml-2 text-xl">→</span>
            </Button>
          </Link>
          <div className="mt-8 text-gray-400 text-sm robotic-text">
            No credit card required
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
