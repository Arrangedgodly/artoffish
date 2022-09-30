function Card(props) {
    return (
        <div className="card">
          <img className="img" src={props.link} alt={`full size view of ${props.name}`} title={props.name} />
        </div>
    );
}

export default Card;