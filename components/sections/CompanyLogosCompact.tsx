import Image from "next/image";

const companies = [
  { name: "telli", logo: "/company-logos/telli-logo.png" },
  { name: "Ivy", logo: "/company-logos/ivy-logo.png" },
  { name: "LANCH", logo: "/company-logos/lanch-logo.png" },
  { name: "Cardino", logo: "/company-logos/cardino-logo.png" },
  { name: "Octopus Energy", logo: "/company-logos/octopus-logo.png" },
  { name: "Enpal", logo: "/company-logos/enpal-logo.png" },
  { name: "CODE University", logo: "/company-logos/code-logo.png" },
];

export default function CompanyLogosCompact() {
  return (
    <div className="py-6">
      <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
        {companies.map((company, index) => (
          <div
            key={company.name}
            className="group relative w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 flex items-center justify-center p-2"
            title={company.name}
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={32}
              height={32}
              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-xs font-light">
          Companies I've worked with
        </p>
      </div>
    </div>
  );
}
