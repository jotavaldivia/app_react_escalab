import { useContext } from "react";
export const useUserContext = (_context) => {
  const context = useContext(_context);
  if (context === undefined) {
    throw new Error("useUserContext se le debe pasar un contexto");
  }
  return context;
};
