import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  Linknumber: string;
}

export default function CustomNavLink({ href, children, Linknumber, className, ...props }: LinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        (className =
          "text-portdark font-headingFont2 dark:text-white flex gap-2 lg:text-xl tracking-wider capitalize font-semibold hover:border-b-2 hover:border-b-portlighttext dark:border-b-portdarktext transition duration-500 delay-300 hover:text-portlighttext hover:dark:text-portdarktext"),
        className
      )}
      {...props}
    >
      <span className="text-portlighttext dark:text-portdarktext hover:scale-90 font-bold">{Linknumber}</span>
      <span>&#60; {children} &#62;</span>
    </Link>
  );
}
