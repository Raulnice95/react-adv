import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void ;
    value?: number;
}

export const useProduct = ( {onChange, product, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState( value )


    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0)

        setCounter( newValue )

        // Cuando se modifique counter, disparar onChange
        // Para evitar que venga como undefined el onChange como undefined(), revisamos que tenemos valor
        onChange && onChange({count: newValue, product });
    }

    // Para que actualice el value cuando se mande al añadir un producto al captureRejectionSymbol, hay que hacer un useEffect
    useEffect(() => {
      setCounter( value )

    }, [ value ])
    

    return { counter, increaseBy }
}


