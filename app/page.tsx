import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-10 text-center">
      <div className="animate-scale-in animate-float">
        <Image
          src="/images/profile.jpg"
          alt="Swatantra Yadav"
          width={150}
          height={150}
          className="rounded-full mb-6 shadow-lg"
          priority
        />
      </div>
      <h1 className="text-5xl font-bold opacity-0 animate-fade-in animate-delay-100">
        Swatantra Yadav
      </h1>
      <p className="mt-2 text-xl text-foreground/70 opacity-0 animate-fade-in animate-delay-200">
        Senior Software Engineer @ Microsoft
      </p>
      <p className="mt-6 max-w-2xl text-lg text-foreground/60 opacity-0 animate-fade-in animate-delay-300">
        Architecting microservices that handle tens of billions of calls daily. 
        Focused on precision, performance, and security within high-scale environments.
      </p>
      <div className="mt-8 flex gap-4 opacity-0 animate-fade-in animate-delay-400">
        <a
          href="/about"
          className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="px-6 py-3 border border-foreground rounded-lg hover:bg-foreground/10 hover:scale-105 transition-all duration-300"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}