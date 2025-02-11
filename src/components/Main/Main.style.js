import { styled } from '@mui/material';
import { Colors } from '../../constants/constants';


export const MainContainer = styled('main')(() => ({
    paddingTop: 90,
    backgroundColor: Colors.Gray600,
    padding: 50,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    flex: 1,

}));

