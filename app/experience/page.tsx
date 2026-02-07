const experiences = [
  {
    company: "Microsoft",
    role: "Senior Software Engineer",
    period: "May 2020 - Present",
    location: "United States",
    highlights: [
      "Architecting and designing microservices that protect millions of customers and handle tens of billions of calls every day.",
      "Designed and built a service that saves $5M annually—impacting both infrastructure efficiency and operational cost.",
      "Architected the infrastructure deployment module that enabled scaling services across 21 Azure regions in under a year.",
      "Led backend development for systems that play a critical role in safeguarding customer data at massive scale.",
    ],
  },
  {
    company: "SkyKick",
    role: "Software Development Engineer",
    period: "December 2015 - April 2020",
    location: "Seattle, Washington",
    highlights: [
      "Designed and developed cloud-based services for seamless mail migration to Microsoft Office 365.",
      "Researched and integrated IoT features to enhance product capabilities.",
      "Investigated and resolved complex issues related to COM-based Message API during Outlook profile migration.",
      "Utilized technologies such as Azure, C#, and SQL Server to deliver robust solutions.",
    ],
  },
  {
    company: "Translational Software",
    role: "Software Development Engineer",
    period: "October 2014 - August 2015",
    location: "Mercer Island",
    highlights: [
      "Developed end-to-end cloud-based SaaS solutions that transformed pharmacogenetic test results into actionable clinical reports.",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Development Engineer in Test-2 (Service Fabric team)",
    period: "September 2012 - September 2014",
    location: "Redmond, Washington",
    highlights: [
      "Contributed to the core team developing the Service Fabric product, a competitor to Kubernetes.",
      "Built a fully automated test framework that bootstrapped Service Fabric across 500+ VMs.",
      "Conducted rigorous testing, collecting metrics, logs, and process dumps to identify actionable bugs.",
    ],
  },
  {
    company: "Microsoft",
    role: "Development Lead",
    period: "April 2006 - August 2012",
    location: "Redmond, Washington",
    highlights: [
      "Led a team of developers, overseeing multiple projects and ensuring timely quarterly releases.",
      "Managed people through hiring, technical design, and code reviews, fostering a collaborative environment.",
      "Developed strong technical skills while enhancing team productivity and project delivery efficiency.",
    ],
  },
  {
    company: "Computer Sciences Corporation",
    role: "Senior Software Engineer",
    period: "April 2005 - March 2006",
    location: "",
    highlights: ["Java based development for Sun Microsystems."],
  },
  {
    company: "Oracle",
    role: "Senior Member Technical Staff",
    period: "March 2004 - March 2005",
    location: "Bangalore, India",
    highlights: [
      "Part of Oracle BPEL Process Manager product development team.",
      "Designed and implemented a UI wizard that detects file formats and suggests appropriate converted XML formats and generates XSD.",
    ],
  },
  {
    company: "Camilion Solutions (SAP Company)",
    role: "Software Developer",
    period: "February 2001 - February 2004",
    location: "",
    highlights: [
      "Worked on development of a customizable workflow software application for Property and Casualty Insurance business.",
      "Primary responsibilities were coding using Java / J2EE (JSP, EJB, JMS, Weblogic).",
    ],
  },
  {
    company: "Beta Systems AG",
    role: "Intermediate Software Developer",
    period: "August 1999 - January 2001",
    location: "Calgary, Canada",
    highlights: [
      "Developed Namespace Extensions and Shell Extensions to extend Windows Explorer using Visual C++.",
      "Extensively used Win32 API and COM interfaces.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Experience</h1>
      <p className="mt-2 text-foreground/60">20+ years of software engineering experience</p>

      <div className="mt-10 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-foreground/20 pl-6">
            <h2 className="text-xl font-semibold">{exp.role}</h2>
            <p className="text-foreground/70">
              {exp.company} {exp.location && `• ${exp.location}`}
            </p>
            <p className="text-sm text-foreground/50">{exp.period}</p>
            <ul className="mt-3 space-y-1">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-foreground/80">• {highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
