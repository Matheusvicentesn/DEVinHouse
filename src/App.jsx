import { AppContextProvider } from "./context/app-context";
import Home from "./pages/Home";

export const App = () => {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
};
