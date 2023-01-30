import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RestaurantList() {
    const [allrestaurant,setAllrestaurant]=useState([])

    //function to api call for datas inside json file
    const getrestaurentdata=async()=>{
        await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
          
            setAllrestaurant(result.restaurants)
        

        })
    })
}

    // console.log(allrestaurant);

      useEffect(()=>{
        getrestaurentdata()
      },[])
  return (
    <Row>
       {
        allrestaurant.map(item=>(
            <RestCard data={item} />
        ))
       }
    </Row>
  )
}

export default RestaurantList