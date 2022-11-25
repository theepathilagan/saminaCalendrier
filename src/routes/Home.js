import react from "react";
import Calendar from "../components/Calendar";

function Home(props) {
    return (
        <Calendar rdv={props.rdv}></Calendar>
    );
}

export default Home;