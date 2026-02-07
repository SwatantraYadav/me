export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-2 text-foreground/60">Let&apos;s connect!</p>

      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-foreground/10 rounded-full">
            <span className="text-xl">✉️</span>
          </div>
          <div>
            <p className="text-sm text-foreground/50">Email</p>
            <a
              href="mailto:swatantra_y@hotmail.com"
              className="text-lg hover:underline"
            >
              swatantra_y@hotmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-foreground/10 rounded-full">
            <span className="text-xl">💼</span>
          </div>
          <div>
            <p className="text-sm text-foreground/50">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/swatantra-yadav-5362681"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              linkedin.com/in/swatantra-yadav-5362681
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-foreground/10 rounded-full">
            <span className="text-xl">📍</span>
          </div>
          <div>
            <p className="text-sm text-foreground/50">Location</p>
            <p className="text-lg">Redmond, Washington, United States</p>
          </div>
        </div>
      </div>
    </main>
  );
}
