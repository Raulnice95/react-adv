import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

import { ProductTitleProps } from "../interfaces/interfaces";


export const ProductTitle = ( { title } : ProductTitleProps ) => {

    const {product} = useContext( ProductContext )
    // Si viene vacio el titulo en las props, cogerá el titulo por defecto definido en el ShoppingPage.tsx
    return (
        <span className={ styles.productDescription }>{ title ? title : product.title }</span>
    )
} 