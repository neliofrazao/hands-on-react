import LayoutContainer  from './components/layout-container'
import Main  from './pages/main'
import Newsletter from './pages/newsletter/newsletter';
import Admin from './pages/admin';
import { Routes, Route } from "react-router-dom";
import StudentDetail from './pages/student-detail';
import NewStudent from './pages/new-student';
import EditStudent from './pages/edit-student';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<Main />} />
        <Route path="informativo" element={<Newsletter />} />
        <Route path="administrativo" element={<Admin />} />
        <Route path="aluno">
          <Route path=":id" element={<StudentDetail />} />
          <Route path="editar/:id" element={<EditStudent />} />
          <Route path="novo-aluno" element={<NewStudent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
