"use client";
import React from "react";

const skillCategories = [
    {
        title: "Mobile Development",
        skills: ["React Native", "Flutter", "Dart", "Java", "Kotlin"]
    },
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", , "React", "Next.js", "Node.js", "Express", "Python", "PostgreSQL", "MongoDB",]
    },
    {
        title: "Tools",
        skills: ["Git", "InteliJ Idea", "Android Studio", "Postman", "Figma", "VS Code"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-12 sm:py-20 relative scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
                        A comprehensive overview of my technical expertise and the technologies I use to build digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-blue-400 border-b border-white/10 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full text-xs sm:text-sm text-gray-300 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
