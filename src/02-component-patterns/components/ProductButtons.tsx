import { CSSProperties, useCallback, useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ( { className, style }: Props  ) => {
    // TODO: maxCount, puede que venga o no. Coger del Provider con el useContext()
    const { counter, increaseBy, maxCount } = useContext( ProductContext )

    const isMaxReached = useCallback(
        // Si no existe maxCount que devulva bool
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
    return (
        <div 
            className={`${styles.buttonsContainer} ${ className }`}
            style={style}
        >
            <button 
                className={ styles.buttonMinus} 
                onClick={ () => increaseBy( -1 ) }
            >-</button>
            <div 
                className={styles.countLabel}
            >{ counter }</div>
            <button 
                className={ `${ styles.buttonAdd} ${isMaxReached() && styles.disable }`} 
                onClick={ () => increaseBy( +1 ) }
            >+</button>
        </div>
    )
}