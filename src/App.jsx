import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./pages/global/Sidebar";
import Team from "./pages/team";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/contacts";
// import Bar from "./pages/global/Bar";
import Form from "./pages/Form";
// import Line from "./pages/global/Line";
// import Pie from "./pages/global/Pie";
// import FAQ from "./pages/global/FAQ";
// import Geography from "./pages/global/Geography";
// import Calendar from "./pages/global/Calendar";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar/>} /> */}
                {/* <Route path="/pie" element={<Pie/>} /> */}
                {/* <Route path="/line" element={<Line/>} /> */}
                {/* <Route path="/fqa" element={<FAQ/>} /> */}
                {/* <Route path="/geography" element={<Geography/>} /> */}
                {/* <Route path="/calendar" element={<Calendar/>} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
