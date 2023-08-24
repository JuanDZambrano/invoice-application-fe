import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "tailwindcss/tailwind.css";
import { AppRoutes } from "./AppRoutes";
import { ThemeProvider } from "./components/theme-provider";
import "./styles/app.scss";
import "./styles/globals.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
