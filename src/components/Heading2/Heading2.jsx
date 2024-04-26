import {StyledH2} from "./Styles.jsx";

export const Heading2 = ({title, className, children}) => {
    return (
        <StyledH2 className={className}>
            {title && title}
            {children && children}
        </StyledH2>
    )
}