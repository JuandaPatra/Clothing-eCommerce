import React,{useState} from "react";
import { FormControl, Button, Modal } from "react-bootstrap";
import "../style/register.scss"

const RegisterPage = () => {
  const [dataRegister, setDataRegister]=useState({
    username : "",
    email : "",
    password : "",
    repassword : ""
  })

  const [modal, setModal]=useState([false, ""])


  const register =()=>{
    if(dataRegister.username==="" ||dataRegister.email==="" ||dataRegister.password==="" || dataRegister.repassword===""){
      setModal([true, "Data belum terisi"])
      return
    }
    if(dataRegister.password !== dataRegister.repassword){
      setModal([true, "Password tidak sama"])
      return
    }
    let data ={
      username : dataRegister.username,
      email : dataRegister.email,
      password : dataRegister.password
    }
    console.log(data)

  }
  return (
    <div className="register">
      <h1>MY ACCOUNT</h1>
      <div className="registerBox">
        <h1>Register</h1>
        <div className="boxForm">
        <label>Username</label>
        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={e =>setDataRegister({...dataRegister,
        username : e.target.value})} />
        <label>Email</label>
        <FormControl placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={e => setDataRegister({...dataRegister, email : e.target.value})} />
        <label>Password</label>
        <FormControl placeholder="Password" aria-label="password" aria-describedby="basic-addon1" onChange={e => setDataRegister({...dataRegister, password : e.target.value})} />
        <label>Retype Password</label>
        <FormControl placeholder="checkPassword" aria-label="password" aria-describedby="basic-addon1" onChange={e => setDataRegister({...dataRegister, repassword : e.target.value})}/>
        <Button variant="success" onClick={register}>Register</Button>

        </div>
      </div>

      <Modal show={modal[0]} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal[1]}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={()=>setModal(!modal)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterPage;
