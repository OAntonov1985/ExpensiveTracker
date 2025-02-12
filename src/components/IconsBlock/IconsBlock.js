import React from 'react';
import { ItemIcon, ItemContainer } from './IconsBlock.style';

export default function IconsBlock({ id, setEditExpenseArr, editItem }) {

    function handleFunc(e) {
        setEditExpenseArr(+e.target.id);
    }

    return (
        <ItemContainer>
            <ItemIcon onClick={(e) => editItem(+e.target.id)} id={id}>
                <img src="/icons/icons8-edit.svg" alt="edit icon" style={{ width: "24px", height: "24px" }} id={id} />
            </ItemIcon>
            <ItemIcon onClick={(e) => handleFunc(e)} id={id}>
                <img src="/icons/trash.svg" alt="delete" style={{ width: "24px", height: "24px" }} id={id} />
            </ItemIcon>
        </ItemContainer>
    );
}
