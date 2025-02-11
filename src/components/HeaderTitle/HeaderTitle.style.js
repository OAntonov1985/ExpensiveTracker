import { styled } from '@mui/material';
import { Colors } from '../../constants/constants';



export const HeaderTitleContainer = styled('div')(() => ({
    maxWidth: "65%",
    display: "flex",
    gap: 12,
}));

export const TitleText = styled('h1')(() => ({
    fontSize: 40,
    fontWeight: 700,
    color: Colors.Blue
}));

export const TitleTextSpan = styled('span')(() => ({
    color: Colors.PurpleDark
}));

