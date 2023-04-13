import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
    title?: string;
    className?:string;
    style?: CSSProperties;
}

export const ProductTitle = ( { title, className, style } : Props ) => {

    const {product} = useContext( ProductContext )
    // Si viene vacio el titulo en las props, cogerá el titulo por defecto definido en el ShoppingPage.tsx
    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            { title ? title : product.title }
        </span>
    )
} 