const WrapperContainer = ({children, title}) => (
  <section class="section-wrapper">
    <header class="section-header">
      <h1 class="section-header__title">{title}</h1>
      {/* <button class="button +--success" onclick="createStudent()">Novo Aluno</button> */}
    </header>
    {children}
  </section>
)

export default WrapperContainer