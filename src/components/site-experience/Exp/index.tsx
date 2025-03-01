interface ExpCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function Exp({ icon, title, subtitle }: ExpCardProps) {
  return (
    <div className="dark:text-white">
      <span className="w-12 h-12 rounded-full bg-black">{icon}</span>
      <div className="space-y-2.5">
        <p className="md:text-3xl font-bold tracking-wider">{title}</p>
        <p className="tracking-wider text-xl font-medium">{subtitle}</p>
      </div>
    </div>
  );
}
