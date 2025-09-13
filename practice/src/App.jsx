import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })


const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1)
  console.log(count)
}
const handleClick = (name) => {
  console.log("login successfully10")
  alert("hello " + name);
}
const handleChange = (event) => {

  //console.log(event.target.name)
  //console.log(event.target.value)
  setFormdata({
    ...formdata,
    [event.target.name]: event.target.value
  })
}
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`email : ${formdata.email} \n password:${formdata.password}\n you are logged in`)
}


return (
  <div >
    <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <form onSubmit={handleSubmit}>
      <p>i am a button</p>
      <input type="email" name="email" placeholder="type your email" onChange={handleChange} />
      <input type="password" name="password" placeholder="type your password" onChange={handleChange} />
      <button type="submit" >login</button>


    </form>
  </div>

)
}

export default App

