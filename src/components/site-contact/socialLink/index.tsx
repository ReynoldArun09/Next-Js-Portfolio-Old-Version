import Link from "next/link"


interface SocialLinkProps {
    link:string;
    title:string;
    icon:React.ReactNode
}

export default function SocialLink({link, title, icon}:SocialLinkProps) {
  return (
    <Link
    href={link}
    target="_blank"
    className="flex items-center justify-center gap-2 text-xl text-gray-400 font-semibold hover:text-portlighttext hover:dark:text-portdarktext"
  >
    <p>{icon}</p>
    <p>{title}</p>
  </Link>
  )
}
