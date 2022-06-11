import classNames from 'classnames'
import React, { useRef } from 'react'
import styles from '../styles/input.module.css'
import Elevation from './elevation';
import Overlay from './overlay';
import Surface from './surface';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}



export default function Input(props: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null);

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

    return (
        <div className={classNames(styles.inputfield, props.className)}>
            <Elevation level='low' />
            <input {...props} className={styles.input} placeholder={undefined} onChange={inputValueChanged} ref={inputRef} />
            <span className={styles.placeholder}>{props.placeholder}</span>
            <Overlay className={styles.overlay}/>
        </div>
    )
}