import { BlogActionButtons } from "../components/BlogActionButtons";

const posts = [
  {
    title: "Building Scalable Microservices",
    date: "February 5, 2026",
    excerpt:
      "How a stateless, partition-aware ingestion service scales reliably using Event Hub consumer groups, entity channels, and bounded asynchronous batching.",
    tags: ["Architecture", "Distributed Systems", "Event Hubs"],
    href: "/telemetry-uploader.html",
  },
  {
    title: "Building an Android App for a Marketplace",
    date: "July 16, 2026",
    excerpt:
      "A deep dive into creating an agricultural marketplace app (MetaAgro) for farmers in India using Flutter and Firebase.",
    tags: ["Mobile", "Flutter", "Firebase", "Android"],
    href: "/marketplace-app.html",
  },
  {
    title: "Infrastructure as Code Best Practices",
    date: "January 20, 2026",
    excerpt:
      "How to manage cloud infrastructure efficiently using modern IaC tools and techniques.",
    tags: ["DevOps", "IaC", "Cloud"],
  },
  {
    title: "Optimizing Cloud Costs at Scale",
    date: "January 8, 2026",
    excerpt:
      "Strategies and patterns for reducing cloud spending without sacrificing performance or reliability.",
    tags: ["Cloud", "Cost Optimization", "Azure"],
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-2 text-foreground/60">
        Thoughts on software engineering, cloud architecture, and technology
      </p>

      <div className="mt-10 grid gap-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors cursor-pointer"
          >
            <time className="text-sm text-foreground/50">{post.date}</time>
            <h2 className="mt-2 text-xl font-semibold">
              {post.href ? (
                <a href={post.href} className="hover:underline">
                  {post.title}
                </a>
              ) : (
                post.title
              )}
            </h2>
            <p className="mt-2 text-foreground/70">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-foreground/10 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-foreground/10">
              <BlogActionButtons title={post.title} href={post.href} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
