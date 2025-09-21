const workExperiences = [
  {
    organization: "telli (YC F24)",
    role: "Founders Associate",
    description: "Working as a Founders Associate at telli, a Y Combinator F24 company, focusing on strategic initiatives and operational support."
  },
  {
    organization: "Ivy",
    role: "Software Engineer",
    description: "Developed and maintained software solutions as a Software Engineer, contributing to the company's technical infrastructure and product development."
  },
  {
    organization: "LANCH",
    role: "Tech Entrepreneur in Residence",
    description: "Served as a Tech Entrepreneur in Residence, working on innovative solutions and strategic technology initiatives within the organization."
  },
  {
    organization: "Cardino",
    role: "Founders Associate Product",
    description: "Acted as a Founders Associate focused on product development, working closely with the founding team to shape product strategy and execution."
  },
  {
    organization: "Octopus Energy Services",
    role: "Business Development & Data",
    description: "Led business development initiatives while leveraging data analytics to drive growth and operational efficiency in the energy services sector."
  },
  {
    organization: "Enpal",
    role: "Recruiting & Processes",
    description: "Managed recruiting operations and process optimization, contributing to the company's growth through strategic talent acquisition and operational improvements."
  },
];

const educationExperiences = [
  {
    organization: "CODE University of Applied Sciences",
    role: "B.Sc. Software Engineering",
    description: "Completed a Bachelor of Science in Software Engineering, gaining comprehensive knowledge in modern software development practices, algorithms, and system design."
  },
];

export default function Work() {
  return (
    <div>
      <h2 className="text-2xl font-crimson font-light text-white mb-12">
        Experience
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-light text-white mb-6">Professional Experience</h3>
          <div className="space-y-6">
            {workExperiences.map((experience, index) => (
              <div key={index} className="py-4">
                <h4 className="text-base font-light text-white mb-2">
                  {experience.role} at {experience.organization}
                </h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-light text-white mb-6">Education</h3>
          <div className="space-y-6">
            {educationExperiences.map((experience, index) => (
              <div key={index} className="py-4">
                <h4 className="text-base font-light text-white mb-2">
                  {experience.role} at {experience.organization}
                </h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
