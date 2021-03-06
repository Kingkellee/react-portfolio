import { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='' id='' placeholder='Email' />
          <textarea name='' placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && (
            <span>
              Your message has been delivered, I'll reply you shortly.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
