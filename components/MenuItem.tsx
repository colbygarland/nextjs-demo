import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: string;
  link: string;
}

export const MenuItem = ({ title, link }: MenuItemProps) => {
  return (
    <Link href={link}>
      <a className="mx-6 inline-block">{title}</a>
    </Link>
  );
};
