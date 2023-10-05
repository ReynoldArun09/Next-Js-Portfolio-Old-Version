import CustomNavLink from "../custom-components/customNavLink";
import ThemeButton from "./themeButton";

export default function SiteHeader() {
  return (
    <header className="flex justify-end items-center gap-5 py-5">
      <CustomNavLink href="#about" Linknumber={"01."}>
        about
      </CustomNavLink>
      <CustomNavLink href="#skills" Linknumber={"02."}>
        Skills
      </CustomNavLink>
      <CustomNavLink href="#exp" Linknumber={"03."}>
        Experience
      </CustomNavLink>
      <CustomNavLink href="#projects" Linknumber={"04."}>
        Projects
      </CustomNavLink>
      <CustomNavLink href="#contact" Linknumber={"05."}>
        Contact
      </CustomNavLink>
      <ThemeButton />
    </header>
  );
}
