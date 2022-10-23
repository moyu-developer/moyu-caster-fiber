import { useMemo } from "react";
import { WhiteRoutes } from "@/constant";
import { Outlet, useLocation } from "umi";
import Container from "./Container";
import { ConfigProvider } from "antd";
import "minireset.css";

const whiteRoutes = ["/login"];

export default function Layout() {
  const location = useLocation();

  const hasLayout = useMemo(() => {
    return !WhiteRoutes.includes(location.pathname);
  }, [location]);

  return (
    <ConfigProvider
      theme={{
        token: {
          radiusBase: 4,
        },
      }}
    >
      {hasLayout ? <Container /> : <Outlet />}
    </ConfigProvider>
  );
}
