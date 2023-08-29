import React, { useEffect } from "react";
import { fetchUsers } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Users = () => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  return (
    <div>
      {loading ? (
        <p>Fetching Users....</p>
      ) : error.length > 0 ? (
        <p>{error}</p>
      ) : (
        <>
          <p>From API:</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
        </>
      )}
    </div>
  );
};
