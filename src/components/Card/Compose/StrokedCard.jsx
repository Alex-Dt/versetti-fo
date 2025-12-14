import { Card, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

export const StrokedCard = ({ icon, title, href }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  
  const cardContent = (
    <Card
      variant={"outlined"}
      sx={{
        flex: 1,
        borderRadius: "30px",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: href ? "pointer" : "default",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderColor: "rgba(255, 255, 255, 0.23)",
        "&:hover": href ? {
          transform: "translateY(-8px) scale(1.02)",
          borderColor: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)",
          background: "rgba(255, 255, 255, 0.05)",
        } : {},
      }}
    >
        <Stack
          p={2}
          direction={"row"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            loading="lazy"
            style={{
              height: 63,
              minHeight: 63,
              objectFit: "contain",
              ...(!isDesktop && { height: 40, minHeight: 40 }),
            }}
            src={icon}
            alt={title}
          />
          <Typography variant={"h3"}>{title}</Typography>
        </Stack>
      </Card>
  );

  if (href) {
    return (
      <Link href={href} style={{ flex: 1, textDecoration: "none" }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
