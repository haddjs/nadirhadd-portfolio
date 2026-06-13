import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";

const ExperienceCard = ({ exp }) => {
  const startDate = new Date(exp.start_date.split("T")[0]);
  const endDate = new Date(exp.end_date?.split("T")[0]);

  const formatter = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
  });

  return (
    <Card
      key={exp.id}
      className="flex justify-between w-full max-w-[90%] md:max-w-full mx-auto inset-shadow-sm shadow-2xl dark:bg-[#0d1017] border-none px-6 py-7"
    >
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">
          {exp.company_name}
        </CardTitle>
        <CardDescription className="text-sm md:text-lg">
          {formatter.format(startDate)} -{" "}
          {exp.end_date ? formatter.format(endDate) : "Present"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-sm/7">{exp.description}</span>
      </CardContent>
      <CardFooter>
        <div className="grid grid-cols-3 gap-4 md:flex text-center md:px-2 text-sm md:text-md">
          {exp.tech_stacks.map((tech, i) => (
            <Button key={i} variant="secondary" size="lg" className="text-xs">
              {tech}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
