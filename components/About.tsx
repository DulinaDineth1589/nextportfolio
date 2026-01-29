"use client";
import React from "react";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <p className="text-lg glass-card p-6 rounded-2xl">
                            I am a passionate Software Engineering student with hands-on experience in mobile and web application development. I specialize in building user-friendly, efficient, and scalable applications using technologies like Flutter, Java, Kotlin, and modern web frameworks. Through academic and personal projects, I have developed strong problem-solving skills and a keen interest in creating innovative digital solutions. I am motivated to continuously learn new technologies and contribute to impactful software products.
                        </p>
                        <p className="text-lg glass-card p-6 rounded-2xl">
                            I design and develop mobile and web applications that solve real-world problems, focusing on performance, scalability, and user experience.
                        </p>
                        <p className="text-lg glass-card p-6 rounded-2xl">
                            I aim to grow as a professional software developer, contribute to impactful projects, and continuously improve my technical and problem-solving skills.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { number: "3+", label: "Years Software Engineering Knowledge (Undergraduate)" },
                            { number: "10+", label: "Projects Completed" },
                            { number: "6", label: "Months of Professional Experience as a Software Engineer at Donext Pvt Ltd" }
                        ].map((stat, index) => (
                            <div key={index} className="glass-card p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
