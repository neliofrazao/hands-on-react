import './LayoutContainer.css'
import Logo from '../../images/cse-marcas-unipe_50anos_va1.svg'
import {Outlet, Link} from 'react-router-dom'

const LayoutContainer = () => (
  <>
    <header className="header">
      <img src={Logo} alt="Sistema de Controle Acadêmico" className="header__logo" />
      <nav className="nav-header">
        <Link className="nav-header__link" to='/'>Principal </Link>
        <Link className="nav-header__link" to='/informativo'>Informativos </Link>
        <Link className="nav-header__link" to='/administrativo'>Administrativo </Link>
        <Link className="nav-header__link" to='/'>Sair </Link>
      </nav>
    </header>
    <main>
       <Outlet />
    </main>
    <footer className="footer">
      <span>Lorem, ipsum dolor sit tenetur voluptatem quod!</span>
    </footer>
  </>
 
)

export default LayoutContainer