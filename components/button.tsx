import { StyledButton } from "../styles"

export interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string,
    variant?: "default" | "primary" | "success" | "warning" | undefined,
}

export default function Button({children, variant }: ButtonProps) {
    return (
        <StyledButton variant={variant}>
            {children}
        </StyledButton>
    )
}

