import {useState, useEffect} from 'react'
import { useParams, useNavigate  } from "react-router-dom"
import SectionWrapper from "../../shared/section-wrapper"
import http from '../../utils/http'
import InfoCard from '../../shared/info-card'

const StudentDetail = () => {
  const [studentData, setStudentData] = useState()
  const {id} = useParams()
  const navigate = useNavigate()
  const studentUrl = `alunos/${id}`
  
  const handleDelete = async () => {
    await http.delete(studentUrl);
    navigate("/")
  }

  useEffect(() => {
    const getStudentInfo = async () => {
      const response =  await http.get(studentUrl)
      setStudentData(response.data)
    }
    getStudentInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const subjectButton = [
    {
      label: 'Apagar Aluno',
      action: handleDelete,
    },
    {
      label: 'Nova Aluno',
      action: () => console.log('novo aluno')
    },
  ]
  
  return (
  <SectionWrapper  title="Estudante"  button={studentData ? subjectButton : undefined} >
    {studentData ? 
    (
      <InfoCard title={studentData.name} key={studentData.id} isFullWith>
      <ul className="info-card__list">
        <li>Matrícula: {studentData.registration}</li>
        <li>Curso: {studentData.course}</li>
      </ul>
    </InfoCard>
    ): <p>Estudante não encontrado</p>}
    
  </SectionWrapper>
)}

export default StudentDetail