import React,{Fragment} from "react"
import { Button,Row,Col } from "react-bootstrap"
import './cart.css'
import { useSelector,useDispatch } from "react-redux"
import { addItem,removeItem} from "../../store/cartReducer"

const Cart=()=>{

  const showCart=useSelector((state)=>state.cart.showCart)
  const cart=useSelector((state)=>state.cart.cart)
  const dispatch=useDispatch()
  console.log(cart)
 
    return(
       <Fragment>
        {showCart && (
                     <div className="cart">
                        {cart.length>0?(
                              <h5>Your Shopping Cart</h5>
                        ):(
                            <h5>Your Shopping Cart Is Empty</h5>
                        )}
                         
                        {cart.length>0 && cart.map((cart)=>(
                                <>
                                <Row id={cart.id} className="mb-3 mt-3">
                                 <Col md={8}>{cart.title}</Col>
                                 <Col>${cart.price}</Col>
                                </Row>
                                <Row>
                                 <Col  md={8}>+{cart.quantity}</Col>
                                 <Col>
                                    <Button onClick={()=>dispatch(addItem(cart))} size="sm" style={{backgroundColor:"grey"}} >+</Button>
                                    <Button onClick={()=> dispatch(removeItem(cart))} style={{marginLeft:'10px',backgroundColor:"grey"}} size="sm">-</Button>
                                </Col>
                                </Row>
                                </>

                             ))}
                   </div>
        )}
       </Fragment>
    )}

export default Cart