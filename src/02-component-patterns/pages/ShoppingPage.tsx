import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

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
            <ProductCard product={ product } className="bg-dark text-white">
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title className="text-bold"/>
                <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>

            <ProductCard product={ product } className="bg-dark text-white">
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold"/>
                <ProductButtons className="custom-buttons"/>
            </ProductCard>

            <ProductCard product={ product } style={{backgroundColor:'red'}}>
                <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
                <ProductTitle style={{fontWeight: 'bold'}}/>
                <ProductButtons style={{ display:"flex", justifyContent:"end" }}/>
            </ProductCard>
        </div>
            
    </div>
  )
}
