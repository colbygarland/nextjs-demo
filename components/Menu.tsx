import React from "react";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <nav className="px-4 py-4 bg-indigo-500 text-white shadow sticky top-0">
      <MenuItem link="/" title="Home" />
      <MenuItem link="/static/sans-data" title="Static - No Data" />
      <MenuItem link="/static/data" title="Static - With Data" />
      <MenuItem link="/images" title="Image Optimization" />
    </nav>
  );
};
