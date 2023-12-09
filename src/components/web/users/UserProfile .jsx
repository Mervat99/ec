import React from 'react'

export default function UserProfile ({user}) {

    // const [user, setUser] = React.useState({
    //     username: {user1.name},
    //     email: {user1.email},
    //   },[]);
console.log(user)
  return (
    <div className="profile">
    <h2>User Profile</h2>
    <p><strong>User ID :</strong> {user._id}</p>
    <p><strong>User Name:</strong> {user.name}</p>
  </div>
  )
}
