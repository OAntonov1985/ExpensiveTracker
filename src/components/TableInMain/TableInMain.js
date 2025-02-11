import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { totalSumFunc } from "../../helpers/totalSum";
import IconsBlock from '../IconsBlock/IconsBlock';


export default function TableInMain({ expenses, triggered, editItem }) {
    let totalSum = 0;
    if (expenses && expenses.length > 0) {
        totalSum = totalSumFunc(expenses);
    };

    return (
        <div>
            {expenses && expenses.length > 0 ? <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Назва</TableCell>
                            <TableCell>Категорія</TableCell>
                            <TableCell>Сума</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Іконки</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenses.map((expense, index) => (
                            <TableRow key={index}>
                                <TableCell>{expense.name}</TableCell>
                                <TableCell>{expense.category}</TableCell>
                                <TableCell>{expense.sum} грн</TableCell>
                                <TableCell>{expense.date}</TableCell>
                                <TableCell><IconsBlock id={index} triggered={triggered} editItem={editItem} /></TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={5} align="right">
                                <strong>Всього:</strong> {totalSum} грн
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer> : <h2>Ви ще не додали жодного витрати</h2>}
        </div>

    );
};


