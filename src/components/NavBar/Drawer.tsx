import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pagesWithComponents } from "../../pages/pages";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack direction={"row"} justifyContent={"center"} p="8px">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".1px",
              color: "#1E1E1E",
              fontSize: "24px",
            }}
          >
            Adote o RS
          </Typography>
        </Link>
      </Stack>
      <Divider />
      <List>
        {pagesWithComponents.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(page.path);
              }}
              sx={{
                display: "block",
                bgcolor: location.pathname.includes(page.path)
                  ? "#A5A6F640"
                  : undefined,
              }}
            >
              <ListItemText />
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 700,
                }}
              >
                {page.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <IconButton
          size="large"
          aria-label=""
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => setOpen((prev) => !prev)}
          color="inherit"
        >
          <MenuIcon color="action" />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          {DrawerList}
        </Drawer>
      </>
    </div>
  );
}
