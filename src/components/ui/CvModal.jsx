
import {
  X,
  FileText,
  Printer,
  GraduationCap,
  Code2,
  Database,
  BriefcaseBusiness,
  CheckCircle2,
  Phone,
  Mail,
  ExternalLink,
  Download,
  //Github as GithubIcon,
  //Linkedin as LinkedinIcon,
  //getnet-tesfa-portrait.jpg
} from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
export default function CvModal({ isOpen, onClose }) {
const  cvPath ="./Getnet-Tesfa-CV,pdf";
  const skills = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-cyan-400",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: BriefcaseBusiness,
      color: "text-emerald-400",
      items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"],
    },
    {
      title: "Database & Security",
      icon: Database,
      color: "text-violet-400",
      items: ["MySQL", "Relational Database Design", "Normalization", "ACID Transactions"],
    },
    {
      title: "Tools & Deployment",
      icon: CheckCircle2,
      color: "text-amber-400",
      items: ["Git", "GitHub", "Postman", "Vercel", "Render", "XAMPP"],
    },
  ];

  const projects = [
    {
      name: "AgroTHECK",
      type: "CLIENT PROJECT · DEPLOYED",
      description:
        "Business management system developed for practical business operations.",
      details: [
        "Inventory, purchasing, sales, and stock management.",
        "Admin and Cashier workflows, customer debts, and payment records.",
        "Business expenses, equipment assets, cash tracking, and profit/loss reporting.",
      ],
      stack: "React · Node.js · Express · MySQL · JWT",
      color: "emerald",
    },
    {
      name: "Pharmacy Management System",
      type: "ACADEMIC PROJECT",
      description:
        "Pharmacy workflow application focused on medicine management and controlled access.",
      details: [
        "Medicine inventory and role-based user workflows.",
        "Doctor prescription/ticket workflow with pharmacist verification and pricing.",
        "Database transaction handling and Chapa payment integration.",
      ],
      stack: "React · Node.js · Express · MySQL · JWT · bcrypt · Chapa",
      color: "cyan",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-white/10 bg-[#101729] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2">
                  <FileText className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h2
                    id="cv-modal-title"
                    className="font-semibold text-white"
                  >
                    Curriculum Vitae
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Professional profile & project experience
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close CV"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {/* Scrollable CV content */}
            <main className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              {/* Profile */}
              <section className="border-b border-white/10 pb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
                  Information Systems · Software Development
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Getnet Tesfa
                </h1>

                <p className="mt-2 text-lg font-medium text-slate-300">
                  Junior Full-Stack Developer
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                  Information Systems student with hands-on experience
                  developing web-based business applications using React,
                  Node.js, Express, and MySQL. Built a deployed client
                  management system and an academic pharmacy application.
                  Interested in creating reliable software that solves
                  practical business problems.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <a
                    href="tel:0941655364"
                    className="flex items-center gap-2 text-slate-300 transition hover:text-emerald-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                    0941655364
                  </a>

                  <a
                    href="mailto:gtesfa079@gmail.com"
                    className="flex items-center gap-2 break-all text-slate-300 transition hover:text-emerald-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                    gtesfa079@gmail.com
                  </a>

                  <a
                    href="https://github.com/getnet-t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 transition hover:text-emerald-400"
                  >
                    <span className="text-emerald-400">GH</span>
                    GitHub Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/getnet-tesfa-61a8b0440/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 transition hover:text-emerald-400"
                  >
                    <span className="text-emerald-400">in</span>
                    LinkedIn Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </section>

              {/* Education */}
              <section className="mt-7">
                <SectionHeading
                  icon={GraduationCap}
                  title="Education"
                />

                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-semibold text-white">
                        Injibara University
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Information Systems
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        Expected to graduate soon
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      In Progress
                    </span>
                  </div>
                </div>
              </section>

              {/* Skills */}
              <section className="mt-7">
                <SectionHeading icon={Code2} title="Technical Skills" />

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.title}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${skill.color}`} />
                          <h3 className="text-sm font-semibold text-white">
                            {skill.title}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-300"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Projects */}
              <section className="mt-7">
                <SectionHeading
                  icon={Database}
                  title="Featured Project Experience"
                />

                <div className="mt-3 space-y-4">
                  {projects.map((project) => (
                    <article
                      key={project.name}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
                    >
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <h3 className="text-base font-semibold text-white">
                          {project.name}
                        </h3>

                        <span
                          className={`w-fit rounded-md px-2 py-1 text-[10px] font-semibold tracking-wider ${
                            project.color === "emerald"
                              ? "bg-emerald-400/10 text-emerald-300"
                              : "bg-cyan-400/10 text-cyan-300"
                          }`}
                        >
                          {project.type}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-5 text-slate-400">
                        {project.description}
                      </p>

                      <ul className="mt-3 space-y-2">
                        {project.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-2 text-sm leading-5 text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 border-t border-white/[0.08] pt-3">
                        <p className="text-xs leading-5 text-slate-500">
                          <span className="font-semibold text-slate-400">
                            Technologies:{" "}
                          </span>
                          {project.stack}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Professional focus */}
              <section className="mt-7 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                <p className="text-sm font-semibold text-emerald-300">
                  Professional Focus
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Building practical full-stack applications, designing
                  relational databases, implementing API-based workflows,
                  and developing maintainable software for real business needs.
                </p>
              </section>
            </main>

            {/* Fixed footer actions */}
            <footer className="flex flex-col gap-3 border-t border-white/10 bg-[#0e1424] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-xs text-slate-500">
                CV · Junior Full-Stack Developer
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open PDF
                </a>

                <a
                  href={cvPath}
                  download="Getnet-Tesfa-CV.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-400/20"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </button>
              </div>
            </footer>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="rounded-lg border border-emerald-400/15 bg-emerald-400/10 p-2">
        <Icon className="h-4 w-4 text-emerald-400" />
      </div>

      <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
        {title}
      </h2>
    </div>
  );
}