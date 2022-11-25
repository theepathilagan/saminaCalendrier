import react from "react";
import Form from "../components/Form";

function Book(props) {
    return (
        <Form setRdv={props.setRdv}></Form>
    );
}

export default Book;