import { AiFillFacebook } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import CustomHeading from "../custom-components/CustomHeading";
import SocialLink from "./socialLink";
;

export default function SiteContact() {
  return (
    <section id="contact" className="my-5 pb-5">
        <CustomHeading Linknumber={"05."}>
          get in touch
        </CustomHeading>
      <div className="text-center dark:text-white my-5"> 
      <p className="text-2xl my-5">hi, my inbox is always open so feel free to reach out <br /> and I will get back to you as soon as possible.</p>
        <button className="bg-portlighttext text-black py-5 font-bold px-10 rounded-lg hover:outline-none hover:shadow-4xl dark:bg-portdarktext dark:hover:shadow-3xl mt-5">Contact Me</button>
      </div>
      <div className="mt-8 flex items-center flex-wrap  gap-8 justify-center">
      <SocialLink title="Github" link="https://github.com/Beast-Rey" icon={<AiFillGithub size={30}/>}/>
      <SocialLink title="Linkedin" link="https://www.linkedin.com" icon={<AiFillLinkedin size={30}/>}/>
      <SocialLink title="Facebook" link="https://www.facebook.com" icon={<AiFillFacebook size={30}/>}/>
    </div>
        <CustomHeading className='text-end text-rose-400'>
          /get in touch
        </CustomHeading>
    </section>
  );
}
