"use client";

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
  return (
    <Navbar isBordered>
      <NavbarBrand className="text-3xl font-extralight">
        Meqr&apos;s Protfolio
      </NavbarBrand>
      <NavbarContent justify="end" className="sm:flex hidden">
        <NavbarItem isActive={window.location.pathname === "/"}>
          <Link href="/">Home</Link>
        </NavbarItem>

        <NavbarItem isActive={window.location.pathname === "/about"}>
          <Link href="/about">About</Link>
        </NavbarItem>

        <NavbarItem isActive={window.location.pathname === "/projects"}>
          <Link href="/projects">Projects</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu className="sm:hidden">
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects">Projects</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
