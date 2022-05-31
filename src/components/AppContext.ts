import { createContext } from "react";

interface AppContextInterface {
}

export const AppContext = createContext<AppContextInterface | null>(null);
