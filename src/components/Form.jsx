import React from "react";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="First Name" className="form_input" />
      <input type="text" placeholder="Last Name" className="form_input" />
      <input type="email" placeholder="Email Address" className="form_input" />

      <textarea name="" id="" cols="40" className="form_input" rows="10">
        Describe your issues
      </textarea>
      <button className="btnTwo">Send</button>
    </form>
  );
}

export default Form;
