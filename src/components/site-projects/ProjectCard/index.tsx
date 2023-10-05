import { BsEyeFill } from "react-icons/bs"; 
import { AiFillGithub } from "react-icons/ai"; 
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";


interface ProjectCardProps {
  title: string;
  img: any;
  type?: boolean;
  github: string;
  live: string;
}


export default function ProjectCard({ title, img, type, github, live }: ProjectCardProps) {
  return (
    <div>
      <Link href="/">
      <div className={cn('w-full border-[1px] overflow-hidden relative group rounded-lg border-portlighttext dark:border-portdarktext', type ? 'h-80': 'h-fit')}>
        <Image
          src={`${img}`}
          alt={title}
          width={350}
          height={350}
          className={cn('object-cover transition-transform duration-[3s] w-auto h-auto', type ? 'group-hover:-translate-y-[65%]': '')}
          
        />
        <div>
          <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1  text-white text-center font-semibold duration-300 bg-portlighttext dark:bg-portdarktext">
            {title}
          </p>
        </div>
      </div>
    </Link>
    <div className="flex justify-between place-content-center px-2 font-lg font-bold dark:text-white">
      <Link href={`${live}`} target="_blank" className="flex items-center mt-2 gap-2">
        <BsEyeFill size={30} className="text-portlighttext dark:text-portdarktext"/>
        <p className="hover:text-portlighttext hover:dark:text-portdarktext">Live Demo</p>
      </Link>
      <Link href={`${github}`} target="_blank" className="flex items-center mt-2 gap-2">
        <AiFillGithub size={30} className="text-portlighttext dark:text-portdarktext"/>
        <p className="hover:text-portlighttext hover:dark:text-portdarktext">View Souce Code</p>
      </Link>
    </div>
    </div>
  );
}
