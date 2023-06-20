import { useContext } from "react";
import { NotifContext } from "../contexts/NotifContext";

const useNotif = () => {
    return useContext(NotifContext);
}

export default useNotif;