import styled from "styled-components";

export const CalendarContainer = styled.section`
    border-top-width: 1px;
    border-left-width: 1px;
    width: 100%;
    height: 90vh;
    background: #07C8F9;
`

export const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    text-align: center;
`
// export const CalendarActiveCell = styled.div`
//     width: 18%;
//     height: 50%;
//     background-color: purple;
//     ${props => props.isEvent ? "background-color: brown;" : "background-color: purple;"}
//     border-radius: 100%;
// `

export const CalendarCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    height: 10vh;
    border: 1px solid black;
    ${props => props.monthCell ? "grid-column: span 3 / span 3;" : ""}
    ${props => props.isActive ? "background-color: blue;" : ""}
    ${props => props.isEvent ? "background-color: red;" : ""}
`

export const CalendarDateText = styled.h1`
    font-family: "Gill Sans", sans-serif;
    color: black;
    font-size: 25px;
    text-align: center;
    cursor: pointer;

`

export const CalendarDaysText = styled.h2`
    font-family: "Gill Sans", sans-serif;
    color: black;
    font-size: 20px;
    cursor: pointer;
`

export const CalendarNumsText = styled.h3`
    font-family: "Gill Sans", sans-serif;
    color: ${props => props.isActive ? "white" : "black"};
    font-size: 15px;
    cursor: pointer;
`


