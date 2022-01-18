import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/get/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Our Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={10} md={8} lg={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
