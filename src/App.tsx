import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "tailwindcss/tailwind.css";
import { AppRoutes } from "./AppRoutes";
import "./styles/app.scss";
import "./styles/globals.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
