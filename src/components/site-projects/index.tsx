import { ProjectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import CustomHeading from "../custom-components/CustomHeading";


export default function SiteProjects() {
  return (
    <section id="projects" className="my-5">
      <CustomHeading Linknumber={"04."}>
        my projects
      </CustomHeading>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center py-10'>
        {ProjectsData?.map((project, index) => (
          <ProjectCard title={project.title} img={project.static} type={project.type} live={project.live} github={project.github} key={index}/>
        ))}
      </div>
      <CustomHeading className='text-end'>
          /my projects
      </CustomHeading>
    </section>
  )
}
