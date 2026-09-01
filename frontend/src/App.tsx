import "./App.css";
import AppRoutes from "./routes/appRoutes";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();
  return <AppRoutes />;
}

export default App;
