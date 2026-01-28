"use client";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Together</span>
                        </h2>
                        <p className="text-gray-400">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                    <a href="mailto:dulindineth2021@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        dulindineth2021@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                    <a href="tel:+94719868667" className="text-gray-400 hover:text-green-400 transition-colors">
                                        +94 71 986 8667
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                    <p className="text-gray-400">
                                        Matara , Sri Lanka
                                    </p>
                                </div>
                            </div>

                        </div>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-500 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="text-center mt-20 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Dulina Dineth. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
