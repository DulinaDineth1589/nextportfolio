"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl text-blue-400 font-medium tracking-wide">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Dulina <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Dineth</span>
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-400">
                            Software Developer
                        </h3>
                        <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                            I build exceptional digital experiences that differ from the norm.
                            Focused on creating accessible, pixel-perfect, and performant web solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 pt-4">
                        <a href="https://github.com/DulinaDineth1589" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/dulina-dineth-4b52a4311" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
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
