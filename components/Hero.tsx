"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6 sm:space-y-8 order-2 md:order-1 text-center md:text-left">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-blue-400 font-medium tracking-wide">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Dulina <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Dineth</span>
                        </h1>
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-400">
                            Software Developer
                        </h3>
                        <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            I build exceptional digital experiences that differ from the norm.
                            Focused on creating accessible, pixel-perfect, and performant web solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 sm:px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-6 pt-4">
                        <a href="https://github.com/DulinaDineth1589" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/dulina-dineth-4b52a4311" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center order-1 md:order-2">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-glow" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden bg-black/50 backdrop-blur-sm animate-float">
                            <Image
                                src="/profile.jpg"
                                alt="Dulina Dineth"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
