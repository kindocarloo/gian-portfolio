"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex w-full h-14 items-center justify-between">
                <div className="font-bold ml-6 text-3xl">
                    G I A N
                </div>  

                <div className="flex items-center gap-4 mr-6">
                    <nav className="hidden md:flex gap-4">
                        <a href="#about" className="text-xs font-medium hover:underline hover:underline-offset-4">About</a>
                        <a href="#projects" className="text-xs font-medium hover:underline hover:underline-offset-4">Projects</a>
                        <a href="#experiences" className="text-xs font-medium hover:underline hover:underline-offset-4">Experience</a>
                        <a href="#education" className="text-xs font-medium hover:underline hover:underline-offset-4">Education</a>
                        <a href="#skills" className="text-xs font-medium hover:underline hover:underline-offset-4">Toolbox</a>
                        <a href="#contact" className="text-xs font-medium hover:underline hover:underline-offset-4">Contact</a>
                    </nav>
                    <ThemeToggle />
                    <button 
                        className="md:hidden flex items-center justify-center p-1" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Accordion Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="flex flex-col py-4 gap-4 px-6">
                        <a href="#about" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">About</a>
                        <a href="#projects" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">Projects</a>
                        <a href="#experiences" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">Experience</a>
                        <a href="#education" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">Education</a>
                        <a href="#skills" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">Toolbox</a>
                        <a href="#contact" onClick={toggleMobileMenu} className="text-sm font-medium hover:underline hover:underline-offset-4">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    )
}