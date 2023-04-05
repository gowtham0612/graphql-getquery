import React, { useState } from 'react';
import axios from 'axios';

const insertUserMutation = `
  mutation InsertUser($name: String!, $email: String!) {
    insert_users(objects: [{ name: $name, email: $email }]) {
      affected_rows
    }
  }
`;

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      'https://your-hasura-endpoint/v1/graphql',
      headers:{
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "dV6jV7ug8s5mn9qWuJiB6JkrT23ll4TFohR49X11auktHipBJ1PHySGE0hty5JyK",
      },
      {
        query: insertUserMutation,
        variables: {
          name,
          email,
        },
      }
    );

    console.log(response.data);

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Update;