import { createContext, useState, ChangeEvent } from "react";

import { getCookie, deleteCookie } from "cookies-next";

interface UserProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export const User = createContext({
  user: {},
  setUser: (value: any) => {},
  checkUserJWT: () => {},
  decodeJWT: () => {},
});

export function MyUserProvider({ children }: UserProps) {
  const [user, setUser] = useState(() => {
    return {
      _id: "",
      name: "",
      email: "",
      profile: "",
    };
  });

  const decodeJWT = async () => {
    const jwtToken = getCookie("session");
    const response = await fetch("/api/jwt", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jwtToken),
    });

    const { message, valid } = await response.json();

    if (valid === true) {
      setUser(message);
      return true;
    } else {
      deleteCookie("session");
      return false;
    }
  };

  const checkUserJWT = async () => {
    const jwtToken = getCookie("session");

    const response = await fetch("/api/jwt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jwtToken),
    });

    const { success } = await response.json();

    if (success === true) {
      return true;
    } else {
      deleteCookie("session");
      return false;
    }
  };

  return (
    <User.Provider
      value={{
        user,
        setUser,
        checkUserJWT,
        decodeJWT,
      }}
    >
      {children}
    </User.Provider>
  );
}
