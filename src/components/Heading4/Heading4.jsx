import {StyledH4} from "./Styles.jsx";

export const Heading4 = ({title, className, children,}) => {
    return (
        <StyledH4 className={className}>
            {title && title}
            {children && children}
        </StyledH4>
    )
}