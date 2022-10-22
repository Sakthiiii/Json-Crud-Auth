import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import {useHistory } from 'react-router-dom';



const Home = () => {

const history=useHistory()

  const [input, setInput] = useState({
    name: "",
    email: "",
   
    password: "",
  });
const [data,setData]=useState([])

  const getdata = (e) => {
    const { name, value } = e.target;
   
    setInput(()=>{
        return {
            ...input,[name]:value
        }
    })
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {name,email,password}=input;

    if(name===""){
        alert('Name feild is required')
    }else if(email === ""){
        alert('email feild is required')

    
    
    }else if (password === ""){
        alert('password feild is required')

    }else if(password.length < 5){
        alert('password length more then 6 charecter')

    }
    else{
        console.log("Data added succesfully")
    }
    localStorage.setItem("youtubeInput",JSON.stringify([...data,input]));
    history.push('/login')

  }

  return (
    <div>
      <div className="container">
        <section className="d-flex justify-content-between">
          <div className="left-data mt-3 p-2 m-6" style={{ width: "100%" }}>
            <h3 className="col-lg-8 mt-3 text-center"> Register</h3>

            <>
              <Form onSubmit={handleSubmit}>
                <Form.Floating className="mb-3 col-lg-8 " autoComplete="off">
                  <Form.Control
                    id="floatingInputCustom"
                    type="type"
                    name="name"
                    onChange={getdata}
                    placeholder="Enter Your name ..."
                  />
                  <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating
                  className="mb-3 col-lg-8 mt-8"
                  autoComplete="off"
                >
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>

                {/* <Form.Floating className="mb-3 col-lg-8">
                  <Form.Control
                    id="floatingDateCustom"
                    type="date"
                    onChange={getdata}
                    name="date"
                    placeholder="date"
                  />
                  <label htmlFor="floatingPasswordCustom">D-O-B</label>
                </Form.Floating> */}
                <Form.Floating className="mb-3 col-lg-8">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    onChange={getdata}
                    name="password"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <Button
                  variant="primary"
                  type="submit"
                  className="col-lg-8  text-center"
                  style={{ background: "green", border: "none" }}
                >
                  Submit
                </Button>
                <p className="mt-3">
                  Already have an account <span><NavLink to='/login'> Login</NavLink> </span>
                </p>
              </Form>
            </>
          </div>
          <div className="right-data col-lg-6">
            <div className="sign-img mt-5 p-3 m--6">
              <img src="./sign.svg" alt="" style={{ width: "600px" }} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
