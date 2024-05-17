import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { Typography } from "@mui/material";
import { useMobile } from "../../hooks/useMobile";
import { analytics } from "../../firebase/firebaseConfig";
import { NavBar } from "../NavBar";
import { pagesWithComponents } from "../../pages/pages";
import { Footer } from "../Footer";

type PageWrapperProps = {
  children: JSX.Element;
  removePadding?: boolean;
};

export const PageWrapper = ({ children, removePadding }: PageWrapperProps) => {
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: location.pathname,
      page_location: location.pathname,
      page_title: location.pathname,
    });
  }, [location]);

  return (
    <Stack height={"100vh"} width={"100vw"} justifyContent={"space-between"}>
      <Stack>
        <Stack component={"nav"}>
          <NavBar />
        </Stack>

        {isMobile ? (
          <Stack alignItems={"center"}>
            <Typography
              color={(theme) => theme.palette.primary.main}
              fontWeight={700}
              fontSize={"20px"}
            >
              {
                pagesWithComponents.find(
                  (item) =>
                    item.path.split("/")[1] === location.pathname.split("/")[1]
                )?.name
              }
            </Typography>
          </Stack>
        ) : null}
        <Stack component={"main"} p={removePadding ? undefined : "16px"}>
          {children}
        </Stack>
      </Stack>
      <Stack component={"footer"}>
        <Footer />
      </Stack>
    </Stack>
  );
};
