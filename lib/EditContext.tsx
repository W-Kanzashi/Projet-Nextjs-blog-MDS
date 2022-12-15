import { createContext, useState, ChangeEvent } from "react";

interface EditProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export const EditMode = createContext({
  editMode: false,
  formValue: {
    firstname: "",
    lastname: "",
    email: "",
    profile: "",
  },
  setFormValue: (value: any) => {},
  openDialog: false,
  setEditMode: (value: boolean) => {},
  setOpenDialog: (value: boolean) => {},
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {},
  handleSubmit: (event: any, url: string, method: string) => {},
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
      profile: "",
    };
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any, url: string, method: string) => {
    event.preventDefault();

    const data = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

    const { content } = await data.json();

    Object.keys(formValue).forEach((key, value) => {
      setFormValue({
        ...formValue,
        [key]: content[key],
      });
    });
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
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </EditMode.Provider>
  );
}
