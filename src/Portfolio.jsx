import React, { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  ExternalLink,
  Flame,
  Code,
  GraduationCap,
  Layers3,
  Mail,
  Mail as LinkedInIcon,
  MapPin,
  Network,
  Phone,
  Rocket,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

const socials = [
  { name: "GitHub", url: "https://github.com/CHARANRAJ45", icon: Code },
  { name: "LinkedIn", url: "https://linkedin.com/in/charan-raj-s45", icon: LinkedInIcon },
  { name: "LeetCode", url: "https://leetcode.com/u/6Xs27kKQGL/", icon: Trophy },
  { name: "Email", url: "mailto:charanraj797515@gmail.com", icon: Mail },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "Java", "SQL"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
  },
  {
    title: "APIs & GenAI",
    icon: Layers3,
    items: ["Google Gemini API", "Multi-Agent Architectures", "RAG", "Computer Vision"],
  },
  {
    title: "Tools & Core CS",
    icon: Network,
    items: ["Git", "GitHub", "VS Code", "DSA", "OOP"],
  },
];

const projects = [
  {
    title: "Autonomous Supply Chain Recovery Agent",
    period: "June 2026 – Present",
    tech: ["Python", "Google Gemini API", "Multi-Agent Architecture", "Autonomous Tool Execution"],
    description:
      "LLM agent orchestration for real-time logistics disruption mitigation; custom execution tools for local fleet/inventory processing.",
    link: "https://github.com/CHARANRAJ45",
  },
  {
    title: "Snapcal AI – AI Nutrition & Calorie Estimator",
    period: "Aug 2024 – Dec 2024",
    tech: ["Python", "Computer Vision", "ML Workflow", "UI Automation"],
    description:
      "Automated food recognition with ~90% accuracy; reduced manual logging effort by 95%.",
    link: "https://github.com/CHARANRAJ45",
  },
];

const certifications = [
  "SQL & Relational Databases 101 (IBM)",
  "GenAI Powered Data Analytics (Tata Group / Forage)",
  "AWS CloudQuest: Generative AI Practitioner",
  "AWS CloudQuest: Cloud Practitioner",
];

const contributionCells = [
  0, 1, 0, 2, 1, 0, 1,
  1, 2, 3, 2, 1, 0, 2,
  0, 2, 3, 4, 2, 1, 0,
  1, 2, 3, 2, 1, 0, 1,
  0, 1, 2, 1, 0, 2, 1,
];

const leetCodeBreakdown = [
  { label: "Easy", count: 79, color: "from-cyan-400 to-teal-400" },
  { label: "Medium", count: 39, color: "from-violet-500 to-indigo-500" },
  { label: "Hard", count: 2, color: "from-fuchsia-500 to-pink-500" },
];

function Portfolio() {
  const [copied, setCopied] = useState("");

  const handleCopy = async (value, key) => {
    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(value);
      }
      setCopied(key);
      window.setTimeout(() => setCopied(""), 1400);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const progress = (120 / 4029) * 100;

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute right-[-8%] top-[20%] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Portfolio</p>
              <p className="text-xs text-slate-400">Charan Raj S</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#activity" className="transition hover:text-cyan-300">Activity</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#education" className="transition hover:text-cyan-300">Education</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>

          <a
            href="mailto:charanraj797515@gmail.com"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Let&apos;s Connect
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="grid items-center gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              AI / Machine Learning Engineer
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Charan Raj S
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-base text-slate-300 sm:text-lg">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-violet-200">
                <MapPin className="h-4 w-4" /> Ballari, Karnataka, India
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Fourth-year B.E. student in Artificial Intelligence &amp; Machine Learning proficient in end-to-end ML workflows,
              multi-agent LLM systems, computer vision, and RAG architectures.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-100"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <button
                onClick={() => handleCopy("charanraj797515@gmail.com", "email")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2.5 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" />
                {copied === "email" ? "Copied!" : "charanraj797515@gmail.com"}
              </button>
              <button
                onClick={() => handleCopy("+917975158898", "phone")}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2.5 transition hover:border-violet-400/40 hover:text-violet-200"
              >
                <Phone className="h-4 w-4" />
                {copied === "phone" ? "Copied!" : "+91 7975158898"}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_25px_80px_rgba(15,118,110,0.18)] backdrop-blur-xl">
              <div className="absolute right-5 top-5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">System Status</p>
                    <h2 className="mt-1 text-xl font-semibold text-white">ML Workflow</h2>
                  </div>
                  <div className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">Live</div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "LLM Agents", value: "8", icon: BrainCircuit },
                    { label: "Vision Models", value: "3", icon: Cpu },
                    { label: "RAG Pipelines", value: "4", icon: Layers3 },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm text-slate-300">{label}</span>
                        </div>
                        <span className="text-lg font-semibold text-white">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-cyan-400/10 to-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">Optimization</span>
                    <span className="text-sm font-semibold text-cyan-200">92%</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activity" className="py-12">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Activity</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Coding &amp; performance</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-200">
              <Flame className="h-4 w-4" />
              Active contributor
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">LeetCode</p>
                    <h3 className="text-xl font-semibold text-white">Performance</h3>
                  </div>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">2025</div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="relative flex h-36 w-36 items-center justify-center">
                  <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120" aria-label="LeetCode progress">
                    <circle cx="60" cy="60" r="48" stroke="rgba(148,163,184,0.18)" strokeWidth="12" fill="none" />
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke="url(#leetcodeGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={301.59}
                      strokeDashoffset={301.59 - (301.59 * progress) / 100}
                    />
                    <defs>
                      <linearGradient id="leetcodeGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-3xl font-black text-white">120</div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Solved</div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-3xl font-black text-white">120 / 4029</p>
                    <p className="mt-1 text-sm text-slate-400">Total accepted solutions</p>
                  </div>

                  <div className="grid gap-2.5">
                    {leetCodeBreakdown.map(({ label, count, color }) => (
                      <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${color}`} />
                          <span className="text-sm text-slate-300">{label}</span>
                        </div>
                        <span className="font-semibold text-white">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Submissions</p>
                  <p className="mt-2 text-2xl font-black text-white">218</p>
                  <p className="text-sm text-slate-400">Past year</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Active days</p>
                  <p className="mt-2 text-2xl font-black text-white">46</p>
                  <p className="text-sm text-slate-400">Max streak: 7</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">GitHub</p>
                    <h3 className="text-xl font-semibold text-white">Contribution map</h3>
                  </div>
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">@CHARANRAJ45</div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                  <span>Activity</span>
                  <span>Last 6 months</span>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {contributionCells.map((value, index) => (
                    <div
                      key={`${value}-${index}`}
                      className={`h-6 rounded-md border border-white/5 ${
                        value === 0
                          ? "bg-slate-900"
                          : value === 1
                            ? "bg-cyan-500/30"
                            : value === 2
                              ? "bg-cyan-500/55"
                              : "bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_18px_rgba(34,211,238,0.2)]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-2">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=CHARANRAJ45&theme=github_dark&hide_border=true&title_color=67e8f9&icon_color=67e8f9&text_color=E2E8F0&bg_color=0f172a"
                  alt="GitHub stats"
                  className="h-auto w-full rounded-2xl border border-white/10 bg-slate-950/60"
                />
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=CHARANRAJ45&theme=dark&hide_border=true&background=0d1117&stroke=67e8f9&ring=67e8f9&fire=fb7185&currStreakLabel=67e8f9"
                  alt="GitHub streak stats"
                  className="h-auto w-full rounded-2xl border border-white/10 bg-slate-950/60"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Featured work</p>
            <h2 className="mt-2 text-3xl font-bold text-white">AI / ML projects</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map(({ title, period, tech, description, link }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_50px_rgba(76,29,149,0.15)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">{period}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-300">{description}</p>

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                  >
                    View project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Toolkit</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Technical arsenal</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-400/5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Education</p>
                  <h3 className="text-xl font-semibold text-white">Academic background</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Ballari Institute of Technology and Management</p>
                    <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">2023–2027</span>
                  </div>
                  <p className="mt-2 text-slate-300">B.E. in Artificial Intelligence &amp; Machine Learning</p>
                  <p className="mt-1 text-sm text-cyan-200">CGPA: 7.23</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Independent PU College</p>
                    <span className="rounded-full bg-violet-500/10 px-2 py-1 text-xs text-violet-200">2022–2023</span>
                  </div>
                  <p className="mt-2 text-slate-300">Pre-University Course</p>
                  <p className="mt-1 text-sm text-violet-200">83%</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Certifications</p>
                  <h3 className="text-xl font-semibold text-white">Verified learning</h3>
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 p-6 shadow-[0_25px_80px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Connect</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Let&apos;s build intelligent systems together</h2>
              </div>
              <a
                href="mailto:charanraj797515@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
              >
                <Mail className="h-4 w-4" /> Start a conversation
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { label: "Email", value: "charanraj797515@gmail.com", href: "mailto:charanraj797515@gmail.com", icon: Mail },
                { label: "Phone", value: "+91 7975158898", href: "tel:+917975158898", icon: Phone },
                { label: "Socials", value: "GitHub / LinkedIn / LeetCode", href: "https://github.com/CHARANRAJ45", icon: Zap },
              ].map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-base font-medium text-white group-hover:text-cyan-100">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Charan Raj S — AI / ML Engineer</p>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map(({ name, url, icon: Icon }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan-200">
                <Icon className="h-4 w-4" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
