import React,{Fragment} from "react"
import { Container,Button,Row,Col } from "react-bootstrap"
import Header from "../layout/Header"
import './cart.css'

const Cart=()=>{
    return(
       <Fragment>
        <Header></Header>
              <div className="cart">
                <h4>Your Shopping Cart</h4>
                   <Row>
                    <Col md={8}> Test Item</Col>
                    <Col>$ 18</Col>
                   </Row>
                   <Row>
                    <Col  md={7}> + 3</Col>
                    <Col>
                    <Button size="sm">+</Button>
                    <Button size="sm">-</Button>
                    </Col>
                   </Row>
              </div>
       </Fragment>
    )
}

export default Cart