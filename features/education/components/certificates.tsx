import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Certificate, sampleCertificates } from "../data";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="group flex flex-col h-full border-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-800/20 hover:border-slate-500">
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-xl leading-none tracking-tight text-foreground/80 transition-colors duration-300 group-hover:text-foreground dark:group-hover:text-white">
            {certificate.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {certificate.issuer}
          </p>
        </div>
        <Badge 
          variant="default" 
          className="shrink-0"
        >
          {certificate.year}
        </Badge>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <p className="text-base text-foreground/80 leading-relaxed">
          {certificate.description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 pt-4 border-t">
        <a 
          href={certificate.verifyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={`Verify credential for ${certificate.name}`}
          className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold transition-transform duration-300 group-hover:translate-x-1" })}
        >
          Verify Credential <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </CardFooter>
    </Card>
  );
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="w-full mt-16 md:mt-24">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold tracking-tight border-b pb-4">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleCertificates.map((cert) => (
            <CertificateCard key={cert.name} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
