// pages/admin/index.js
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';

const Admin = () => {
  const [session, loading] = useSession();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (session) {
      fetchUsers();
    }
  }, [session]);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data.data);
  };

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view this page</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={() => signOut()}>Sign Out</button>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
