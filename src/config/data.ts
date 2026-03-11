export const portfolioData = {
  personal: {
    name: "Mohammed Aqeel Ahmed",
    role: "Full-Stack Engineer",
    headline: "Building scalable MERN applications, Web3 dApps, and Applied AI tools.",
    bio: "I am a developer focused on writing clean, production-ready code. I specialize in the MERN stack, Next.js, and TypeScript, with a strong interest in blockchain technology and zero-knowledge proofs.",
    github: "https://github.com/aqeell7",
    email: "m.aqeelahmed@outlook.com",
  },
  education: {
    degree: "B.Tech Mechanical Engineering",
    institution: "MLR Institute of Technology, Hyderabad",
    year: "2020 - 2023",
  },
  extracurricular: "Volunteered 350 hours with the Cognizant Outreach Program, India.",
  projects: [
    {
      title: "Uptime Monitor",
      description: "Built a real-time monitoring dashboard tracking website status and response times with automated health checks using Node-Cron and instant Socket.io updates. Implemented JWT authentication and bcrypt hashing.",
      techStack: ["MERN Stack", "Socket.io", "Node-Cron", "JWT"],
      image: "/projects/uptime-monitor-dash-1.png",
      githubLink: "https://github.com/aqeell7/uptime-monitor",
      liveLink: "https://monitor.aqeelahmed.co.in/",
    },
    {
      title: "Financial Research Tool",
      description: "A financial data analysis and research application. Actively developing features for data visualization and tracking.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      image: "/projects/Financial-research-tool-1.png",
      githubLink: "https://github.com/aqeell7/financial-research-tool",
      liveLink: "https://financial-research-tool-eight.vercel.app/",
    },
    {
      title: "100xverifier",
      description: "Built a decentralized application for NFT claiming upon course verification using Zero-Knowledge Proofs via Reclaim Protocol SDK, ensuring privacy without accessing personal data.",
      techStack: ["Next.js", "React", "Ethers.js", "Reclaim Protocol SDK", "Zero-Knowledge Proofs"],
      image: "/projects/100xdevs.png",
      githubLink: "https://github.com/aqeell7/100xdevsVerifier",
      liveLink: "",
    },
    {
      title: "Scalable Task Management API",
      description: "Built a containerized RESTful API with TypeScript, implementing Controller-Service architecture and Redis caching to reduce MongoDB query load. Engineered a CI/CD pipeline achieving 80% code coverage.",
      techStack: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "Docker", "Jest"],
      image: "/projects/task-tracker.png",
      githubLink: "https://github.com/aqeell7/mini-task-tracker",
      liveLink: "",
    },
    {
      title: "CI/CD Pipeline Optimization (Open Source)",
      description: "Migrated a CI/CD pipeline from GitLab CI to GitHub Actions, automating testing and deployment with local workflow validation via Nektos Act.",
      techStack: ["GitHub Actions", "Nektos Act", "CI/CD"],
      image: "/projects/ci-cd-opensource.png",
      githubLink: "https://github.com/reclaimprotocol/attestor-core/pull/8",
      liveLink: "",
    }
  ]
};
