import React, { useState } from 'react';
import { phonesData } from './Products.data'; // Ensure the path is correct
import { Card, Button } from 'react-bootstrap';

const Products = () => {
  const [items, setItems] = useState(phonesData); // Initialize with phonesData
  const decQty=(id)=> {
    const newItem=items.map((item)=>
    item.id===id && item.qty>1 ?{...item,qty:item.qty-1}:item
  );
  setItems(newItem)
  };

  const incQty=(id)=> {
    const newItem=items.map((item)=>
    item.id===id ?{...item,qty:item.qty+1}:item
  );
  setItems(newItem)
  };


  return (
    <div >
      <h1 className='bg-info text-white'>Products</h1>
      {items.map(item => (
        <div className="d-inline-flex">
        <Card key={item.id} className="shadow p-3 mb-2 bg-body-tertiary rounded" style={{ width: '13rem' }}>
          <Card.Img
          style={{ height: '13rem' }}
          className='p=2'
           variant="top" src={require(`./Img/${item.image}.jpg`)} alt={item.model} />
          <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <p className='bg-info'>Price: ₹{item.price}</p>
            <div>
              <p>Qty:
                <Button onClick={()=>decQty(item.id)} className='m-1'>-</Button>{item.qty}
                <Button  onClick={()=>incQty(item.id)}className='m-1'>+</Button>
              </p>
            </div>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
