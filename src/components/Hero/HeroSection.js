import { getAbout } from "@/lib/api";
import Hero from "../Hero";

const HeroSection = async () => {
  const about = await getAbout();
  return (
    <Hero
      name={about?.name}
      role={about.role}
      bio={about?.bio}
      profile_picture={about?.profile_picture}
    />
  );
};

export default HeroSection;
