import LayoutContainer  from './components/layout-container'
import Main  from './pages/main'
import Newsletter from './pages/newsletter/newsletter';
import Admin from './pages/admin';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Main />} />
        <Route path="/informativo" element={<Newsletter />} />
        <Route path="/administrativo" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
