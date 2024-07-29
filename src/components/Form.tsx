import React from 'react';

export function Form() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // you have to sign his email up on https://web3forms.com/#start
    // get his access key and put it here!
    formData.append('access_key', '66d7fffa-86bb-4037-bdcf-9d74d375b4c2');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: 500,
        maxWidth: '100%',
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 40,

        boxShadow: '8px 5px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>
        Fill out the form below for your free on-site consultation where you’ll
        receive an estimate for services. You’re on your way to your smoothest
        remodel ever.
      </p>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 20,
        }}
      >
        <input type="text" name="name" placeholder="Name*" required />
        <input type="email" name="email" placeholder="Email*" required />
        <input type="phone" name="phone" placeholder="Phone*" required />
        <input type="text" name="address" placeholder="Address*" required />
        <input type="text" name="city" placeholder="City*" required />

        <textarea name="message" placeholder="Message*" required></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export function MobileForm() {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // you have to sign his email up on https://web3forms.com/#start
    // get his access key and put it here!
    formData.append('access_key', '66d7fffa-86bb-4037-bdcf-9d74d375b4c2');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // width: 250,
        maxWidth: '95%',
        // maxWidth: '90%',
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 40,

        boxShadow: '8px 5px 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>
        Fill out the form below for your free on-site consultation where you’ll
        receive an estimate for services. You’re on your way to your smoothest
        remodel ever.
      </p>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 20,
        }}
      >
        <input type="text" name="name" placeholder="Name*" required />
        <input type="email" name="email" placeholder="Email*" required />
        <input type="phone" name="phone" placeholder="Phone*" required />
        <input type="text" name="address" placeholder="Address*" required />
        <input type="text" name="city" placeholder="City*" required />

        <textarea name="message" placeholder="Message*" required></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
