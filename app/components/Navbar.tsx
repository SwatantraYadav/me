import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-foreground/10">
      <Link href="/" className="text-xl font-bold">
        Portfolio
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-foreground/70 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-foreground/70 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-foreground/70 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/experience" className="hover:text-foreground/70 transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/education" className="hover:text-foreground/70 transition-colors">
            Education
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-foreground/70 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-foreground/70 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
