import { MainContainer } from './Main.style';
import TableInMain from "../TableInMain/TableInMain";
import { useState } from 'react';
import deleteItemFromData from '../../helpers/deleteItemFromData';
import HeaderButtonsInMain from '../HeaderButtonsInMain/HeaderButtonsInMain';
import ModalWindow from '../ModalWindow/ModalWindow';
import { newExpense, categoriesList } from '../../constants/constants';
import useLocalStorage from '../../hooks/useLocalStorage';



export default function Main() {
    const [expenses, setExpenses] = useLocalStorage([]);
    const [filteredExpenses, setFilteredExpenses] = useLocalStorage(expenses);

    // edit expense
    const [editetData, setEditetData] = useState(newExpense);
    const [editetItemIndex, setEditetItemIndex] = useState(null);

    // modal window
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // delete 1 item from expenses
    function setEditExpenseArr(id) {
        const newArr = deleteItemFromData(expenses, id);
        setExpenses([...newArr]);
        setFilteredExpenses([...newArr]);
    };

    // filtering expenses
    function filteringData(category) {
        if (category === "Всі витрати") {
            setFilteredExpenses(expenses);
            return;
        };
        const newData = expenses.filter(item => item.category === category);
        setFilteredExpenses(newData);
    };

    function editItem(id) {
        setEditetItemIndex(id);
        const data = expenses[id];
        setEditetData(data);
        handleOpen();
    };

    // save changes in edited expense
    function seveChanges(newData) {
        setExpenses([...newData]);
        setFilteredExpenses([...newData]);
        setEditetData(newExpense);
        setEditetItemIndex(null);
        handleClose();
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditetData((prev) => ({
            ...prev,
            [name]: name === "sum" ? Number(value) : value,
        }));
    };

    return (
        <MainContainer>
            <ModalWindow open={open} handleOpen={handleOpen} handleClose={handleClose} editetData={editetData} handleChange={handleChange} categories={categoriesList} editetItemIndex={editetItemIndex} seveChanges={seveChanges} />
            <HeaderButtonsInMain categories={categoriesList} filteringData={filteringData} handleOpen={handleOpen} />
            <TableInMain expenses={filteredExpenses} setEditExpenseArr={setEditExpenseArr} editItem={editItem} />
        </MainContainer>
    )
}