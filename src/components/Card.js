function Card({data, handleOpenModal}) {
    return (
        <div className="card">
          <img 
            className="img" 
            src={data.link} 
            alt={`full size view of ${data.prompt}`} 
            title={data.prompt}
            onClick={handleOpenModal}
          />
        </div>
    );
}

export default Card;