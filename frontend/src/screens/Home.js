import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const Home = () => {
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
