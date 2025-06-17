// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [form, setForm] = useState({
//     name: '',
//     linkedin_username: '',
//     tag: '',
//     title: '',
//     description: ''
//   });

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = e => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.entries(form).forEach(([key, val]) => data.append(key, val));
//     data.append('file', file);

//     try {
//       const res = await axios.post('https://outreach-sqy8.onrender.com/documents/', data);
//       alert('Document uploaded successfully!');
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert('Upload failed!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Upload Document</h2>
//       <input name="name" placeholder="Name" onChange={handleChange} required />
//       <input name="linkedin_username" placeholder="LinkedIn Username" onChange={handleChange} required />
//       <input name="tag" placeholder="Tag" onChange={handleChange} required />
//       <input name="title" placeholder="Title" onChange={handleChange} required />
//       <textarea name="description" placeholder="Description" onChange={handleChange} required />
//       <input type="file" onChange={handleFileChange} required />
//       <button type="submit">Upload</button>
//     </form>
//   );
// };

// export default UploadForm;

import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    name: '',
    linkedin_username: '',
    tag: '',
    title: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = e => setFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => data.append(key, val));
    data.append('file', file);

    try {
      const res = await axios.post('https://outreach-sqy8.onrender.com/documents/', data);
      alert('Document uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Upload failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Document</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="linkedin_username" placeholder="LinkedIn Username" onChange={handleChange} required />
      <input name="tag" placeholder="Tag" onChange={handleChange} required />
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {loading && <div className="loader-container"><div className="loader"></div></div>}
    </form>
  );
};

export default UploadForm;
