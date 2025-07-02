import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; // ✅ default import

export const useAuth = () => {
    return useContext(AuthContext);
};
