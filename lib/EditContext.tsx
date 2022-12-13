import { createContext, useState } from "react";

interface EditProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export const EditMode = createContext({
  editMode: false,
  formValue: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile: "",
  },
  setFormValue: (value: any) => {},
  openDialog: false,
  setEditMode: (value: boolean) => {},
  setOpenDialog: (value: boolean) => {},
  submit: () => {},
});

export function MyEditProvider({ children }: EditProps) {
  // Save the current theme state
  const [editMode, setEditMode] = useState(() => {
    return false;
  });

  const [openDialog, setOpenDialog] = useState(() => {
    return false;
  });

  const [formValue, setFormValue] = useState(() => {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      profile: "",
    };
  });

  const submit = async () => {
    console.log("submit");
  };

  return (
    <EditMode.Provider
      value={{
        editMode,
        setEditMode,
        openDialog,
        setOpenDialog,
        formValue,
        setFormValue,
        submit,
      }}
    >
      {children}
    </EditMode.Provider>
  );
}
