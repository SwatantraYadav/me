export default function AboutPage() {
  const skills = [
    "Microservices Architecture",
    "Azure",
    "C#",
    ".NET Framework",
    "Python",
    "NumPy",
    "SQL Server",
    "Service Fabric",
    "Java / J2EE",
    "Machine Learning",
    "Deep Learning",
  ];

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">About Me</h1>
      
      <section className="mt-8">
        <p className="text-lg text-foreground/80 leading-relaxed">
          I specialize in architecting and implementing microservices that handle tens of billions 
          of calls daily. My work focuses on precision, performance, and security within high-scale 
          environments, backed by certifications including several courses in ML from Cornell University.
        </p>
        <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
          At Microsoft, I designed a service that saves $5M+ annually and led the development of 
          scalable infrastructures across 21 Azure regions. With expertise in microservices, software 
          infrastructure, and security, I am dedicated to delivering impactful and innovative solutions 
          that meet complex challenges.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="mt-4 space-y-2 text-foreground/80">
          <li>• Machine Learning Certificate Program - Cornell University (2024)</li>
          <li>• CIS537: Deep Learning and Neural Networks</li>
          <li>• CIS534: Decision Trees and Model Selection</li>
          <li>• CIS533: Learning with Linear Classifiers</li>
          <li>• MCPS: Microsoft Certified Professional</li>
          <li>• Google IT Support Certificate</li>
        </ul>
      </section>
    </main>
  );
}
