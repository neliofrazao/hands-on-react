import SectionWrapper from '../../shared/section-wrapper'
import InfoCardList from '../../shared/infor-card-list'
import InfoCard from '../../shared/info-card'
import './StudentList.css'

const infoCardData = [ 
  {
    id: 1,
    name: "Evelyn Gonçalves",
    registration: "001",
    course: "Sistemas para internet"
  },
  {
    id: 2,
    name: "Laura Eliane",
    registration: "002",
    course: "Sistemas para internet"
  },
  {
    id: 3,
    name: "Carlos Alberto de Nobrega",
    registration: "004",
    course: "Sistemas para internet"
  }
]


const StudentList = () => {
  
  const studentButton = {
    label: 'Novo Aluno',
    action: () => console.log('Novo Aluno')
  }

  return (
    <SectionWrapper title="alunos" button={studentButton}>    
      <InfoCardList>
      {infoCardData.map((item) => (
      <InfoCard title={item.name} key={item.id}>
        <ul className="info-card__list">
          <li>Matrícula: {item.registration}</li>
          <li>Curso: {item.course}</li>
        </ul>
      </InfoCard>
      ))} 
    </InfoCardList>
  </SectionWrapper>

  )
}

export default StudentList