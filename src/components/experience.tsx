import React from "react";
import { Card } from "./atoms/card";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import type { IconType } from "react-icons";
import { useTheme } from "../theme/themeContext";

// -------------------- Types --------------------
type IconName = keyof typeof SiIcons | keyof typeof VscIcons;

type TagItem = {
  label: string;
  icon: IconName;
  color: string;
  darkColor?: string;
};

type Role = {
  title: string;
  client: string;
  duration: string;
  isCurrent: boolean;
  summary: string;
  tags: TagItem[];
};

type CompanyExperience = {
  company: string;
  logo: string;
  location: string;
  totalDuration: string;
  roles: Role[];
};

// -------------------- Icon Map --------------------
const ICON_MAP = { ...SiIcons, ...VscIcons };

const getIcon = (iconName: IconName): IconType => {
  return ICON_MAP[iconName];
};

// -------------------- Data --------------------
const experienceData: CompanyExperience[] = [
  {
    company: "Accenture",
    logo: "Ac",
    location: "Chennai, India",
    totalDuration: "Oct 2023 – Present",
    roles: [
      {
        title: "Packaged App Development Analyst",
        client: "Hackensack Meridian Health",
        duration: "Mar 2026 – Present",
        isCurrent: true,
        summary:
          "Building scalable Next.js + Sitecore JSS frontend for a healthcare system, delivering accessible and SEO-optimised patient-facing experiences with GraphQL APIs and CI/CD via Azure DevOps.",
        tags: [
          {
            label: "Next.js",
            icon: "SiNextdotjs",
            color: "#000000",
            darkColor: "#FFFFFF",
          },
          { label: "React.js", icon: "SiReact", color: "#61DAFB" },
          { label: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { label: "Sitecore JSS", icon: "SiSitecore", color: "#FF0000" },
          { label: "GraphQL", icon: "SiGraphql", color: "#E535AB" },
          { label: "SASS", icon: "SiSass", color: "#CC6699" },
          { label: "Azure DevOps", icon: "VscAzureDevops", color: "#0078D7" },
        ],
      },
      {
        title: "Packaged App Development Associate",
        client: "Mastercard",
        duration: "Oct 2023 – Feb 2026 · 2 yrs 4 mos",
        isCurrent: false,
        summary:
          "Developed reusable UI components for Mastercard's customer-facing portals using Next.js, AEM headless CMS, and GraphQL (AWS AppSync), ensuring high performance across payments and financial workflows.",
        tags: [
          {
            label: "Next.js",
            icon: "SiNextdotjs",
            color: "#000000",
            darkColor: "#FFFFFF",
          },
          { label: "React.js", icon: "SiReact", color: "#61DAFB" },
          { label: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { label: "AEM", icon: "SiAdobe", color: "#FF0000" },
          { label: "GraphQL", icon: "SiGraphql", color: "#E535AB" },
          { label: "Tailwind CSS", icon: "SiTailwindcss", color: "#38BDF8" },
          { label: "Azure DevOps", icon: "VscAzureDevops", color: "#0078D7" },
        ],
      },
    ],
  },
];

// -------------------- TagChip --------------------
const TagChip: React.FC<{ tag: TagItem }> = ({ tag }) => {
  const { theme } = useTheme();
  const Icon = getIcon(tag.icon);

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const iconColor = isDark && tag.darkColor ? tag.darkColor : tag.color;

  return (
    <span className="group inline-flex items-center gap-1.5 text-[11px] text-foreground/80 bg-primary/5 border border-border rounded px-2 py-0.5 transition-all duration-200 hover:bg-primary/10 cursor-default">
      {Icon && (
        <Icon
          size={12}
          style={{ color: iconColor }}
          className="shrink-0 transition-transform duration-200 group-hover:scale-110"
        />
      )}
      {tag.label}
    </span>
  );
};

// -------------------- Main Component --------------------
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-4 ">
        {/* <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2> */}

        <div className="flex flex-col gap-6">
          {experienceData.map((exp) => (
            <div className="laser-border">
              <Card
                key={exp.company}
                className="border-0 shadow-none rounded-[12px] bg-card p-6 transition-all duration-300"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary shrink-0 select-none">
                    {exp.logo}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {exp.company}
                    </p>
                    <p className="text-xs text-foreground/50 mt-0.5">
                      {exp.totalDuration} · {exp.location}
                    </p>
                  </div>
                </div>

                {/* Roles Track */}
                <div className="border-l-2 border-border pl-5 flex flex-col gap-6">
                  {exp.roles.map((role, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <span
                        className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-border transition-colors duration-300 ${
                          role.isCurrent ? "bg-primary" : "bg-background"
                        }`}
                      />

                      {/* Role Title + Badge */}
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span className="text-sm font-semibold text-foreground">
                          {role.title}
                        </span>
                        {role.isCurrent ? (
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-500">
                            Current
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                            ↑ Promoted
                          </span>
                        )}
                      </div>

                      {/* Client */}
                      <p className="text-xs font-medium text-primary mb-0.5">
                        {role.client}
                      </p>

                      {/* Date */}
                      <p className="text-xs text-foreground/80 mb-3">
                        {role.duration}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                        {role.summary}
                      </p>

                      {/* Tech Tags with Icons */}
                      <div className="flex flex-wrap gap-1.5">
                        {role.tags.map((tag) => (
                          <TagChip key={tag.label} tag={tag} />
                        ))}
                      </div>

                      {/* Divider between roles */}
                      {index < exp.roles.length - 1 && (
                        <hr className="mt-6 border-border" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
