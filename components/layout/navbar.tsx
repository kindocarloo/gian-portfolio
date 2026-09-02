import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex w-full h-14 items-center justify-between">
                <div className="font-bold ml-6 text-3xl">
                    G I A N
                </div>  

                <div className="flex items-center gap-6 mr-6">
                <nav className = "hidden md:flex gap-4">
                    <a href="#about" className="text-xs font-medium hover:underline hover:underline-offset-4">About</a>
                    <a href="#projects" className="text-xs font-medium hover:underline hover:underline-offset-4">Projects</a>
                    <a href="#experiences" className="text-xs font-medium hover:underline hover:underline-offset-4">Experience</a>
                    <a href="#education" className="text-xs font-medium hover:underline hover:underline-offset-4">Education</a>
                    <a href="#skills" className="text-xs font-medium hover:underline hover:underline-offset-4">Toolbox</a>
                    <a href="#contact" className="text-xs font-medium hover:underline hover:underline-offset-4">Contact</a>
                </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}