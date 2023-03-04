import './LayoutContainer.css'
import Logo from '../../images/cse-marcas-unipe_50anos_va1.svg'

const LayoutContainer = ({children}) => (
  <>
    <header className="header">
      <img src={Logo} alt="Sistema de Controle Acadêmico" className="header__logo" />
      <nav className="nav-header">
        <a title="Página principal" className="nav-header__link">Principal</a>
        <a  title="Alunos" className="nav-header__link">Alunos</a>
        <a  title="Disciplina" className="nav-header__link">Disciplina</a>
        <a  title="Sair" className="button button--danger">Sair</a>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer className="footer">
      <span>Lorem, ipsum dolor sit tenetur voluptatem quod!</span>
    </footer>
  </>
 
)

export default LayoutContainer