import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {

    // Lo que dice la interfaz de useState es que va a trabajar con un objeto con un key de tipo 
    // string (valor no definido de keys) y su value es un ProductInCart. Por eso ya no hara falta 
    // inicializarlo (valor a inicializar -> '1': {...product, count: 10})
    const [shoppingCart, setShoppingCart] = useState<{ [key:string ]: ProductInCart }>({ })

    const onProductCountChange = ({count, product }: {count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            // Forma 1: de esta manera no se mantiene el estado dentro del hook. Lo manejamos aqui
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0}

            if ( Math.max( productInCart.count + count, 0) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            return rest


            // Forma simple de hacerlo
            // Para eliminar un registro de un objeto por desestructuracion y propiedades conmutadas
            // if (count === 0){
            //     // desestructuramos el objeto para, por ejemplo, avisos de borrado (¿estas seguro que quieres eliminar este objeto?)
            //     // devolvemos el resto del objeto como rest
            //     const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            //     // Tambien se podria hacer de esta manera
            //     // delete ({...oldShoppingCart})[product.id]
            //     return rest
            // }

            // // Spread para no mutar directamente el counter
            // return {
            //     ...oldShoppingCart,
            //     [product.id]: {...product, count}
            // }
        })
    }

    return {shoppingCart, onProductCountChange}
}
