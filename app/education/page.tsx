const education = [
  {
    institution: "Cornell University",
    degree: "Certificate Program",
    field: "Machine Learning",
    period: "July 2024",
  },
  {
    institution: "University of Calgary",
    degree: "Master of Science (MS)",
    field: "Computer Integrated Manufacturing",
    period: "1996 - 1998",
  },
  {
    institution: "Motilal Nehru National Institute of Technology",
    degree: "Bachelor of Engineering (B.Engg.)",
    field: "Mechanical Engineering",
    period: "1992 - 1996",
  },
];

export default function EducationPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Education</h1>

      <div className="mt-10 space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-foreground/20 pl-6">
            <h2 className="text-xl font-semibold">{edu.institution}</h2>
            <p className="text-foreground/70">
              {edu.degree} in {edu.field}
            </p>
            <p className="text-sm text-foreground/50">{edu.period}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
