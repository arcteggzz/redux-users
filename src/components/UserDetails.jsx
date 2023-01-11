import React from "react";
import "./UserDetails.css";
import { useSelector } from "react-redux";

function UserDetails() {
  const singleuser = [
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
  ];

  const userDetails = useSelector((state) => state.userDetailsSliceReducer);
  return (
    <div className="user-details">
      <h1>These are the users Details</h1>
      <div className="">
        {userDetails.isEmpty && <div>Click on a User to view details...</div>}
        {!userDetails.isEmpty && userDetails.userDetails.length ? (
          <div>
            {userDetails.userDetails.map((user) => {
              return (
                <div className="user-details-person">
                  <h2>{user.name}</h2>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <p>{user.address.street}</p>
                  <p>{user.address.suite}</p>
                  <p>{user.address.city}</p>
                  <p>{user.address.zipcode}</p>
                  <p>{user.address.geo.lat}</p>
                  <p>{user.address.geo.lng}</p>
                  <p>{user.phone}</p>
                  <p>{user.website}</p>
                  <p>{user.company.name}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UserDetails;
