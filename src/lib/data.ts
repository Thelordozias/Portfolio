// ============================================================
// PORTFOLIO DATA — Edit this file to personalize your portfolio
// ============================================================

export const personal = {
  name: "Ozias",
  title: "CS Research & Systems Engineer",
  tagline: "Building reliable systems at the intersection of theory and practice.",
  email: "ozias@example.com",        // ← replace
  github: "https://github.com/Thelordozias",
  linkedin: "https://linkedin.com/in/ozias",  // ← replace
  twitter: "https://twitter.com/ozias",       // ← replace
  cv: "/cv-ozias.pdf",               // ← put your PDF in /public
  location: "Paris, France",
  available: true,
  bio: [
    "I'm a computer science student and researcher focused on systems programming, distributed computing, and applied algorithms.",
    "My work spans from low-level kernel internals to high-level distributed system design — with a constant focus on correctness, performance, and simplicity.",
    "Currently seeking research positions and transfer opportunities where I can contribute to meaningful systems-level challenges.",
  ],
};

export const skills = {
  languages: ["C", "C++", "Rust", "Python", "TypeScript", "Go", "OCaml", "Java"],
  systems: ["Linux Kernel", "POSIX", "Memory Management", "Concurrency", "Networking"],
  tools: ["GDB", "Valgrind", "Perf", "Docker", "Git", "LLVM", "CMake", "Makefile"],
  research: ["Distributed Systems", "Formal Verification", "Algorithm Design", "OS Internals"],
  web: ["Next.js", "React", "Node.js", "PostgreSQL", "REST APIs"],
};

export const projects = [
  {
    title: "MiniKernel",
    description:
      "A minimal x86-64 operating system kernel written in C and Assembly. Implements virtual memory, process scheduling, and a basic VFS layer.",
    tags: ["C", "Assembly", "x86-64", "OS"],
    github: "https://github.com/Thelordozias/minikernel",  // ← replace
    demo: null,
    status: "active" as const,
    highlights: [
      "Paging & virtual address space management",
      "Round-robin scheduler with preemption",
      "ELF binary loader",
    ],
  },
  {
    title: "Raft-RS",
    description:
      "A Rust implementation of the Raft consensus algorithm with log replication, leader election, and membership changes.",
    tags: ["Rust", "Distributed Systems", "Consensus"],
    github: "https://github.com/Thelordozias/raft-rs",  // ← replace
    demo: null,
    status: "active" as const,
    highlights: [
      "Full leader election & log replication",
      "Snapshotting & log compaction",
      "Chaos testing harness",
    ],
  },
  {
    title: "Allocator Bench",
    description:
      "A benchmarking suite comparing memory allocator strategies (buddy system, slab, TLSF). Measures fragmentation, throughput, and latency under various workloads.",
    tags: ["C", "Memory", "Benchmarking", "Systems"],
    github: "https://github.com/Thelordozias/allocator-bench",  // ← replace
    demo: null,
    status: "completed" as const,
    highlights: [
      "Buddy, slab, and TLSF implementations",
      "Real workload traces from Firefox & Redis",
      "Statistical analysis with gnuplot reports",
    ],
  },
  {
    title: "This Portfolio",
    description:
      "Personal portfolio built with Next.js 14 App Router, Tailwind CSS, Framer Motion, and deployed on Vercel with full SEO and analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/Thelordozias/Portfolio",
    demo: "https://ozias.dev",
    status: "active" as const,
    highlights: [
      "Vercel Analytics + Speed Insights",
      "Sitemap, robots.txt, Open Graph",
      "Fully typed & accessible",
    ],
  },
];

export const research = [
  {
    title: "Comparative Analysis of Wait-Free Queue Implementations on Modern Hardware",
    venue: "Undergraduate Research Paper · 2024",
    abstract:
      "We evaluate four wait-free queue algorithms under NUMA-aware workloads on modern multi-core CPUs, focusing on cache-line false sharing and contention patterns.",
    tags: ["Concurrency", "Lock-free", "NUMA", "C++"],
    link: null,
    type: "paper" as const,
  },
  {
    title: "Formal Verification of a Simplified TLS 1.3 Handshake in Coq",
    venue: "Course Project — Formal Methods · 2023",
    abstract:
      "A partial mechanised proof of correctness for the TLS 1.3 handshake protocol using the Coq proof assistant, focusing on the key-derivation phase.",
    tags: ["Coq", "Formal Verification", "Security", "TLS"],
    link: null,
    type: "report" as const,
  },
];

export const experience = [
  {
    role: "Systems Research Intern",
    org: "Lab Name",       // ← replace
    period: "Summer 2024",
    description: "Worked on memory allocator profiling and contributed to a lock-free data structures library used in production.",
    link: null,
  },
  {
    role: "Teaching Assistant — Operating Systems",
    org: "University Name", // ← replace
    period: "2023 – 2024",
    description: "Led weekly lab sessions on process management, file systems, and concurrency for a class of 80 students.",
    link: null,
  },
];

export const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University Name",  // ← replace
    period: "2022 – Present",
    gpa: "3.9 / 4.0",
    relevant: ["Operating Systems", "Distributed Systems", "Algorithms", "Formal Methods", "Computer Architecture"],
  },
];
