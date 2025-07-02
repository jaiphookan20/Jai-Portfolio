import React from "react";
import {
  DiReact,
  DiFirebase,
  DiMongodb,
  DiCss3,
  DiJavascript,
  DiWindows,
  DiJava,
  DiAndroid,
  DiNginx,
} from "react-icons/di";
import { FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import {
  SiRedux,
  SiJson,
  SiHtml5,
  SiVisualstudiocode,
  SiJavascript,
  SiSpring,
  SiMysql,
  SiHibernate,
  SiAmazonaws,
  SiPostman,
  SiSwagger,
  SiExpress,
  SiKotlin,
  SiGooglemaps,
  SiPostgresql,
  SiRedis,
  SiPython,
  SiDocker,
  SiGithubactions,
  SiTypescript,
  SiSupabase,
  SiOpenai,
  SiRailway,
  SiTailwindcss,
} from "react-icons/si";

const TechIcons = ({ tag }) => {
  if (tag === "Spring") return <SiSpring size="35%" color="#559134" />;
  else if (tag === "Firebase") return <DiFirebase size="35%" color="#F7C428" />;
  else if (tag === "MySQL") return <SiMysql size="35%" color="#559134" />;
  else if (tag === "Hibernate")
    return <SiHibernate size="35%" color="#a69e81" />;
  else if (tag === "CSS") return <DiCss3 size="35%" color="#2171B6" />;
  else if (tag === "JavaScript")
    return <SiJavascript size="35%" color="#EFD81C" />;
  else if (tag === "Swagger") return <SiSwagger size="35%" color="#20fa48" />;
  else if (tag === "HTML") return <SiHtml5 size="35%" color="#DC4A25" />;
  else if (tag === "AWS") return <SiAmazonaws size="35%" color="#E06C00" />;
  else if (tag === "Linux") return <FcLinux size="35%" />;
  else if (tag === "VS code")
    return <SiVisualstudiocode size="35%" color="#2174B3" />;
  else if (tag === "Java") return <DiJava size="35%" color="#E06C00" />;
  else if (tag === "Postman") return <SiPostman size="35%" color="#E06C00" />;
  else if (tag === "MongoDB") return <DiMongodb size="35%" color="#559134" />;
  else if (tag === "NodeJs") return <FaNodeJs size="35%" color="#559134" />;
  else if (tag === "Express") return <SiExpress size="35%" color="#FFF" />;
  else if (tag === "React") return <FaReact size="35%" color="#2171B6" />;
  else if (tag === "Kotlin") return <SiKotlin size="35%" color="#2171B6" />;
  else if (tag === "PostgreSQL")
    return <SiPostgresql size="35%" color="#336791" />;
  else if (tag === "Docker") return <SiDocker size="35%" color="#2496ED" />;
  else if (tag === "NGINX") return <DiNginx size="35%" color="#009639" />;
  else if (tag === "Redis") return <SiRedis size="35%" color="#D50032" />;
  else if (tag === "Python") return <SiPython size="35%" color="#306998" />;
  else if (tag === "TypeScript")
    return <SiTypescript size="35%" color="#3178C6" />;
  else if (tag === "Supabase") return <SiSupabase size="35%" color="#3ECF8E" />;
  else if (tag === "OpenAI") return <SiOpenai size="35%" color="#412991" />;
  else if (tag === "Railway") return <SiRailway size="35%" color="#0B0D0E" />;
  else if (tag === "TailwindCSS")
    return <SiTailwindcss size="35%" color="#06B6D4" />;
  else if (tag === "NodeJS") return <FaNodeJs size="35%" color="#559134" />;
  else if (tag === "Google Maps")
    return <SiGooglemaps size="35%" color="#2171B6" />;
  else {
    return <FaNodeJs size="35%" color="#559134" />;
  }
};
export default TechIcons;
