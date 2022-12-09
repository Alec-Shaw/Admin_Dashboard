import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/global/Dashboard";
import Team from "./pages/global/Team";
import Invoices from "./pages/global/Invoices";
import Contacts from "./pages/global/Contacts";
import Bar from "./pages/global/Bar";
import Form from "./pages/global/Form";
import Line from "./pages/global/Line";
import Pie from "./pages/global/Pie";
import FAQ from "./pages/global/FAQ";
import Geography from "./pages/global/Geography";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
                <Route path="/" element={Dashboard} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
