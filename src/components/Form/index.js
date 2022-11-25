import { useState } from "react";
import { FormContainer, FormInput, FormInputTitle, FormTitle, FormWrapper, FormInputButton } from "./FormElements";


const Form = (props) => {

    const [form, setForm] = useState({
        titre: "",
        commentaire: "",
        date: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault(); //  bloquer le rechargement de page
        const { titre, commentaire, date } = form;
        if (
            titre.length > 0 &&
            commentaire.length > 0 &&
            date.length > 0
        ) {
            props.setRdv((prevData) => {
                prevData.rdv.push({ titre, commentaire, date });
                return { ...prevData, rdv: prevData.rdv }
            })
            setForm({ titre: "", commentaire: "", date: "" }); // vider le formulaire
        } else {
            alert("veuillez compléter les champs ");
        }
    }


    return (
        <FormContainer>
            <FormWrapper onSubmit={handleSubmit}>
                <FormTitle>Réserver un rendez vous</FormTitle>
                <FormInputTitle>Titre</FormInputTitle>
                <FormInput name={"titre"} value={form.titre} onChange={handleChange} />

                <FormInputTitle>Commentaire</FormInputTitle>
                <FormInput name={"commentaire"} value={form.commentaire} onChange={handleChange}/>

                <FormInputTitle>Date</FormInputTitle>
                <FormInput name={"date"} type={"date"} value={form.date} onChange={handleChange}/>
                
                <FormInputButton type={"submit"} value={"Réserver"}/>
            </FormWrapper>
        </FormContainer>
    );
}

export default Form;