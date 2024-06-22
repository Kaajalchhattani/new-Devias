import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import { navItems } from "./config";
import { usePathname } from "next/navigation";
import Link from "@mui/material/Link";
import { neonBlue, nevada } from "../../color";

const SideNavBar = () => {
  let Color = "white";
  const pathname = usePathname();

  const RenderNavItems = (navItems) => {
    return navItems.map((item) => (
      <div key={item.key}>
        <Box
          sx={{
            backgroundColor: pathname == item.href ? neonBlue[500] : "inherit",
            padding: 1,
            fontSize: 14,
            borderRadius: 2,
          }}
        >
          <Link underline="none" color="inherit" href={item.href}>
            {item.title}
          </Link>
        </Box>
      </div>
    ));
  };
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
        padding: 2,
        width: 300,
      }}
    >
      <Stack>
        <Typography sx={{}} variant="h5">
          DeviasKit
        </Typography>
        <Box sx={{ borderWidth: 1, borderRadius: 4, padding: 1, margin: 2 }}>
          <Typography sx={{ color: "grey" }} variant="subtitle2">
            Workspace
          </Typography>
          <Typography>Devias</Typography>
        </Box>
        <Divider sx={{ borderColor: nevada[600], marginBottom: 1 }} />
        <Stack p={8} sx={{ padding: 1, height: 20 }}>
          <Box component="nav">{RenderNavItems(navItems)}</Box>

          <Divider
            sx={{ borderColor: nevada[600], marginTop: 2, marginBottom: 2 }}
          />

          <div>
            <Typography>Need more features?</Typography>
            <Typography variant="subtitle2" fontWeight={2} color={nevada[400]}>
              Check out our Pro solution template.
            </Typography>
          </div>
          <Button></Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideNavBar;
