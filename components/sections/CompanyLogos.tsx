import Image from "next/image";

const companies = [
  { name: "telli", logo: "/company-logos/telli-logo.png", description: "Forward Deplyed Engineering" },
  { name: "Ivy", logo: "/company-logos/ivy-logo.png", description: "Software Engineering" },
  { name: "LANCH", logo: "/company-logos/lanch-logo.png", description: "Engineering & Strategy" },
  { name: "Cardino", logo: "/company-logos/cardino-logo.png", description: "Product & Ops" },
  { name: "Octopus Energy", logo: "/company-logos/octopus-logo.png", description: "Data Analysis" },
  { name: "Enpal", logo: "/company-logos/enpal-logo.png", description: "Recruiting & Operations" },
  { name: "CODE University", logo: "/company-logos/code-logo.png", description: "B.Sc. Software Engineering" },
];

export default function CompanyLogos() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-crimson font-light text-white mb-8">
      Companies I have worked with
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((company, index) => (
          <div key={company.name} className="flex items-start space-x-3">
            {/* Logo on the left */}
            <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-lg p-1">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
            
            {/* Company info on the right */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm font-light mb-1">
                {company.name}
              </h3>
              <p className="text-gray-500 text-xs font-light">
                {company.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
