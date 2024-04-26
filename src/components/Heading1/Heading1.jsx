import {StyledH1} from "./Styles.jsx";

export const Heading1 = ({title, className, children}) => {
    return (
        <StyledH1 className={className}>
            {title && title}
            {children && children}
        </StyledH1>
    )
}