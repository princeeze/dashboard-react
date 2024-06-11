import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2UFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5WdE1jW3xfcnBQQ2lV",
);

const root = createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
