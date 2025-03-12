import React from 'react';
import '../css/FeedbackForm.css';

const FeedbackForm = () => {
  return (
  
  <>
    <div className="container">
      <h2>Feedback Form</h2>
      <form>
        <label htmlFor="name" aria-label='please fill the field'>Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />

        <label htmlFor="feedback">Feedback</label>
        <textarea id="feedback" placeholder="Share your thoughts..."></textarea>

        <label htmlFor="rating">Rate Us</label>
        <select id="rating">
          <option value="" disabled selected>
            Select Rating
          </option>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Very Bad</option>
        </select>

        <button className='buttonsubmit' type="submit">Submit Feedback</button>
      </form>
    </div>

    </>
  );
};

export default FeedbackForm;