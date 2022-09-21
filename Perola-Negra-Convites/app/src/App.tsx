import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import theme from "assets/styles/theme";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { FavoritoProvider } from "pages/Favoritos/contexts/FavoritoContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <FavoritoProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </FavoritoProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
