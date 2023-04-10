import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    id:'1',
    title: 'Coffee Mug - Card',
    img: 'coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>
            {/* Se pueden definir los componentes de dos maneras */}
            {/* Para que sea la imagen la imagen del producto y el titulo sea el titulo del producto, se pasan las props a traves del createContext */}
            <ProductCard product={ product }>
                <ProductCard.Image />
                <ProductCard.Title title={"Hola Mundo"}/>
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product }>
                <ProductImage />
                <ProductTitle/>
                <ProductButtons />
            </ProductCard>
        </div>
            
    </div>
  )
}
