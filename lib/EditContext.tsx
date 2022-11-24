import { createContext, useState } from "react";

interface EditProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export const EditMode = createContext({
  editMode: false,
  openDialog: false,
  setEditMode: (value: boolean) => {},
  setOpenDialog: (value: boolean) => {},
});

export function MyEditProvider({ children }: EditProps) {
  // Save the current theme state
  const [editMode, setEditMode] = useState(() => {
    return false;
  });

  const [openDialog, setOpenDialog] = useState(() => {
    return false;
  });

  return (
    <EditMode.Provider
      value={{ editMode, setEditMode, openDialog, setOpenDialog }}
    >
      {children}
    </EditMode.Provider>
  );
}
