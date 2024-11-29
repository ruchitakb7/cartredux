import React,{Fragment} from "react"
import { Button, Container,Nav ,Navbar} from "react-bootstrap"
import './header.css'
import { Link } from "react-router-dom"
import { toggleCart } from "../../store/cartReducer"
import { useDispatch,useSelector } from "react-redux"


const Header=()=>{

   const dispatch=useDispatch()

   const showCart=useSelector((state)=>state.cart.showCart)
   const Cart=useSelector((state)=>state.cart.cart)
   const totalQuantity=useSelector((state)=>state.cart.totalQuantity)
  console.log(showCart)

    return(<Fragment>
    
        <div className="header d-flex align-items-center fs-4 fw-bold text-white">
            <Container className="d-flex align-items-center justify-content-between ">
             <Container  className="w-25  mx-2 d-flex justify-content-center">CartRedux</Container>
             <Container  className="ms-auto w-25  d-flex justify-content-center">
                <Navbar className="d-flex align-items-center justify-content-between " >
                  <Nav.Link  as={Link} to="/cart">
                     <Button variant="outline-info" onClick={()=>dispatch(toggleCart())} size="sm">CartItems 
                      <span style={{marginLeft:"10px"}}>{totalQuantity}</span>  </Button>
                    
                  </Nav.Link>
                 
                </Navbar>
             </Container>
            </Container>
        </div>
        
       
        
    </Fragment>)
}

export default Header