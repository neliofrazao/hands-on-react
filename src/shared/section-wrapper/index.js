import './SectionWrapper.css'

const SectionWrapper = ({children, title, button}) => (
  <section className="section-wrapper">
    <header className="section-header">
      <h1 className="section-header__title">{title}</h1>
      {button && 
        <button 
          className="button +--success" 
          onClick={button.action}
          >
            {button.label}
          </button>
        }
      
    </header>
    {children}
  </section>
)

export default SectionWrapper