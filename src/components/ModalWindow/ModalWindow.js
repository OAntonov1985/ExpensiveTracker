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

export default function ModalWindow({ open, handleClose, categories, editetData, handleChange, editetItemIndex, seveChanges, expenses }) {

    function saveEditetData() {
        const expensesData = expenses || [];

        if (!editetData.category) {
            editetData.category = categories[0];
        }

        if (editetItemIndex === null || editetItemIndex === -1) {
            expensesData.push(editetData);
        } else if (editetItemIndex >= 0 && editetItemIndex < expensesData.length) {
            expensesData[editetItemIndex] = editetData;
        };
        seveChanges(expensesData);
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
                    <select
                        name="category"
                        value={editetData.category || categories[0] || ""}
                        onChange={handleChange}>
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))
                        ) : (
                            <option disabled>Завантаження...</option>
                        )}
                    </select>

                    <label>
                        <Input type="number" name="sum" defaultValuevalue={editetData.sum ? editetData.sum : 0} onChange={handleChange} />
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







