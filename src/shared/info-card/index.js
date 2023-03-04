import './InfoCard.css'

const InfoCard = ({children, title}) => {
  return (
    <div className="info-card">
      <h3 className="info-card__title">{title}</h3>
      <hr />
      {children}
    </div>
  )
}

export default InfoCard