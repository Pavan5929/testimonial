import React, { useState, useEffect } from 'react';
import Title from '../Components/Title';
import Button from '../Components/Button';
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { FaUserAlt } from 'react-icons/fa';

function TestimonialApp() {
  const [testimonials, setTestimonial] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    if (testimonials) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonials.toLowerCase()}`)
        .then(response => response.json())
        .then(json => setItems(json))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [testimonials]);

  return (
    <div className='container m-auto'>
      <Title text={"Testimonials App"} />
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill className='' />}
        onClick={() => setTestimonial("Posts")}
      />{" "}
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt />}
        onClick={() => setTestimonial("Users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonial("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select from above" : testimonials}
      />
      {items ? (
        items.map((item) => (
          <div key={item.id} className='card card-primary mb-2'>
            {item.name && <h2 className='card-header'>{item.name}</h2>}
            <div className='card-body'>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                </div>
               {item.email && (
               <small className='card-footer'>{item.email}</small>
            )} 
          </div>
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default TestimonialApp;
