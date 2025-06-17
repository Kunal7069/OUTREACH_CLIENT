
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [form, setForm] = useState({ name: '', linkedin_username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://outreach-sqy8.onrender.com/users/user', form);
      alert('User registered successfully!');
    } catch (err) {
      console.error(err);
      alert('Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="linkedin_username" placeholder="LinkedIn Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {loading && <div className="loader-container"><div className="loader"></div></div>}
    </form>
  );
};

export default RegisterForm;
