import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TemporaryDrawer from "./Drawer";
import { useMobile } from "../../hooks/useMobile";
import { pagesWithComponents } from "../../pages/pages";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useMobile();

  const handleCloseNavMenu = (page?: string) => {
    if (page) {
      navigate(page);
    }
  };

  return (
    <>
      <AppBar
        component={"nav"}
        position="fixed"
        sx={{ bgcolor: "#FFF", px: { xl: "80px" }, width: "100vw" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMobile && (
              <Stack direction={"row"} alignItems={"center"}>
                <TemporaryDrawer />
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
            )}

            {!isMobile && (
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                flex={1}
                alignItems={"center"}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      mr: 2,
                      flexGrow: 1,
                      fontWeight: 700,
                      letterSpacing: ".1px",
                      color: "#1E1E1E",
                    }}
                  >
                    Adote o RS
                  </Typography>
                </Link>

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pagesWithComponents?.map((page) => {
                    return (
                      <Button
                        key={page.name}
                        onClick={() => handleCloseNavMenu(page.path)}
                        sx={{
                          my: 2,
                          display: "block",
                          bgcolor: location.pathname.includes(page.path)
                            ? "#A5A6F640"
                            : undefined,
                        }}
                      >
                        <Typography
                          color={(theme) => theme.palette.primary.main}
                          fontWeight={700}
                        >
                          {page.name}
                        </Typography>
                      </Button>
                    );
                  })}
                </Box>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      {isMobile && <Box mb={"60px"} />}
    </>
  );
};
