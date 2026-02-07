export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-10 text-center">
      <h1 className="text-5xl font-bold">Swatantra Yadav</h1>
      <p className="mt-2 text-xl text-foreground/70">Senior Software Engineer @ Microsoft</p>
      <p className="mt-6 max-w-2xl text-lg text-foreground/60">
        Architecting microservices that handle tens of billions of calls daily. 
        Focused on precision, performance, and security within high-scale environments.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/about"
          className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="px-6 py-3 border border-foreground rounded-lg hover:bg-foreground/10 transition-colors"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}