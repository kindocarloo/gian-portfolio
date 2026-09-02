import Link from "next/link";
import { FaPlay, FaAws } from "react-icons/fa"; 
import { VscGithubAlt } from "react-icons/vsc"; 
import { FiLinkedin } from "react-icons/fi"; 

export function ContactSection() {
  return (
    <section id="contact" className="w-full mt-16 md:mt-24 mb-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
          Let's Work Together
        </h2>
        
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 w-full">
          
          {/* Email Link */}
          <Link 
            href="mailto:giancjsuico29@gmail.com" 
            className="group flex items-center gap-2 sm:gap-3 border-b border-border pb-1 font-mono text-sm sm:text-base font-semibold text-foreground/80 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            <FaPlay className="text-[10px] text-blue-500" />
            <span>giancjsuico29@gmail.com</span>
          </Link>

          {/* GitHub Link */}
          <Link 
            href="https://github.com/kindocarloo" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 border-b border-border pb-1 font-mono text-sm sm:text-base font-semibold text-foreground/80 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            <VscGithubAlt className="text-xl" />
            <span>github</span>
          </Link>

          {/* LinkedIn Link */}
          <Link 
            href="https://www.linkedin.com/in/gian-carlo-suico-911154330/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 border-b border-border pb-1 font-mono text-sm sm:text-base font-semibold text-foreground/80 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            <FiLinkedin className="text-xl" />
            <span>linkedin</span>
          </Link>

          {/* AWS Builder Center Link */}
          <Link 
            href="https://builder.aws.com/community/@kindo?tab=badges" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 border-b border-border pb-1 font-mono text-sm sm:text-base font-semibold text-foreground/80 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            <FaAws className="text-xl" />
            <span>aws.builder.center</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
