const posts = [
  {
    title: "Building Scalable Microservices",
    date: "February 5, 2026",
    excerpt:
      "Lessons learned from designing and deploying microservices that handle billions of requests daily.",
    tags: ["Architecture", "Microservices", "Azure"],
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
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
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
          </article>
        ))}
      </div>
    </main>
  );
}
