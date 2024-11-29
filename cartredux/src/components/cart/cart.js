import React,{Fragment} from "react"
import { Container,Button,Row,Col } from "react-bootstrap"
import Header from "../layout/Header"
import './cart.css'
import { useSelector } from "react-redux"

const Cart=()=>{

  const showCart=useSelector((state)=>state.cart.showCart)
  console.log(showCart)

    return(
       <Fragment>
        <Header></Header>
        <div className="main">
        {showCart && (
                     <div className="cart">
                     <h5>Your Shopping Cart</h5>
                        <Row className="mb-3">
                         <Col md={8}> Test Item</Col>
                         <Col>$ 18</Col>
                        </Row>
                        <Row>
                         <Col  md={8}> + 3</Col>
                         <Col>
                            <Button size="sm" style={{backgroundColor:"grey"}} >+</Button>
                            <Button style={{marginLeft:'10px',backgroundColor:"grey"}} size="sm">-</Button>
                        </Col>
                        </Row>
                        
                   </div>
        )}
        <center><h5>Buy Your Favourite Product</h5></center>
        <center><div className="product">
            <Row className="ml-2 mt-3 mb-2 text-align-left">
                <Col md={4} style={{marginLeft:'20px'}}>Test</Col>
                <Col md={2} style={{marginLeft:'190px',fontWeight:'bold'}}>$6.00</Col>
            </Row>
            <Row className="mb-1">
                <Col  md={{ span: 4, offset: 1 }} >First Product</Col>
            </Row>
                <Button variant="dark" size="sm" className="d-flex justify-content-rightt">Add To Cart</Button>

        </div>
        </center>
              </div>
       </Fragment>
    )}

export default Cart