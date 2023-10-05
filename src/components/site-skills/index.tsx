import CustomHeading from "../custom-components/CustomHeading";
import { Skills } from "@/lib/data";
import SkillCard from "./Skill";

export default function SiteSkills() {
  return (
    <section>
      <CustomHeading Linknumber={"02."}>my skills</CustomHeading>
      <div className="flex flex-wrap gap-5 my-5">
        {Skills?.map((skill, index) => (
          <SkillCard title={skill.title} icon={skill.icon} key={index}/>
        ))}
      </div>
      <CustomHeading className="text-end">/my skills</CustomHeading>
    </section>
  );
}
