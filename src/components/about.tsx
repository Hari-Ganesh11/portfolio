import React from "react";
// 1. Import the specific sub-components from your card atom
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from "./atoms/card"; 
// 2. Import the icons you need
import { Workflow, Gauge, Rocket } from "lucide-react";

// 3. Map string names from your JSON to the actual React components
const iconMap: Record<string, React.ElementType> = {
  Workflow: Workflow,
  Gauge: Gauge,
  Rocket: Rocket,
};

// 4. Map your 'theme' strings to specific Tailwind color classes
const themeMap: Record<string, { border: string; iconBg: string; iconColor: string }> = {
  blue: {
    border: "hover:border-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  purple: {
    border: "hover:border-purple-500",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  indigo: {
    border: "hover:border-indigo-500",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
  },
};

const About = () => {
  const Aboutdetails = [
    {
      id: 1,
      title: "Enterprise Headless Architecture",
      description:
        "Specialist in decoupled, enterprise-grade architectures. Bridging modern React/Next.js front-ends with headless CMS platforms (AEM, Sitecore) using robust GraphQL data layers.",
      icon: "Workflow",
      theme: "blue",
    },
    {
      id: 2,
      title: "Next.js & Performance Optimization",
      description:
        "Leveraging advanced Next.js features (SSR, SSG, App Router) for lightning-fast, SEO-optimized applications. Implementing smart hydration strategies for superior Core Web Vitals.",
      icon: "Gauge",
      theme: "purple",
    },
    {
      id: 3,
      title: "End-to-End Project Ownership",
      description:
        "Proven ability to drive complex feature development independently from conception to User Acceptance Testing (UAT). Acting as a critical resource in Agile delivery environments.",
      icon: "Rocket",
      theme: "indigo",
    },
  ];

  return (
    <section id="about" className="py-12 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Heading
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground mt-2">
            Bridging technical complexity with user-centric design.
          </p>
        </div> */}
        
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Aboutdetails.map((item) => {
            const IconComponent = iconMap[item.icon];
            const themeStyles = themeMap[item.theme];

            return (
              <Card 
                key={item.id} 
                className={`flex flex-col items-center text-center transition-all duration-300 border-border ${themeStyles.border} hover:shadow-lg`}
              >
                {/* Icon Circle */}
                <div className={`mt-8 p-4 rounded-full w-fit ${themeStyles.iconBg}`}>
                  <IconComponent size={40} className={`stroke-[1.5px] ${themeStyles.iconColor}`} />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold items-center text-center ">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;