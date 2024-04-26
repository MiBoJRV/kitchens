import {StyledH3} from "./Styles.jsx";

export const Heading3 = ({title, className, children,}) => {
    return (
        <StyledH3 className={className}>
            {title && title}
            {children && children}
        </StyledH3>
    )
}