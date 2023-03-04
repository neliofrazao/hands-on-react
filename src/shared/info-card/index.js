import './InfoCard.css'

const InfoCard = ({children, title, isFullWith = false}) => {
  return (
    <div className={isFullWith ? "info-card-full" : "info-card" } >
      <h3 className="info-card__title">{title}</h3>
      <hr />
      {children}
    </div>
  )
}

export default InfoCard