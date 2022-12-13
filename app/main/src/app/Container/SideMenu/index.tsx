import * as React from "react";
import { useLocation } from "umi";
import { Button, Menu, MenuProps, Space } from "antd";
import { useStyles } from "./useStyles";
import { BrandTop } from "../BrandTop";
import { SearchBar } from "../SearchBar";
import { Footer } from "../Footer";
import { menuRoutes } from "../../../../config/routes";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items = menuRoutes.map((route) => {
  return getItem(route.name, route.path);
});

export const SideContainer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.side}>
      <BrandTop />
      <SearchBar />
      <Menu
        style={{
          background: "transparent",
          borderRight: "none",
        }}
        selectedKeys={[pathname]}
        mode="vertical"
        items={items as MenuItem[]}
      />
      <Footer />
    </div>
  );
};
