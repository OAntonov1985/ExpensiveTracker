import styled from '@emotion/styled/macro';
import { Colors } from '../../constants/constants';


export const HeaderContainer = styled('header')(() => ({
    height: 200,
    backgroundColor: Colors.Gray700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));