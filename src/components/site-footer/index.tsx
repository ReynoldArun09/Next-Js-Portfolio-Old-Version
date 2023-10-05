export default function SiteFooter() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="text-center py-2 space-y-2 relative">
      <p className="text-2xl dark:text-white">
        Built with{" "}
        <span className="text-portlighttext dark:text-portdarktext cursor-pointer">
          Next.js{" "}
        </span>
        and{" "}
        <span className="text-portlighttext dark:text-portdarktext cursor-pointer ">
          Tailwind CSS
        </span>
      </p>
      <p className="text-xl dark:text-white">
        &copy; All Rights Reserved {year}
      </p>
    </footer>
  );
}
