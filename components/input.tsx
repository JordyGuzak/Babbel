import classNames from 'classnames'
import React, { useRef } from 'react'
import styles from '../styles/input.module.css'
import Elevation from './elevation';
import Overlay from './overlay';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export default function Input(props: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);

    const inputValueChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const element = inputRef.current;
    
        if (!element)
            return;
    
        if (element.value)
            element.classList.add(styles.filled)
        else
            element.classList.remove(styles.filled)

        if(props.onChange)
            props.onChange(evt)
    }

    const onFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
        rootRef.current?.classList.add(styles.focus)
    }

    const onBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
        rootRef.current?.classList.remove(styles.focus)
    }

    return (
        <div className={classNames(styles.inputfield, props.className, 'selectable')} ref={rootRef}>
            <Elevation className={styles.elevation} level='low' />
            <input {...props} className={styles.input} placeholder={undefined} onChange={inputValueChanged} onFocus={onFocus} onBlur={onBlur} ref={inputRef} />
            <span className={styles.placeholder}>{props.placeholder}</span>
            <Overlay className={styles.overlay}/>
        </div>
    )
}