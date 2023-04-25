import { CSSProperties, ReactElement, createContext} from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[]; 
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value  }: Props) => {

    const { counter, increaseBy } = useProduct( { onChange , product, value} );

    return (
        <Provider value={{ counter, increaseBy, product }}>
            {/* Para utilizar diferentes estilos por comillas francesas */}
            <div 
                className={`${ styles.productCard } ${ className }`}
                style={ style }
            >

                { children }

                {/* <ProductImage img={ product.img } />

                <ProductTitle title={ product.title } />

                <ProductButtons counter={ counter } increaseBy={ increaseBy }/> */}

            </div>
        </Provider>
    )
}

