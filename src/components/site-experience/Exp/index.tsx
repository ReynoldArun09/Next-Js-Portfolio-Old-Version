interface ExpCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode
}

export default function Exp({icon, title, subtitle}: ExpCardProps) {
  return (
    <div className="dark:text-white">
        <span className="w-12 h-12 rounded-full bg-black">
        {icon}
        </span>
        <div>
          <p className="text-3xl font-bold ">{title}</p>
          <p className="text-xl font-medium tracking-wide">
            {subtitle}
          </p>
        </div>
      </div>
  )
}
