import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "10px"
};

export default function ModalWindow({ open, handleClose, categories, editetData, handleChange, editetItemIndex, setGetExpTrigger }) {

    function saveEditetData() {
        const expensesData = JSON.parse(localStorage.getItem("expenses")) || [];
        console.log(editetData)

        if (editetItemIndex < 0 || editetItemIndex >= expensesData.length) {
            console.warn("Некоректний індекс");
            return;
        }

        expensesData[editetItemIndex] = editetData;
        localStorage.setItem("expenses", JSON.stringify(expensesData));
        handleClose();
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <label>
                        <Input type="text" name="name" value={editetData.name} onChange={handleChange} />
                    </label>
                    <select name="category" value={editetData.category} onChange={handleChange}>
                        {categories?.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        )) || <option disabled>Завантаження...</option>}
                    </select>
                    <label>
                        <Input type="number" name="sum" value={editetData.sum} onChange={handleChange} />
                    </label>
                    <label>
                        <Input type="string" name="date" value={editetData.date} onChange={handleChange} />
                    </label>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button onClick={handleClose}>Відмінити</Button>
                        <Button onClick={saveEditetData}>Зберегти</Button>
                    </div>
                </Box>

            </Modal>
        </div>
    );
}







