export const personalInfo = {
  name: "Full-Stack Developer",
  role: "Full-Stack Software Developer",
  status: "Information Systems Student & Software Engineer",
  tagline: "Building Practical Business Software",
  headline: "Full-Stack Developer Building Real-World Software",
  subtitle:
    "I build modern web applications and business management systems using React, Node.js, Express and MySQL.",
  bio: [
    "I am an Information Systems student and full-stack software developer focused on engineering practical, business-critical software solutions.",
    "My work bridges user-centered frontend interfaces with robust backend architectures, normalized database schemas, and secure REST APIs. Rather than building surface-level demo apps, I specialize in systems that handle complex business logic—including inventory workflows, multi-step transaction pipelines, role-based security, and accurate financial reporting.",
    "I believe great software is defined by clean code, reliable database integrity, and direct utility to business operations."
  ],
  links: {
    github: "https://github.com/getnet-t", // Placeholder: update with your GitHub URL
    linkedin: "https://www.linkedin.com/in/getnet-tesfa-61a8b0440/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BOB%2BvR9QgSLinoU%2F3Hnu30A%3D%3D", // Placeholder: update with your LinkedIn URL
    email: "mailto:gtesfa079@gmail.com", // Placeholder: update with your Email
  },
  resumeUrl: "#contact", // or path to your CV/resume PDF
};

export const techStackData = [
  {
    category: "Frontend",
    description: "Responsive, state-driven user interfaces built for usability and speed.",
    skills: [
      { name: "React", level: "Core", focus: "Hooks, Context API, Component Architecture" },
      { name: "JavaScript", level: "Core", focus: "ES6+, Async/Await, DOM & State Management" },
      { name: "HTML", level: "Core", focus: "Semantic markup, Accessibility (a11y), SEO" },
      { name: "CSS", level: "Core", focus: "Tailwind CSS, Responsive Grid, Flexbox" },
      { name: "Vite", level: "Core", focus: "Fast Modern Bundling & Build Pipelines" },
    ],
  },
  {
    category: "Backend",
    description: "Secure, scalable server architectures handling business rules and data flow.",
    skills: [
      { name: "Node.js", level: "Core", focus: "Event-driven runtime & asynchronous services" },
      { name: "Express.js", level: "Core", focus: "RESTful routing, middleware pipelines & error handling" },
      { name: "REST APIs", level: "Core", focus: "Resource modeling, HTTP standards & status handling" },
      { name: "JWT", level: "Security", focus: "Stateless token-based authentication & route protection" },
      { name: "bcrypt", level: "Security", focus: "Salted cryptographic password hashing" },
    ],
  },
  {
    category: "Database",
    description: "Normalized relational schemas, ACID transactions, and performant data retrieval.",
    skills: [
      { name: "MySQL", level: "Core RDBMS", focus: "Relational modeling, indexing, foreign keys" },
      { name: "SQL", level: "Core Querying", focus: "Complex joins, aggregations, data integrity constraints" },
      { name: "Database design", level: "Architecture", focus: "ER diagrams, normalization (3NF), relation mapping" },
      { name: "Transactions", level: "Reliability", focus: "ACID compliance, rollback mechanisms, race conditions" },
    ],
  },
  {
    category: "Tools",
    description: "Modern developer workflow tools for version control, testing, and deployment.",
    skills: [
      { name: "Git", level: "Tooling", focus: "Version control, branching strategies, rebase & merge" },
      { name: "GitHub", level: "Collaboration", focus: "Repository management, code review, workflow tracking" },
      { name: "Postman", level: "API Testing", focus: "Endpoint verification, environment variables & payloads" },
      { name: "Vercel", level: "Deployment", focus: "Frontend production hosting, CDN distribution & CI/CD" },
      { name: "Render", level: "Deployment", focus: "Backend web services, environment configurations" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "agrotheck",
    title: "AGROTHECK",
    category: "Business Management System",
    badge: "Enterprise Business Platform",
    description:
      "A full-stack business management system designed to manage inventory, purchasing, sales, customers, expenses, equipment assets and financial reporting.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    features: [
      "Inventory management",
      "Product management",
      "Purchasing",
      "Sales",
      "Customer management",
      "Customer debt and payments",
      "Expenses",
      "Equipment assets",
      "Business cash",
      "Profit/loss reporting",
      "Role-based access",
    ],
    architectureHighlights: [
      "Centralized financial ledger tracking income vs operational expenses in real time",
      "Normalized MySQL relational tables with relational cascades and debt balance constraints",
      "Role-based access control (RBAC) separating administrative audit controls from cashier operations",
    ],
    metricsPreview: [
      { label: "Core Modules", value: "8 Connected Modules" },
      { label: "Financial Engine", value: "Real-Time P&L" },
      { label: "Security", value: "JWT + Role Guards" },
    ],
    githubUrl: "https://github.com/getnet-t/agrotheck", // Placeholder
    liveUrl: "https://agrotheck-frontend.vercel.app/", // Blank if not deployed yet
    hasLiveDemo: true,
    mockupType: "business-dashboard",
  },
  {
    id: "pharmacy-system",
    title: "PHARMACY MANAGEMENT SYSTEM",
    category: "Healthcare Enterprise Workflow",
    badge: "Clinical & Retail Operation",
    description:
      "A full-stack pharmacy management system designed around real pharmacy business workflows.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "bcrypt", "Chapa"],
    features: [
      "Medicine management",
      "Role-based access",
      "Doctor prescription/ticket workflow",
      "Pharmacist verification",
      "Patient workflow",
      "Payment integration",
      "Database transactions",
    ],
    architectureHighlights: [
      "Multi-step verification pipeline: Doctor Prescription Ticket → Pharmacist Review → Dispense",
      "ACID database transactions ensuring stock deduction only commits upon successful payment verification",
      "Secure integration with Chapa payment gateway and encrypted credential hashing with bcrypt",
    ],
    metricsPreview: [
      { label: "Workflow Chain", value: "Doctor → Pharmacist → Patient" },
      { label: "Transaction Safety", value: "ACID Guaranteed" },
      { label: "Payment Gateway", value: "Chapa Integration" },
    ],
    githubUrl: "https://github.com/your-username/pharmacy-management-system", // Placeholder
    liveUrl: "", // Blank if not deployed yet
    hasLiveDemo: false,
    mockupType: "pharmacy-workflow",
  },
];

export const whatICanBuildData = [
  {
    id: "bms",
    title: "Business Management Systems",
    description:
      "Comprehensive internal platforms connecting departments, tracking daily operational revenue, and reducing manual administrative friction.",
    iconName: "Briefcase",
  },
  {
    id: "inventory",
    title: "Inventory Systems",
    description:
      "Real-time item tracking, SKU management, low-stock warnings, batch control, and automated audit trails for purchasing and dispatch.",
    iconName: "Package",
  },
  {
    id: "sales",
    title: "Sales Systems",
    description:
      "Point-of-sale workflows, invoice generation, customer receivables, partial payment handling, and real-time sales register logging.",
    iconName: "TrendingUp",
  },
  {
    id: "dashboards",
    title: "Dashboard Applications",
    description:
      "Data-rich analytical dashboards converting raw operational records into actionable charts, financial statements, and status overviews.",
    iconName: "LayoutDashboard",
  },
  {
    id: "apis",
    title: "REST APIs",
    description:
      "Well-structured backend services with clean endpoint design, input validation, standardized JSON error responses, and predictable payloads.",
    iconName: "Server",
  },
  {
    id: "databases",
    title: "Database-Driven Applications",
    description:
      "Relational architectures utilizing normalized schemas, foreign keys, transaction rollbacks, and optimized queries for zero data corruption.",
    iconName: "Database",
  },
  {
    id: "auth",
    title: "Authentication Systems",
    description:
      "Secure user onboarding and session validation with salted bcrypt password hashing, JWT token lifecycle management, and protected routes.",
    iconName: "ShieldCheck",
  },
  {
    id: "rbac",
    title: "Role-Based Applications",
    description:
      "Granular permission architectures separating administrator, manager, specialist, and operator roles with enforced server-side route guards.",
    iconName: "Users",
  },
];

export const developmentProcessData = [
  {
    step: "01",
    title: "Understand Business Requirements",
    subtitle: "Discovery & Logic Mapping",
    description:
      "Analyze the underlying business problem, user roles, operational workflows, inputs, edge cases, and reporting expectations before writing code.",
    deliverables: ["User Stories", "Workflow Mapping", "Entity Relationships"],
  },
  {
    step: "02",
    title: "Design Architecture & Database",
    subtitle: "Schema & System Blueprint",
    description:
      "Structure normalized database tables (3NF), establish foreign key relations, plan ACID transactions, and architect secure REST API routes.",
    deliverables: ["ER Diagrams", "Table Normalization", "API Endpoint Specs"],
  },
  {
    step: "03",
    title: "Build Frontend & Backend",
    subtitle: "Implementation & Integration",
    description:
      "Develop responsive React interfaces connected to modular Node.js/Express controllers, incorporating JWT authentication and data validation.",
    deliverables: ["Modular Components", "REST Controllers", "State Management"],
  },
  {
    step: "04",
    title: "Test & Debug",
    subtitle: "Verification & Integrity",
    description:
      "Verify API endpoints with Postman, test edge cases, validate database transaction rollbacks, test authorization barriers, and optimize responsiveness.",
    deliverables: ["Postman Test Suites", "Transaction Safety Checks", "Cross-Device QA"],
  },
  {
    step: "05",
    title: "Deploy",
    subtitle: "Production Release & Maintenance",
    description:
      "Deploy frontend interfaces to modern edge networks (Vercel) and backend web services to cloud environments (Render) with safe environment variable configuration.",
    deliverables: ["Production Build", "Environment Configs", "Live Monitoring"],
  },
];

export const githubShowcaseData = [
  {
    title: "agrotheck-business-system",
    description: "Full-stack enterprise business management system with inventory, P&L reporting, and role-based access.",
    language: "JavaScript / SQL",
    stars: "Featured",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    url: "https://github.com/your-username/agrotheck-business-system", // Placeholder
  },
  {
    title: "pharmacy-management-system",
    description: "Healthcare & pharmacy workflow platform supporting doctor prescriptions, pharmacist review, and payment processing.",
    language: "JavaScript / SQL",
    stars: "Featured",
    tags: ["React", "Express", "MySQL", "Transactions", "Chapa"],
    url: "https://github.com/your-username/pharmacy-management-system", // Placeholder
  },
  {
    title: "fullstack-api-boilerplate",
    description: "Production-ready Node.js Express REST API starter with JWT auth, MySQL pooling, input validation, and error middleware.",
    language: "JavaScript",
    stars: "Core Architecture",
    tags: ["Node.js", "Express", "MySQL", "Security"],
    url: "https://github.com/your-username/fullstack-api-boilerplate", // Placeholder
  },
];
