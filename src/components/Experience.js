import ExperienceCard from "./Experience/ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
        Experience
      </h1>
      <div className="flex items-start justify-center my-5 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
