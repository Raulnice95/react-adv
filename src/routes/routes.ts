import { lazy } from "react";
// import { Route } from "react-router-dom";
import NoLazy from "../01-lazyload/pages/NoLazy";
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
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        // De esta manera se reenderiza nested routes hijas. Se gestionara con otro router
        to: '/lazyload/',
        path: '/lazyload/*',
        // Component: LazyPage1,
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        // Component: LazyPage2,
        Component: NoLazy,
        name: 'No Lazy'
    },
];