import { useState, useEffect, useCallback} from 'react'
import SectionWrapper from '../../shared/section-wrapper'
import InfoCardList from '../../shared/infor-card-list'
import InfoCard from '../../shared/info-card'
import http  from '../../utils/http'
import './StudentList.css'


const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // const getStudent = useCallback(
  //   async () => {
  //     try {
  //       const response = await http.get('/alunos')
  //       setStudentData(response.data)
  //     } catch(erro) {
  //       if(erro.response.status === 404) {
  //         console.log('Use a url correta')
  //       }
  //     }
  //   },
  //   [studentData],
  // )
  

  useEffect(() => {
    const getStudent = async () => {
      try {
        setIsLoading(true)
        setHasError(false)
        const response = await http.get('/alunos')
        setStudentData(response.data)
      } catch(erro) {
        console.log(erro)
        if(erro.response.status === 404) {
          setHasError(true)
          console.log('Use a url correta')
        }
      } finally {
        setIsLoading(false)
      }
    }
    getStudent()
  }, [])
  

  if(isLoading) {
    return 'carregando'
  }

  const studentButton = {
    label: 'Novo Aluno',
    action: () => console.log('Novo Aluno')
  }

  return (
    <SectionWrapper title="alunos" button={studentButton}>    
      <InfoCardList>
      {hasError && <div>Tente Novamente mais tarde</div>}
      {studentData?.length ? studentData.map((item) => (
        <InfoCard title={item.name} key={item.id}>
          <ul className="info-card__list">
            <li>Matrícula: {item.registration}</li>
            <li>Curso: {item.course}</li>
          </ul>
        </InfoCard>
        )) : <p>Nenhum Aluno Cadastrado</p>
      } 
      
    </InfoCardList>
  </SectionWrapper>

  )
}

export default StudentList