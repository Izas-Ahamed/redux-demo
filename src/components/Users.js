import React, { useEffect } from "react";
import { fetchUsersFromAPI } from "../redux/async/actions/asyncActionCreators";
import { connect } from "react-redux";

function Users({ fetchUsers, users, loading, error }) {
  useEffect(() => {
    fetchUsers();
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
          <button onClick={fetchUsers}>Fetch Users</button>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersFromAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
