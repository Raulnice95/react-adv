import { lazy } from "react";
import { Route } from "react-router-dom";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    // Para que nuestra interfaz reconozca tanto los lazyload como los JSX.Element que es la carga estatica por defecto
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// El metodo lazy de react para hacer un lazy load de los componentes. Para hacer el lazyload hay que hacerlo por JS, como se escribe en los imports de abajo. 
// Es necesario en cada componente un export default de cada uno.
// Pueden cargarse componentes, unos por lazyload y otro de manera estatica como un JSX.Element
// Si lo hacemos por JSON, al dejar encima el cursor sobre Lazy1, vemos de que tipo escape, y por ello habra que controlarlo en la interfaz
// webpackChunkName es para renombrar el pedacito de aplicacion que se carga (se puede ver ese JS al Inspeccionar la pagina en Fuentes)
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        // Component: LazyPage1,
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        // Component: LazyPage2,
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        // Component: LazyPage3,
        Component: Lazy3,
        name: 'Lazy-3'
    }
];