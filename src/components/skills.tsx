import React from "react";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./atoms/tabs";
import { Card } from "./atoms/card";
import type { IconType } from "react-icons";

// -------------------- Types --------------------
type IconName = keyof typeof SiIcons | keyof typeof VscIcons;

type SkillItem = {
  id: string;
  title: string;
  icon: IconName;
  color: string; // Brand color
  darkColor?: string;
};

type SkillsTab = {
  id: "skills" | "tools";
  label: string;
  items: SkillItem[];
};

type SkillsData = {
  tabs: SkillsTab[];
};

// -------------------- Icon Map --------------------
const ICON_MAP = { ...SiIcons, ...VscIcons };

const getIconComponent = (iconName: IconName): IconType => {
  return ICON_MAP[iconName];
};

// -------------------- Grid Component --------------------
type SkillsGridProps = {
  items: SkillItem[];
};

const SkillsGrid: React.FC<SkillsGridProps> = ({ items }) => {
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
      {items.map((item) => {
        const Icon = getIconComponent(item.icon);
        if (!Icon) return null;

        const iconColor =
          isDark && item.darkColor ? item.darkColor : item.color;

        return (
          <Card
            key={item.id}
            className="
              group relative
              flex flex-col items-center justify-center p-6 rounded-lg
              border border-border
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-[1.02]
            "
          >
            {/* Hover Border */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-lg
                border-2 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
              style={{ borderColor: iconColor }}
            />

            {/* Icon */}
            <div className="relative z-10">
              <Icon
                size={42}
                style={{ color: iconColor }}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <span className="relative z-10 mt-3 text-sm font-medium text-center">
              {item.title}
            </span>
          </Card>
        );
      })}
    </div>
  );
};

// -------------------- Main Skills Component --------------------
const Skills: React.FC = () => {
  const skillsjson: SkillsData = {
    tabs: [
      {
        id: "skills",
        label: "Skills",
        items: [
          {
            id: "javascript",
            title: "JavaScript (ES6+)",
            icon: "SiJavascript",
            color: "#F7DF1E",
          },
          {
            id: "typescript",
            title: "TypeScript",
            icon: "SiTypescript",
            color: "#3178C6",
          },
          {
            id: "react",
            title: "React.js (18)",
            icon: "SiReact",
            color: "#61DAFB",
          },
          {
            id: "nextjs",
            title: "Next.js (13+)",
            icon: "SiNextdotjs",
            color: "#000000",
            darkColor: "#FFFFFF",
          },
          //{ id: "aem", title: "Adobe Experience Manager (AEM)", icon: "SiAdobe", color: "#FF0000" },
          {
            id: "graphql",
            title: "GraphQL",
            icon: "SiGraphql",
            color: "#E535AB",
          },
          {
            id: "apollo",
            title: "Apollo GraphQL",
            icon: "SiApollographql",
            color: "#311C87",
          },
          {
            id: "react-query",
            title: "React Query",
            icon: "SiReactquery",
            color: "#FF4154",
          },
          { id: "redux", title: "Redux", icon: "SiRedux", color: "#764ABC" },
          {
            id: "context-api",
            title: "Context API",
            icon: "SiReact",
            color: "#61DAFB",
          },
          { id: "html", title: "HTML5", icon: "SiHtml5", color: "#E34F26" },
          { id: "css", title: "CSS3", icon: "SiCss3", color: "#1572B6" },
          {
            id: "tailwind",
            title: "Tailwind CSS",
            icon: "SiTailwindcss",
            color: "#38BDF8",
          },
          {
            id: "bootstrap",
            title: "Bootstrap",
            icon: "SiBootstrap",
            color: "#7952B3",
          },
          { id: "sass", title: "SASS", icon: "SiSass", color: "#CC6699" },
          {
            id: "rest-api",
            title: "REST API",
            icon: "SiPostman",
            color: "#FF6C37",
          },
          {
            id: "ssr",
            title: "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
            icon: "SiNextdotjs",
            color: "#000000",
            darkColor: "#FFFFFF",
          },
          //{ id: "ssg", title: "Static Site Generation (SSG)", icon: "SiNextdotjs", color: "#000000" },
          //{ id: "code-splitting", title: "Code Splitting", icon: "SiWebpack", color: "#1C78C0" },
          //{ id: "lazy-loading", title: "Lazy Loading", icon: "SiReact", color: "#61DAFB" },
          //{ id: "caching", title: "Caching", icon: "SiRedis", color: "#DC382D" },
          //{ id: "cms-headless", title: "Headless CMS Architecture", icon: "SiContentful", color: "#0000FF" },
          //{ id: "agile", title: "Agile / Scrum", icon: "SiJira", color: "#0052CC" },
          //{ id: "uat", title: "UAT & Hypercare", icon: "SiTestcafe", color: "#32C8D6" },
        ],
      },
      {
        id: "tools",
        label: "Tools",
        items: [
          { id: "git", title: "Git", icon: "SiGit", color: "#F05032" },
          {
            id: "github",
            title: "GitHub",
            icon: "SiGithub",
            color: "#181717",
            darkColor: "#FFFFFF",
          },
          //{ id: "azure-devops", title: "Azure DevOps", icon: "VscAzureDevops", color: "#0078D7" },
          {
            id: "ci-cd",
            title: "CI/CD (Azure DevOps)",
            icon: "VscAzureDevops",
            color: "#0078D7",
          },
          //{ id: "webpack", title: "Webpack", icon: "SiWebpack", color: "#1C78C0" },
          { id: "vite", title: "Vite", icon: "SiVite", color: "#646CFF" },
          { id: "npm", title: "npm", icon: "SiNpm", color: "#CB3837" },
          { id: "jira", title: "JIRA", icon: "SiJira", color: "#0052CC" },
          {
            id: "sitecore-jss",
            title: "Sitecore JSS",
            icon: "SiSitecore",
            color: "#FF0000",
          },
          {
            id: "sitecore-jss",
            title: "Vs Code",
            icon: "VscVscode",
            color: "#007FFF",
          },
          {
            id: "figma",
            title: "Figma",
            icon: "SiFigma",
            color: "#F24E1E",
          },
          {
            id: "canva",
            title: "Canva",
            icon: "SiCanva",
            color: "#00C4CC",
          },
        ],
      },
    ],
  };

  const skillsTab = skillsjson.tabs.find(
    (tab): tab is SkillsTab => tab.id === "skills"
  )!;
  const toolsTab = skillsjson.tabs.find(
    (tab): tab is SkillsTab => tab.id === "tools"
  )!;

  return (
    <section
      id="skills"
      className="py-12 bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <Tabs defaultValue="skills" className="flex flex-col items-center">
          {/* Tabs Header */}
          <TabsList className="mx-auto w-fit ">
            <TabsTrigger value="skills" className="px-2 text-2xl cursor-pointer">
              Skills
            </TabsTrigger>
            <TabsTrigger value="tools" className=" px-2 text-2xl cursor-pointer">
              Tools
            </TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="w-full">
            <SkillsGrid items={skillsTab.items} />
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="w-full">
            <SkillsGrid items={toolsTab.items} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
