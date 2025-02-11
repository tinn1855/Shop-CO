// import { useEffect } from "react"

// export function SectionProduct({type}) {
//     const [products, setProducts] = useState([])
//     useEffect((

//     ) => {
//     async function fetchProducts(type) {
//        if(type === 'new-arrival') {
//         const response = await fetch(...apiA, type)
//         const products = response.json()
//         setProducts(products)

//        }

//        if(type === 'top-selling') {
//         const response = await fetch(...apiB, type)
//         const products = response.json()
//         setProducts(products)

//        }

//        if(type === 'relative-selling') {
//         const response = await fetch(...apiB, type)
//         const products = response.json()
//         setProducts(products)

//        }
//     }

//     fetchProducts(type)
//     })

//     return <>
//         <h2>{type}</h2>
//         <GridProducts products={products} />
//         {type !== 'related-products' && <Button>View all</Button>}
//     </>
// }