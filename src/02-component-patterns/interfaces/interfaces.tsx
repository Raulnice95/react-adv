import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

// Para que todos los hijos tengan acceso a las props, se utilioza un componente Provider
// Para controlar a que propiedades tienen acceso los hijos definimos una interfaz
export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

// No desestructuramos las propiedades y por eso lo dejamos sin desestructurar como Props
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}
export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}