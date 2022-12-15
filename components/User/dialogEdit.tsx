import { useContext } from "react";
import { EditMode } from "@/lib/EditContext";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogEdit({ open }: { open: boolean }): JSX.Element {
  const { setEditMode, setOpenDialog, formValue, setFormValue, handleSubmit } =
    useContext(EditMode);

  const handleClose = async (e: any) => {
    if (e.target.name === "validate") {
      setOpenDialog(false);
      setEditMode(false);
      handleSubmit(e, "/api/profile", "PATCH");
    } else {
      setOpenDialog(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClick={(e) => handleClose(e)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="cancel" onClick={(e) => handleClose(e)}>
            Cancel
          </Button>
          <Button
            type="button"
            name="validate"
            onClick={(e) => handleClose(e)}
            autoFocus
          >
            Validate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
