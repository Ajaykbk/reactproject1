import React from 'react'
import { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({review}) {
    const [open, setOpen] = useState(false);
  return (
    <>
         <Button className='mt-2'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                review.map(data=>(

                   <div>
                      <Card body style={{ width: '400px' }}>
                          <h3>{data.name} {data.date}</h3>
                          <h6>{data.rating}</h6>
                          <p>{data.comments}</p>
                     </Card>
                   </div>

                ))
            }
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Reviews