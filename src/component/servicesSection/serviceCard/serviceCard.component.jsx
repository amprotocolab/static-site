import "./serviceCard.styles.scss";

const ServiceCard = ({icon,title,text}) =>{
    return(
        <div className="card col-xl-3 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
                <div className="icon">
                    <i className={icon}></i></div>
                    <h4><a href="">{title}</a></h4>
                <p>{text}</p>
            </div>
        </div>

    )
}
export default ServiceCard;