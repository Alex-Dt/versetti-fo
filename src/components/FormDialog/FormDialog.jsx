import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ContactForm } from "../ContactForm";
import { Fragment, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FormDialog = ({ vacancy }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant={"contained"}
        onClick={handleClickOpen}
        sx={{
          alignItems: "center",
          color: "#010101",
          fontSize: "22px",
          svg: {
            fontSize: "32px!important",
          },
          p: 0.2,
          px: 2,
          backgroundColor: "#fff",
          borderWidth: 1,

          "&:hover": {
            backgroundColor: "#ffffff95",
          },
        }}
      >
        <Typography variant="span">Apply</Typography>
      </Button>
      <Dialog
        open={open}
        maxWidth={1000}
        disableEnforceFocus
        sx={{
          "& *": {
            backgroundImage: "none!important",
          },
        }}
        onClose={handleClose}
      >
        <DialogTitle>Vacancy Form</DialogTitle>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 20,
            top: 13,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <ContactForm type={"vacancy"} vacancy={vacancy} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
