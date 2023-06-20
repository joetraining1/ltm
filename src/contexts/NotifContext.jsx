import { createContext, useRef, useState } from "react";
import { toast, cssTransition } from "react-toastify";

export const NotifContext = createContext({
  toastSuccess: () => {},
  toastError: () => {},
  toastInfo: () => {},
  infoToast: () => {},
  updateToast: () => {},
});

const NotifProvider = ({ children }) => {
  const toastRef = useRef(null);

  const toastError = (msg) => {
    toast.error(msg, {
      position: "top-center",
      theme: "light",
      draggable: false,
      pauseOnHover: true,
      autoClose: 2000,
      closeOnClick: true,
    });
  };
  const toastSuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
      theme: "colored",
      draggable: false,
      pauseOnHover: true,
      autoClose: 2000,
      closeOnClick: true,
    });
  };
  const toastInfo = (msg) => {
    toast.info(msg, {
      position: "top-center",
      theme: "light",
      draggable: false,
      pauseOnHover: true,
      autoClose: 2000,
      closeOnClick: true,
    });
  };
  const infoToast = (msg) =>
    (toastRef.current = toast.info(msg, {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
    }));

  const updateToast = (msg, type) => {
    let typeToast;
    if (type === "success") {
      typeToast = toast.TYPE.SUCCESS;
    }
    if (type === "error") {
      typeToast = toast.TYPE.ERROR;
    }
    toast.update(toastRef.current, {
      render: msg,
      type: typeToast,
      theme: "colored",
      autoClose: 2000,
      isLoading: false,
      closeOnClick: true,
    });
  };

  return (
    <NotifContext.Provider
      value={{ toastSuccess, toastError, toastInfo, infoToast, updateToast }}
    >
      {children}
    </NotifContext.Provider>
  );
};

export default NotifProvider;
