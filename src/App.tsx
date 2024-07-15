import MobileLayout from "./components/layout/MobileLayout";
import WebLayout from "./components/layout/WebLayout";
import { useWindowWidth } from "./utils/hooks/useWindowWidth";

function App() {
  const windowWidth = useWindowWidth();

  return <>{windowWidth > 850 ? <WebLayout /> : <MobileLayout />}</>;
}

export default App;
