import { ReactElement } from 'react';

export interface ProductCardProps {
    children?: ReactElement | ReactElement[]; 
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

// Para que todos los hijos tengan acceso a las props, se utilioza un componente Provider
// Para controlar a que propiedades tienen acceso los hijos definimos una interfaz
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

// Interfaces de los componentes hijos
export interface ProductImageProps {
    img?: string;
}

export interface ProductTitleProps {
    title?: string;
}

export interface ProductButtonsProps {
    counter: number;
    increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title: ({ title }: ProductTitleProps) => JSX.Element,
    Image: ({ img }: { img?: string | undefined;}) => JSX.Element,
    Buttons: () => JSX.Element
}