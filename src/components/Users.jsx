import React, { useEffect } from "react";
import Loader from "./Loader";
import "./Users.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/features/Users/UsersSlice";
import {
  setIsEmpty,
  setUserDetails,
} from "../redux/features/UserDetails/UserDetailsSlice";

function Users() {
  const users = useSelector((state) => state.usersSliceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const displayUser = (id) => {
    console.log(id);
    const userChosen = users.users.filter((user) => user.id === id);
    dispatch(setIsEmpty(false));
    dispatch(setUserDetails(userChosen));
  };

  const removeuser = () => {
    dispatch(setIsEmpty(true));
    dispatch(setUserDetails([]));
  };

  return (
    <>
      <div className="users">
        <h1>These are registered Users</h1>
        <button className="view-details-btn" onClick={removeuser}>
          Remove
        </button>
        <div className="persons">
          {/* case1: still loading */}
          {users.isLoading && (
            <div>
              <Loader />
            </div>
          )}
          {/* case2: error from server during axios call */}
          {!users.isLoading && users.error ? (
            <div>Error: {users.error} </div>
          ) : null}
          {/* case3: successful fetch */}
          {!users.isLoading && users.users.length ? (
            <div>
              {users.users.map((user) => {
                return (
                  <div className="person" key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <button
                      className="view-details-btn"
                      onClick={() => displayUser(user.id)}
                    >
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Users;
