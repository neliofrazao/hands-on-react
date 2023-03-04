import {useState} from 'react'
import InfoCard from '../../shared/info-card'
import SectionWrapper from '../../shared/section-wrapper'
import './NewStudent.css'
import http from '../../utils/http'

const initalValues = {
  name: '', 
  course: '', 
  registration: ''
}

const NewStudent = () => {
  const [inputs, setInputs] = useState(initalValues)

  const handleInputChage = (event) => {
    console.log(event.target.value)
    const name =  event.target.name
    const value =  event.target.value
    console.log({[name]: value})
    setInputs(values => ({...values, [name]: value}))
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    http.post('alunos', {inputs})
    setInputs(initalValues)

  }

  return (
    <SectionWrapper  title="Novo estudante"  >
      <InfoCard title="Cadastro de aluno" isFullWith>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Nome</label>
              <input type='text' name='name' value={inputs.name || ""} onChange={handleInputChage} />
            </div>
            <div>
              <label>Matrícula</label>
              <input type='text' name='registration' value={inputs.registration || ""} onChange={handleInputChage} />
            </div>
            <label>Curso</label>
            <select name='course' value={inputs.course || ""}  onChange={handleInputChage}>
              <option value="">Selecione</option>
              <option>Sistemas para internet</option>
              <option>Redes</option>
            </select>
          </div> 
          <button type='submit'>Salvar</button>     
        </form>
      </InfoCard>
    </SectionWrapper>
  )
}

export default NewStudent