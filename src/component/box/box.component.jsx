import Container from "../container/contain.component";
import Navigation from "../navigation/navigation";
import "./box.styles.scss";

const Box = () =>{
    return(
        <div className="box">
            <Navigation />
            <Container />
        </div>
    );
}
export default Box;