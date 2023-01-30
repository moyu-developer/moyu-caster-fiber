import { useMemo } from "react";
import { WhiteRoutes } from "@/constant";
import { Outlet, useLocation } from "umi";
import Container from "./Container";
import { ConfigProvider, theme } from "antd";
// import "minireset.css";

const { useToken } = theme

export default function Layout() {
  const location = useLocation();
  const { token } = useToken()

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          colorPrimary: `rgb(22 93 255)`
        },
        components: {
          Collapse: {
            padding: token.paddingSM,
            colorBorder: "none",
          },
          Typography: {
          },
          Divider: {
            marginLG: 0,
          },
          Menu: {
            colorItemBgSelected: "#e7e9e8",
            colorItemTextSelected: token.colorPrimary,
            itemMarginInline: 12,
            radiusItem: 4,
            padding: 12,
            controlHeightLG: 32
          }
        }
      }}
    >
      <Container />
    </ConfigProvider>
  );
}
