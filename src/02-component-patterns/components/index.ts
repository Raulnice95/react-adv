import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from "../interfaces/interfaces";

// Archivo donde embebe todas las importaciones a realizar de los componentes
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from './ProductTitle';

// Para que en el componente padre se vea la relacion con sus componentes hijos
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCard;