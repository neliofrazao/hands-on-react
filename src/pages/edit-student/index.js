import {useState, useEffect} from 'react'
import InfoCard from '../../shared/info-card'
import SectionWrapper from '../../shared/section-wrapper'
import http from '../../utils/http'
import InputText from '../../shared/forms/input-text'
import useForm from '../../hooks/useForm'
import { useParams } from 'react-router-dom'
import {Alert} from 'react-bootstrap';


const EditStudent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [ inputs, setInputs, handleInputChange] = useForm({})  
  const {id} = useParams()

  console.log('id', id)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    http.patch(`/alunos/${id}`, inputs)
    setIsSuccessful(true)
  }

  useEffect(() => {
    const getStudent = async () => {
      setIsLoading(true)
      try{
        const { data } = await http.get(`/alunos/${id}`)
        const initalValues = {
          name: data.name, 
          course: data.course, 
          registration: data.registration
        }
        setInputs(initalValues)
        
      //  setStudentData(initalValues)
      } catch(e) {
        console.log(e)
        
      } finally {
        setIsLoading(false)
      }
    }
    getStudent()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  
  if( isLoading) {
    return  'carregando'
  }


  return (
    <SectionWrapper  title="Editar estudante">
      {isSuccessful && (
        <Alert variant="success">
        O aluno foi alterado com sucesso
    </Alert>
      )}
       
      <InfoCard title="Cadastro de aluno" isFullWith>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <InputText name='name'value={inputs.name} handleChange={handleInputChange} />
            </div>
            <div>
              <label>Matrícula</label>
              <input type='text' name='registration' value={inputs.registration || ""} onChange={handleInputChange} />
            </div>
            <label>Curso</label>
            <select name='course' value={inputs.course || ""}  onChange={handleInputChange}>
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

export default EditStudent