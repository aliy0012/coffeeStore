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
            <Col sm={11} md={6} lg={5} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Home
