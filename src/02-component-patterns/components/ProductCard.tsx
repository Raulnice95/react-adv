import { CSSProperties, ReactElement, createContext} from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    //children?: ReactElement | ReactElement[]; 
    children: (args:ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange , product, value, initialValues } );

    return (
        <Provider value={{ 
            counter, 
            increaseBy, 
            maxCount, 
            product
        }}>
            {/* Para utilizar diferentes estilos por comillas francesas */}
            <div 
                className={`${ styles.productCard } ${ className }`}
                style={ style }
            >

                {/* Si los children es una funcion de JSX y hay que ejecutarla */}
                {/* De esta manera puedo exponer todos los argumentos que quiera del componente */}
                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset 
                }) }

                {/* <ProductImage img={ product.img } />

                <ProductTitle title={ product.title } />

                <ProductButtons counter={ counter } increaseBy={ increaseBy }/> */}

            </div>
        </Provider>
    )
}

