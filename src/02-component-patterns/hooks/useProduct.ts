import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';
import { count } from "console";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void ;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    // Para controlar si el componente ya ha sido montado, y asi no se dispare el useEffect al montar el componente
    const isMounted = useRef(false) 

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)
        if ( initialValues?.maxCount && initialValues?.maxCount >= newValue){
            setCounter( newValue )
    
            // Cuando se modifique counter, disparar onChange
            // Para evitar que venga como undefined el onChange como undefined(), revisamos que tenemos valor
            onChange && onChange({count: newValue, product });
        }
    }
    
    const reset = () => {
        setCounter( initialValues?.count ||value )
    }
    // Para que actualice el value cuando se mande al añadir un producto al captureRejectionSymbol, hay que hacer un useEffect
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter( value );
    }, [ value ])

    // Cuando el componente se monta, se vuelve true y ya el useEffect de arriba empieza a utilizar el setCounter
    

    return { 
        counter, 
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }
}


