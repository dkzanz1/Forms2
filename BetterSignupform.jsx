import React,{useState} from "react";

function BetterSignupForm()  {
  const [formData, setFormData] = useState({ firstName: "", lastName: "",
textarea: "", });

  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue= event.target.value;
    setFormData(currData => {
        currData[changedField] = newValue;
        return { ...currData };
    })
  };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return <>
    
   <h1> Signup Form </h1>
   <h3> what the fuck </h3>
   <form>
        <label htmlFor="firstname">Enter a first name </label>
        <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
        /><br/>
           <label htmlFor="lastname">Enter a last name </label>
        <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
        /><br />
         <label htmlFor="textarea">Enter a message </label>
        <input
        type="textarea"
        placeholder="message"
        value={formData.Message}
        onChange={handleChange}
        name="Message"
        id="message"
        col="10"
        row="5"
        /><br />
        <button onClick={handleSubmit}>Submit</button>
        
   </form>

   </>

};

export default BetterSignupForm;




