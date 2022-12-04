import * as React from "react";
import { useLocation } from "umi";
import { Button, Menu, MenuProps, Space } from "antd";
import { useStyles } from "./useStyles";
import { BrandTop } from "../BrandTop";
import { SearchBar } from "../SearchBar";
import { Footer } from "../Footer";
import { menuRoutes } from "../../../../config/routes";

type MenuItem = Required<MenuProps>["items"][number];

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
];

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
        selectedKeys={['item-1']}
        mode="vertical"
        items={items as MenuItem[]}
      />
      <Footer />
    </div>
  );
};
