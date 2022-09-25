import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layouts";
import { GlobalStyle } from "./themes";
function App() {
  return (
    <CustomThemeProvider>
      <AppLayout>
        <GlobalStyle />
        <p>Olá</p>
      </AppLayout>
    </CustomThemeProvider>
  );
}

export default App;
