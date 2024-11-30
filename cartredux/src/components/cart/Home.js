import React,{Fragment,useEffect} from "react"
import {Button,Row,Col } from "react-bootstrap"
import Header from "../layout/Header"
import './cart.css'
import { useSelector,useDispatch} from "react-redux"
import { addItem } from "../../store/cartReducer"
import Cart from "./cart"
import Notification from "../../UI/Notification"
import { fetchCartData,sendCartData,sendR } from "../../store/cart-action"

const Product=[
    {id:1,title:'Bag',Desc:'Durable',price:500},
    {id:2,title:'Mobile',Desc:'Samsung',price:15000},
    {id:3,title:'Watch',Desc:'Sonata',price:5000},
    {id:4,title:'Fan',Desc:'godrej',price:3000},
]

const Home=()=>{

  const showCart=useSelector((state)=>state.cart.showCart)
  const notification=useSelector((state)=>state.ui.notification)
  const dispatch=useDispatch()

  

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  

    return(
       <Fragment>
         {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
        <Header></Header>
        <div className="main">
        {showCart && (
                     <Cart></Cart>
        )}
        <center><h5>Buy Your Favourite Product</h5></center>
        <center><div className="product">
            {Product && ( Product.map((product)=>(
                < >
                <Row id={product.id} className=" mt-3 mb-2" style={{marginLeft:'0px'}}>
                <Col md={4} style={{marginLeft:'10px'}}>{product.title}</Col>
                <Col md={2} style={{marginLeft:'190px',fontWeight:'bold'}}>${product.price}</Col>
                </Row>
                <Row className="mb-1">
                <Col  md={5} >{product.Desc}</Col>
                <Col  md={4}  style={{marginLeft:'120px'}}>
                <Button variant="dark" size="sm"  onClick={()=>dispatch(sendCartData(product))}>Add To Cart</Button>
                </Col>
                </Row>
                </>

            )) 
            )}   
        </div>
        </center>
              </div>
       </Fragment>
    )}

export default Home