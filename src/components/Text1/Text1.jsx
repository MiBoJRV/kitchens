import {StyledText} from "./Styles.jsx";

export const Text1 = ({title, className, children}) => {
    return (
        <StyledText className={className}>
            {title && title}
            {children && children}
        </StyledText>
    )
}