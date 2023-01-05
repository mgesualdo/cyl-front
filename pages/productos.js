import Head from 'next/head'
import ProductList from '../components/entities/products/ProductsList'

const ProductosPage = () => {
  return (
    <>
      <Head>
        <title>Productos</title>
      </Head>
      <ProductList />
    </>
  )
}

export default ProductosPage
