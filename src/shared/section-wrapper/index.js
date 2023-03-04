import './SectionWrapper.css'

const SectionWrapper = ({children, title, button}) => {
  return (
  <section className="section-wrapper">
    <header className="section-header">
      <h1 className="section-header__title">{title}</h1>
      <div>
        {/* 0 por padrao é um falso verdadedeiro */}
        {button?.length && button.map((button) => (
          <button 
          className="button +--success" 
          onClick={button.action}
          >
            {button.label}
          </button>
        ))}
      </div>
      
    </header>
    {children}
  </section>
)}

export default SectionWrapper