import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layouts";
import { GlobalStyle } from "./themes";
function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <AppLayout />
      <p>Olá</p>
    </CustomThemeProvider>
  );
}

export default App;
