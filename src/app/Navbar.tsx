"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Navbar isBordered position="sticky" isMenuOpen={menuOpen}>
      <NavbarBrand className="text-3xl font-extralight">
        Meqr&apos;s Portfolio
      </NavbarBrand>
      <NavbarContent justify="end" className="sm:flex hidden">
        <NavbarItem>
          <Link href="#techstack">Tech Stack</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="#projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about">About</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" onClick={handleMenuToggle} />
      <NavbarMenu className="sm:hidden">
        <NavbarMenuItem>
          <Link href="#techstack" onClick={handleLinkClick}>Tech Stack</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#projects" onClick={handleLinkClick}>Projects</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#about" onClick={handleLinkClick}>About</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

