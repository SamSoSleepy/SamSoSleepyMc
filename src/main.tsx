
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  // Load global theme and component styles (contains .deltarune-bg and CSS variables)
  import "./styles/globals.css";

  createRoot(document.getElementById("root")!).render(<App />);
  