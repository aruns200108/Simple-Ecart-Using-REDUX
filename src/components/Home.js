import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../cartAction';
import "./home.css"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Home() {

  const result = useSelector(state => state.reducer1)
  const { cartList } = result

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getData)
    // getCart()
  }, [])

  return (
    <div className='container '>
      <div className='row '>
        {
          cartList.map(i => (


            <MDBCol sm={12} md={6} lg={3} className="mb-4 mt-5  ">
              <Link to={`productview/${i.id}`} style={{ textDecoration: 'none' }}>
                <MDBCard id='d' className='w-100 h-100  ' >
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src={i.image}
                      fluid
                      className="w-100"
                      style={{ height: 190 }}
                    />
                    <a href="#!">

                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset text-decoration-none">
                      <h5 className="card-title mb-3">{i.title}</h5>
                    </a>
                    <a href="#!" className="text-reset text-decoration-none">
                      <p>{i.category}</p>
                    </a>
                    <h6 className="mb-3">
                      {/* <s>$61.99</s> */}
                      <strong className="ms-2 text-danger">$ {i.price}</strong>
                    </h6>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>


          ))
        }


      </div>
    </div>
  )
}

export default Home