import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0FAFC",
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "row",
        },
        color: "#F0FAFC",
        padding: 3,
        gap: 3,
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
