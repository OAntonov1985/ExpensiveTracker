import { TitleText, HeaderTitleContainer, TitleTextSpan } from './HeaderTitle.style';

export default function HeaderTitle() {
    return (
        <HeaderTitleContainer>
            <TitleText >Expensive
                <TitleTextSpan>Tracker</TitleTextSpan>
            </TitleText>
        </HeaderTitleContainer>
    )
}