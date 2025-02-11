import { MainContainer } from './Main.style';
import TableInMain from "../TableInMain/TableInMain";
import { useEffect, useState } from 'react';
import deleteItemFromData from '../../helpers/deleteItemFromData';
import HeaderButtonsInMain from '../HeaderButtonsInMain/HeaderButtonsInMain';
import ModalWindow from '../ModalWindow/ModalWindow';
import { newExpense } from '../../constants/constants';



export default function Main() {
    const expensesData = JSON.parse(localStorage.getItem("expenses"));
    let categoriesData = [];
    if (expensesData && expensesData.length > 0) {
        expensesData.forEach(item => categoriesData.push(item.category));
    }
    categoriesData = [...new Set(categoriesData)];
    const [expenses, setExpenses] = useState(expensesData);
    const [getExpTrigger, setGetExpTrigger] = useState(0);
    const [categories, setCategories] = useState(categoriesData);
    const [editetData, setEditetData] = useState(newExpense);
    const [editetItemIndex, setEditetItemIndex] = useState(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function triggered(id) {
        deleteItemFromData(expenses, id);
        setGetExpTrigger(id)
    };

    function filteringData(category) {
        if (category === "Всі витрати") {
            setExpenses(expensesData);
            return;
        };
        const newData = expensesData.filter(item => item.category === category);
        setExpenses(newData);
    };

    function editItem(id) {
        setEditetItemIndex(id);
        const data = expenses[id];
        setEditetData(data);
        handleOpen();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditetData((prev) => ({
            ...prev,
            [name]: name === "sum" ? Number(value) : value,
        }));
    };

    function triggerToRender(id) {
        setGetExpTrigger(id)
    };

    function resetIditetDate() {
        setEditetData(newExpense);
        setEditetItemIndex(null);
    }


    useEffect(() => {
        const expenses = JSON.parse(localStorage.getItem("expenses"));
        setExpenses(expenses);
        console.log(getExpTrigger)
    }, [getExpTrigger])

    return (
        <MainContainer>
            <ModalWindow open={open} handleOpen={handleOpen} handleClose={handleClose} editetData={editetData} handleChange={handleChange} categories={categories} editetItemIndex={editetItemIndex} triggerToRender={triggerToRender} resetIditetDate={resetIditetDate} />
            <HeaderButtonsInMain categories={categories} filteringData={filteringData} handleOpen={handleOpen} />
            <TableInMain expenses={expenses} triggered={triggered} editItem={editItem} />
        </MainContainer>
    )
}