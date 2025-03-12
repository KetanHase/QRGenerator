import React from 'react';
import '../css/FeedbackForm.css';

const FeedbackForm = () => {
  return (
  
  <>
    <div style={{color:'white'}}>FeedbackForm
    <div className="form-container">
      <h2>Simple Form</h2>
      <form  >
        <label>Name:</label>
        <input
          type="text"
          name="name"
         
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
           
           
          required
        />
        <select >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button className="feedbackbutton" type="submit">Submit</button>
      </form>
    </div>
    </div>

    </>
  );
};

export default FeedbackForm;