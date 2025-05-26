import { Box, Stack, Link } from "@mui/material";
import { menu } from "../../constants/navigation";

export const Navigation = () => {
  return (
    <Stack>
      <Box component="nav">
        <Stack direction="row">
          {menu.map(({ title, href }) => {
            return (
              <Link
                href={href}
                sx={{
                  p: 2,
                }}
                underline="none"
                color="inherit"
              >
                {title}
              </Link>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};
