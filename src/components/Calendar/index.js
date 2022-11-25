import { useState } from "react";
import { CalendarCell, CalendarWrapper, CalendarContainer, CalendarDateText, CalendarDaysText, CalendarNumsText } from "./CalendarElements"
import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from "date-fns";
import { HiChevronLeft, HiChevronRight, HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { IconContext } from "react-icons";

const weeks = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const Calendar = (props) => {
    const [date, setUsedDate] = useState(new Date);
    const today = new Date;

    const [startDate, setStartDate] = useState(startOfMonth(date));
    const [endDate, setEndDate] = useState(endOfMonth(date));
    const [numDays, setNumDays] = useState(differenceInDays(endDate, startDate) + 1);

    const [prefixDays, setPrefixDays] = useState(startDate.getDay() - 1);
    const [suffixDays, setSuffixDays] = useState(7 - endDate.getDay());

    const [changedState, setChangedState] = useState(false);

    const prevYear = () => {
        setUsedDate(sub(date, { years: 1 }));
        setStartDate(startOfMonth(sub(date, { years: 1 })));
        setEndDate(endOfMonth(sub(date, { years: 1 })));
        setNumDays(differenceInDays(endOfMonth(sub(date, { years: 1 })), startOfMonth(sub(date, { years: 1 }))) + 1);
        setPrefixDays(startOfMonth(sub(date, { years: 1 })).getDay() - 1);
        setSuffixDays(6 - endOfMonth(sub(date, { years: 1 })).getDay());
        setChangedState(true);
    }
    
    const prevMonth = () => {
        setUsedDate(sub(date, { months: 1 }));
        setStartDate(startOfMonth(sub(date, { months: 1 })));
        setEndDate(endOfMonth(sub(date, { months: 1 })));
        setNumDays(differenceInDays(endOfMonth(sub(date, { months: 1 })), startOfMonth(sub(date, { months: 1 }))) + 1);
        setPrefixDays(startOfMonth(sub(date, { months: 1 })).getDay() - 1);
        setSuffixDays(6 - endOfMonth(sub(date, { months: 1 })).getDay());
        setChangedState(true);
    }

    const nextMonth = () => {
        setUsedDate(add(date, { months: 1 }));
        setStartDate(startOfMonth(add(date, { months: 1 })));
        setEndDate(endOfMonth(add(date, { months: 1 })));
        setNumDays(differenceInDays(endOfMonth(add(date, { months: 1 })), startOfMonth(add(date, { months: 1 }))) + 1);
        setPrefixDays(startOfMonth(add(date, { months: 1 })).getDay() - 1);
        setSuffixDays(6 - endOfMonth(add(date, { months: 1 })).getDay());
        setChangedState(true);
    }

    const nextYear = () => {
        setUsedDate(add(date, { years: 1 }));
        setStartDate(startOfMonth(add(date, { years: 1 })));
        setEndDate(endOfMonth(add(date, { years: 1 })));
        setNumDays(differenceInDays(endOfMonth(add(date, { years: 1 })), startOfMonth(add(date, { years: 1 }))) + 1);
        setPrefixDays(startOfMonth(add(date, { years: 1 })).getDay() - 1);
        setSuffixDays(6 - endOfMonth(add(date, { years: 1 })).getDay());
        setChangedState(true);
    }
    const rdvDates = [];

    props.rdv.rdv.map((item) => {
        rdvDates.push(item.date);
    })

    return (
        <>
            <CalendarContainer>
                <CalendarWrapper>
                    <CalendarCell onClick={() => prevYear()}>
                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                            <HiChevronDoubleLeft />
                        </IconContext.Provider>
                    </CalendarCell>
                    <CalendarCell onClick={() => prevMonth()}>
                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                            <HiChevronLeft />
                        </IconContext.Provider>
                    </CalendarCell>
                    <CalendarCell monthCell={true}>
                        <CalendarDateText>{months[date.getMonth()] }{" "}{format(date, "yyyy")}</CalendarDateText>
                    </CalendarCell>
                    <CalendarCell onClick={() => nextMonth()}>
                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                            <HiChevronRight />
                        </IconContext.Provider>
                    </CalendarCell>
                    <CalendarCell onClick={() => nextYear()}>
                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                            <HiChevronDoubleRight />
                        </IconContext.Provider>
                    </CalendarCell>

                    {
                        weeks.map((day) => {
                            return (
                                <CalendarCell>
                                    <CalendarDaysText>{day}</CalendarDaysText>
                                </CalendarCell>
                            )
                        })
                    }

                    {
                        Array.from({ length: prefixDays }).map((_, index) => {
                            return(
                                <CalendarCell key={index} />
                            )
                        })
                    }

                    {
                        Array.from({ length: numDays }).map((_, index) => {
                            const num = index + 1;
                            const isCurrentDate = num === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear()
                            const checkRdvDate = new Date(date.getFullYear(), date.getMonth(), num +1);
                            const isEventDate = rdvDates.includes(checkRdvDate.toISOString().slice(0, -14));

                            return(
                                <CalendarCell key={index} isActive={isCurrentDate } isEvent= {isEventDate} >

                                    <CalendarNumsText isActive={isCurrentDate}>{num}</CalendarNumsText>
                                </CalendarCell>
                            )
                        })
                    }

                    {
                        Array.from({ length: suffixDays }).map((_, index) => {
                            return(
                                <CalendarCell key={index} />
                            )
                        })
                    }

                </CalendarWrapper>
            </CalendarContainer>
        </>
    )
}

export default Calendar;