import Image from "next/image";
import ProfileImage from "../../../public/profileImg.jpg";
import CustomHeading from "../custom-components/CustomHeading";

export default function SiteAbout() {
  return (
    <section id="#about" className="mt-4 mb-5">
      <CustomHeading Linknumber={"01."}>about me</CustomHeading>
      <div className="flex flex-col md:flex-row items-center gap-10 py-10">
        <div className="w-44 h-44 rounded-full bg-black dark:bg-white">
          <Image
            src={ProfileImage}
            alt="profile-image"
            className="w-full h-full rounded-full border border-portlighttext dark:border-portdarktext object-cover p-2"
          />
        </div>
        <div className="w-3/4 flex flex-col items-center gap-5 md:items-start">
          <h1 className="text-xl tracking-widest font-bold text-portlighttext dark:text-portdarktext">
            Hi, I'm Reynold,
          </h1>
          <h2 className="text-xl md:text-5xl font-semibold bg-clip-text tracking-wide text-portlighttext dark:text-portdarktext">
            MERN Stack Developer
          </h2>
        </div>
      </div>
      <CustomHeading className="text-end">/about me</CustomHeading>
    </section>
  );
}
