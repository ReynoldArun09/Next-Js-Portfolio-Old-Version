import Link from "next/link";

interface SkillProps {
  title: string;
  icon: React.ReactNode;
}

export default function SkillCard({ title, icon }: SkillProps) {
  return (
    <Link href="/" className="flex items-center gap-3 px-6 py-2 text-lg bg-transparent font-bold tracking-wide rounded-md border border-portlighttext dark:border-portdarktext dark:text-white hover:bg-portlighttext hover:dark:bg-portdarktext dark:hover:text-black">
        <span>{icon}</span>
        <span>{title}</span>
    </Link>
  );
}
