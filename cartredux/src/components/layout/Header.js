import React,{Fragment} from "react"
import { Button, Container,Nav ,Navbar} from "react-bootstrap"
import './header.css'
import { Link } from "react-router-dom"
import { toggleCart } from "../../store/cartReducer"
import { useDispatch } from "react-redux"


const Header=()=>{

   const dispatch=useDispatch()

    return(<Fragment>
        <div className="header d-flex align-items-center fs-4 fw-bold text-white">
            <Container className="d-flex align-items-center justify-content-between ">
             <Container  className="w-25  mx-2 d-flex justify-content-center">CartRedux</Container>
             <Container  className="ms-auto w-25  d-flex justify-content-center">
                <Navbar className="d-flex align-items-center justify-content-between " >
                  <Nav.Link  as={Link} to="/cart">
                     <Button onClick={()=>dispatch(toggleCart())} size="sm">CartItems</Button>
                    
                  </Nav.Link>
                 
                  <Container className="fs-6 ">8</Container>
                </Navbar>
             </Container>
            </Container>
        </div>
    </Fragment>)
}

export default Header