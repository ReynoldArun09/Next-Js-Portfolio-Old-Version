
import { GiWorriedEyes } from "react-icons/gi"; 
import ExpCard from "./Exp";
import CustomHeading from "../custom-components/CustomHeading";


export default function SiteExperience() {
  return (
    <section id="exp" className="my-5">
        <CustomHeading Linknumber={"03."}>
            my experience
        </CustomHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
        <ExpCard title="Fresher" subtitle="Full stack Developer" icon={<GiWorriedEyes size={50}/>}/>
      </div>
        <CustomHeading className='text-end'>
          /my experience
        </CustomHeading>
    </section>
  )
}
