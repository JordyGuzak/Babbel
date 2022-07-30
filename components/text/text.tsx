import styles from "components/text/text.module.css"

type Emphasis = 'high' | 'medium' | 'low'

interface TextProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
    emphasis?: Emphasis
}

const getEmphasisClass = (emphasis: Emphasis) => {
    switch(emphasis) {
        case 'low':
            return styles.low
        case 'medium':
            return styles.medium
        default:
            return styles.high
    }
}

export default function Text( {emphasis, children, ...props} : TextProps) {

    return (
        <span className={getEmphasisClass(emphasis || 'high')} {...props}>{children}</span>
    )
}