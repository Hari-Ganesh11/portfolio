import React from "react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "./atoms/tabs";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import * as fa from "react-icons/fa";
import type { IconType } from "react-icons";

// -------------------- Types --------------------
type Project = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  domains: string[];
  challenge: string;
  highlights: string[];
  techStack: string[];
  impact: {
    label: string;
    value: string;
  }[];
  logo?: string;
};

type TechMeta = {
  icon: IconType;
  color: string;
  darkColor?: string;
};

// -------------------- Tech Icon + Color Map --------------------
const TECH_META_MAP: Record<string, TechMeta> = {
  "Next.js": {
    icon: SiIcons.SiNextdotjs,
    color: "#000000",
    darkColor: "#FFFFFF",
  },
  React: {
    icon: SiIcons.SiReact,
    color: "#61DAFB",
  },
  TypeScript: {
    icon: SiIcons.SiTypescript,
    color: "#3178C6",
  },
  GraphQL: {
    icon: SiIcons.SiGraphql,
    color: "#E535AB",
  },
  "AWS AppSync": {
    icon: fa.FaAws,
    color: "#FF9900",
  },
  "AEM Headless CMS": {
    icon: SiIcons.SiAdobe,
    color: "#FF0000",
  },
  Zustand: {
    icon: SiIcons.SiReact,
    color: "#443E38",
  },
  "Tailwind CSS": {
    icon: SiIcons.SiTailwindcss,
    color: "#38BDF8",
  },
  "Azure DevOps": {
    icon: VscIcons.VscAzureDevops,
    color: "#0078D7",
  },
  "Sitecore JSS": {
    icon: SiIcons.SiSitecore,
    color: "#FF0000",
  },
  "SASS (BEM)": {
    icon: SiIcons.SiSass,
    color: "#CC6699",
  },
};

// -------------------- Data --------------------
const projects: Project[] = [
  {
    id: "MasterCard",
    title: "Mastercard Customer Portals",
    subtitle: "Customer Rewards Dashboard",
    duration: "Dec 2023 – Jun 2025 | Chennai, India",
    domains: [
      "Transaction Platform",
      "Payments",
      "Financial Services",
      "Scalable UI",
    ],
    challenge:
      "Build reusable, high-performance frontend components for Mastercard portals while ensuring scalability, security, and compliance across multiple customer-facing workflows.",
    highlights: [
      "Developed reusable and scalable UI components using Next.js, React, and TypeScript",
      "Integrated GraphQL APIs via AWS AppSync for optimized, real-time data flow",
      "Consumed structured content from AEM Headless CMS and mapped it accurately to frontend components",
      "Implemented Zustand for shared state management, reducing unnecessary re-renders",
      "Built fully responsive layouts using Tailwind CSS across multiple breakpoints",
      "Collaborated closely with product owners and business analysts to align UI logic with business and compliance requirements",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "AWS AppSync",
      "AEM Headless CMS",
      "Zustand",
      "Tailwind CSS",
      "Azure DevOps",
    ],
    impact: [
      { label: "Component Reusability", value: "High" },
      { label: "Performance", value: "Optimized for real-time data" },
      { label: "Production Usage", value: "Enterprise-scale portals" },
    ],
    logo: "/Mastercard_2019_logo.svg",
  },
  {
    id: "HMH",
    title: "Hackensack Meridian Health",
    subtitle: "Patient Engagement Platform",
    duration: "Jul 2025 – Present | Chennai, India",
    domains: [
      "Healthcare Portal",
      "Patient Engagement",
      "Content-Driven",
      "High-performance",
    ],
    challenge:
      "Deliver a performant, SEO-optimized, and accessible frontend for large, content-driven healthcare pages while enabling seamless content authoring through a headless CMS.",
    highlights: [
      "Built modular and reusable frontend components using Next.js and React aligned with Sitecore JSS headless architecture",
      "Mapped React components directly to Sitecore renderings for accurate CMS integration",
      "Consumed GraphQL APIs to deliver dynamic and personalized patient-facing content",
      "Implemented scalable styling using SASS with BEM methodology",
      "Leveraged SSR, SSG, and ISR to improve SEO, performance, and load times",
      "Provided UAT support and contributed to go-live and hypercare phases",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Sitecore JSS",
      "GraphQL",
      "SASS (BEM)",
      "Azure DevOps",
    ],
    impact: [
      { label: "SEO", value: "Improved for content-heavy pages" },
      { label: "CMS Integration", value: "Seamless authoring experience" },
      { label: "Domain", value: "Healthcare-grade frontend" },
    ],
    logo: "/hmh-logo.svg",
  },
];

// -------------------- Component --------------------
const Projects: React.FC = () => {
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-2xl font-bold mb-8">
          Selected Projects I’ve Built
        </h2> */}

        <Tabs orientation="vertical" defaultValue={projects[0].id}>
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            {/* LEFT: Project selector */}
            <TabsList className="relative flex md:flex-col gap-4 md:sticky md:top-24 self-start">
              {projects.map((project) => (
                <TabsTrigger
                  key={project.id}
                  value={project.id}
                  variant="card"
                  className="
                    relative flex items-center gap-3 p-4 rounded-xl
                    border border-gray-200 dark:border-gray-700
                    bg-white dark:bg-gray-800
                    shadow-sm transition-all
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    data-[state=active]:bg-blue-500
                    data-[state=active]:text-white
                    data-[state=active]:shadow-lg
                  "
                >
                  <span
                    className="
                      hidden md:block absolute right-[-8px] top-1/2 -translate-y-1/2
                      w-0 h-0 border-y-8 border-y-transparent
                      border-l-8 border-l-blue-500
                      opacity-0
                      data-[state=active]:opacity-100
                    "
                  />

                  {project.logo && (
                    <img
                      src={`${import.meta.env.BASE_URL}${project.logo}`}
                      alt={project.title}
                      className="w-10 h-6 flex-shrink-0"
                    />
                  )}

                  <div className="flex flex-col text-left">
                    <span className=" font-medium md:font-semibold">{project.title}</span>
                    <span className="hidden md:block text-sm text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* RIGHT: Project spotlight */}
            <div className="space-y-8">
              {projects.map((project) => (
                <TabsContent
                  key={project.id}
                  value={project.id}
                  className="
                    bg-white dark:bg-gray-800
                    p-8 rounded-xl shadow-md
                    border border-gray-200 dark:border-gray-700
                    space-y-6
                  "
                >
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {project.duration}
                    </p>
                  </div>

                  {/* Domains */}
                  <div className="flex flex-wrap gap-2">
                    {project.domains.map((domain, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                      >
                        {domain}
                      </span>
                    ))}
                  </div>

                  {/* Challenge */}
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.challenge}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-2">
                      Key Contributions
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack (Icons + Brand Colors) */}
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => {
                        const meta = TECH_META_MAP[tech];
                        if (!meta) return null;

                        const Icon = meta.icon;
                        const iconColor =
                          isDark && meta.darkColor
                            ? meta.darkColor
                            : meta.color;

                        return (
                          <div
                            key={i}
                            className="
                              flex items-center gap-2
                              px-3 py-2 rounded-lg
                              bg-gray-100 dark:bg-gray-700
                              text-sm
                              transition-transform
                              hover:-translate-y-0.5
                            "
                          >
                            <Icon size={16} style={{ color: iconColor }} />
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.impact.map((imp, i) => (
                        <div
                          key={i}
                          className="text-sm px-3 py-1 rounded bg-gray-100 dark:bg-gray-700"
                        >
                          <strong>{imp.label}:</strong> {imp.value}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
