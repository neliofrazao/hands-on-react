import SectionWrapper from '../../shared/section-wrapper'
import InfoCardList from '../../shared/infor-card-list'
import StudentList from '../../components/student-list'

const Main = () => {
  const subjectButton = {
    label: 'Nova Disciplina',
    action: () => console.log('Novo Aluno')
  }

  return(
    <>
      <StudentList />
      <SectionWrapper  title="Disciplina" button={subjectButton}>
        <InfoCardList>
        </InfoCardList>
      </SectionWrapper>
    </>
)}

export default Main