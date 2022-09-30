function Modal({data}) {
    return (
        <div className="modal">
        <div className="img-wrapper">
        <img
          className="img-large"
          src={data.link}
          alt={data.prompt}
          loading="eager"
        />
        <p className="text-modal">{data.prompt}</p>
        </div>
      </div>
    );
}

export default Modal;