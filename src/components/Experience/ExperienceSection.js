import { getExperience } from "@/lib/api";
import Experience from "../Experience";

const ExperienceSection = async () => {
  const experience = await getExperience();
  return <Experience experiences={experience} />;
};

export default ExperienceSection;
