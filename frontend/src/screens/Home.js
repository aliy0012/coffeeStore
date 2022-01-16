import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../comonents/products'

const Home = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
          {products.map(product => (
            <Col sm={11} md={6} lg={5} xl={3}>
              <h3>{product.name}</h3>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Home
