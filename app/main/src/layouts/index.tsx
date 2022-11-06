import { useMemo } from "react";
import { WhiteRoutes } from "@/constant";
import { Outlet, useLocation } from "umi";
import Container from "./Container";
import { ConfigProvider, theme } from "antd";
import "minireset.css";

const { useToken } = theme

const whiteRoutes = ["/login"];

export default function Layout() {
  const location = useLocation();
  const { token } = useToken()

  const hasLayout = useMemo(() => {
    return !WhiteRoutes.includes(location.pathname);
  }, [location]);

  return (
    <ConfigProvider
      theme={{
        token: {
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
          }
        }
      }}
    >
      {hasLayout ? <Container /> : <Outlet />}
    </ConfigProvider>
  );
}
