export default function Section(props) {
  return (
    <div className="mount-section">
      <img src={props.imageUrl} alt={props.title} className="mount-image"/>
      <h1>{props.title}</h1>
      <p>{props.location}</p>
      <a href={props.googleMapsUrl}>View on google maps</a>
      <p>{props.startDate} - {props.endDate}</p>
      <p className="mount-description">{props.description}</p>
    </div>
  )
}
