import {StyledSubTitle} from "./Styles.jsx";

export const SubTitle = ({title, className, children}) => {
    return (
        <StyledSubTitle className={className}>
            {title && title}
            {children && children}
        </StyledSubTitle>
    )
}