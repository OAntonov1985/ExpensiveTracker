import { ButtonContainer } from './HeaderButtonsInMain.style';
import { Button, Select, InputLabel, MenuItem, FormControl } from '@mui/material';

export default function HeaderButtonsInMain({ categories, filteringData, handleOpen }) {
    return (
        <ButtonContainer>
            <Button variant="outlined" onClick={handleOpen}>Створити</Button>

            <FormControl fullWidth sx={{ maxWidth: 200 }}>
                <InputLabel id="demo-simple-select-label"
                    sx={{ color: "white" }}
                >Фільтр</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Категорія"
                    sx={{ color: "white", "& .MuiSelect-icon": { color: "white" } }}
                    onChange={(e) => filteringData(e.target.value)}
                >
                    <MenuItem key={777} value="Всі витрати">Всі витрати</MenuItem>
                    {categories?.map((category, index) => (
                        <MenuItem key={index} value={category}>{category}</MenuItem>
                    )) || <MenuItem disabled>Завантаження...</MenuItem>}
                </Select>
            </FormControl>
        </ButtonContainer>
    )
}
