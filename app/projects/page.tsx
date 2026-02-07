const projects = [
  {
    title: "Cost-Saving Microservice",
    description:
      "Designed and built a service at Microsoft that saves $5M annually, impacting both infrastructure efficiency and operational cost.",
    technologies: ["Azure", "C#", "Microservices"],
  },
  {
    title: "Global Infrastructure Deployment",
    description:
      "Architected the infrastructure deployment module that enabled scaling services across 21 Azure regions in under a year.",
    technologies: ["Azure", "Infrastructure as Code", "DevOps"],
  },
  {
    title: "Security & Scale Backend Systems",
    description:
      "Led backend development for systems that handle tens of billions of calls daily, playing a critical role in safeguarding customer data at massive scale.",
    technologies: ["Microservices", "Security", "High Availability"],
  },
  {
    title: "Service Fabric Test Framework",
    description:
      "Built a fully automated test framework that bootstrapped Service Fabric across 500+ VMs, enabling rigorous testing and quality assurance.",
    technologies: ["Service Fabric", "Automation", "Testing"],
  },
  {
    title: "Cloud Mail Migration Services",
    description:
      "Designed and developed cloud-based services at SkyKick for seamless mail migration to Microsoft Office 365.",
    technologies: ["Azure", "C#", "Office 365", "SQL Server"],
  },
  {
    title: "Pharmacogenetic SaaS Platform",
    description:
      "Developed end-to-end cloud-based SaaS solutions that transformed pharmacogenetic test results into actionable clinical reports.",
    technologies: ["Cloud", "SaaS", "Healthcare"],
  },
  {
    title: "Oracle BPEL UI Wizard",
    description:
      "Designed and implemented a UI wizard that detects file formats and suggests appropriate converted XML formats, also generates XSD.",
    technologies: ["Java", "XML", "XSD", "Oracle"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-2 text-foreground/60">Key projects and achievements</p>

      <div className="mt-10 grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-foreground/70">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-foreground/10 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
