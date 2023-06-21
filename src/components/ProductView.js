import React, { useEffect,  } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';
import { getData } from '../cartAction';
import { useDispatch, useSelector } from 'react-redux';



function ProductView() {

    
const result=useSelector(state=>state.reducer1)
const {cartList}=result

const dispatch=useDispatch()


    const params = useParams()
    const singleProduct = (cartList.find(i => i.id == params.id))

    useEffect(() => {
       dispatch(getData)
    }, [])
    return (
        <div className='container p-5 m-5'>

            {

singleProduct?(
    <Row>

        <Col lg={6} md={12} sm={12} xl={6}>
         <Image className='w-100 p-5' style={{height:'500px'}} src={singleProduct.image} rounded/>
        </Col>

        <Col lg={6} md={12} sm={12} xl={6} className='p-4 mt-2'  >

            <div >
            <h1 >{singleProduct.title}</h1>
   
            <h5 className='mt-4'>Category : {singleProduct.category}</h5>
            <h4 className='mt-4'>Price :$ {singleProduct.price}</h4>
            <h6 className='mt-4'><strong>Description </strong>: {singleProduct.description}</h6>
            <h4 className='mt-4'>Rating : {singleProduct.rating.rate}</h4>

<div className='btn btn-dark'>Add to Cart</div>
</div> 
     


        </Col>


    </Row>
    ):null




            }



        </div>
    )
}

export default ProductView