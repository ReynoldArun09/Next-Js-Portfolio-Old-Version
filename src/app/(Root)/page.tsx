import SiteAbout from "@/components/site-about";
import SiteContact from "@/components/site-contact";
import SiteExperience from "@/components/site-experience";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteProjects from "@/components/site-projects";
import SiteSkills from "@/components/site-skills";


export default function Root() {
  return (
    <main className="container mx-auto">
      <SiteHeader />
      <SiteAbout />
      <SiteSkills />
      <SiteExperience />
      <SiteProjects />
      <SiteContact />
      <SiteFooter />
    </main>
  )
}
