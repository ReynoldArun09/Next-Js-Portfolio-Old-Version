import CustomNavLink from "../custom-components/customNavLink";
import ThemeButton from "./themeButton";

const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="hidden md:flex justify-end items-center gap-5 py-5">
      {NavLinks.map((link, index) => (
        <CustomNavLink key={link.label} href={link.href} Linknumber={`${index + 1}.`}>
          {link.label}
        </CustomNavLink>
      ))}
      <ThemeButton />
    </header>
  );
}
