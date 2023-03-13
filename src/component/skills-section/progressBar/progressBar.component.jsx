import "./progressBar.styles.scss";

const ProgressBar = ({title,val,id}) =>{
    return(
        <>
        <div className="progress">
            <span className="skill">{title} 
            <i className="val">{val}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" id = {id} role="progressbar" aria-valuenow={`${val}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        </>
    );

}
export default ProgressBar;