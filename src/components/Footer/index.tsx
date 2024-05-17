import { GitHub } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Stack
      direction={"row"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "red" }}
    >
      <Stack
        sx={{ backgroundColor: "transparent" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        p={2}
      >
        <Typography fontWeight={700}>Em desenvolvimento</Typography>
        <Link
          to="https://github.com/caiorrs/adote-o-rs"
          style={{ textDecoration: "none" }}
        >
          <Stack
            direction={"row"}
            sx={{ backgroundColor: "transparent" }}
            gap={2}
          >
            <Typography fontWeight={700}>AJUDE</Typography>
            <GitHub />
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
