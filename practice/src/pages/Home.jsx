import React, { useState, useEffect } from 'react'

export default function Home() {
    const[users, changeUser] = useState([
        {userName:'jeniffer', age: 20, id:1},
        {userName:'Yoshi', age: 23, id:2},
        {userName:'toji', age: 22, id:3}
      ])

      useEffect(() => {
        const newUser = users.filter(user => user.id === 2)
        changeUser(newUser);
      }, []);
    //   const newUser = users.filter(user=>(user.id === 2)) 
  return (
    <div>
    {users.map(user=>(
      <div className="user-preview" key={user.id}>
        <h3>{user.userName}, {user.age}</h3>
        <h4></h4>
      </div>
    ))}
    
  </div>
  )
}
