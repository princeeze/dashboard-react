import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`"dark_checker" ${currentMode === "Dark" ? "dark" : ""}`}>
      <BrowserRouter>
        <div className="page_container relative flex max-h-screen overflow-x-hidden dark:bg-main-dark-bg">
          {/* Settings */}
          <div className="settings fixed bottom-4 right-4 z-50">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className={
                  "rounded-full p-3 text-3xl text-white hover:bg-light-gray hover:drop-shadow-xl"
                }
                style={{ background: currentColor }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="c-sidebar fixed z-40 bg-white shadow-[rgb(113_122_131_/_11%)_0px_7px_30px_0px] dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="c-sidebar_collapsed w-0">
              <Sidebar />
            </div>
          )}

          {/* Main Container*/}
          <div
            className={`c-main ${
              activeMenu
                ? "min-h-screen w-full bg-main-bg md:ml-[18.75rem] dark:bg-main-dark-bg"
                : "min-h-screen w-full bg-main-bg dark:bg-main-dark-bg"
            } `}
          >
            {/* Navbar */}
            <div className="navbar fixed z-30 w-[stretch] bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>

            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
