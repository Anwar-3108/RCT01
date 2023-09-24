import React from 'react'

const UserComp = ({data}) => {
  console.log(data.name);
  return (
    <div>
        <h1>user component </h1>
    </div>
  )
}

export default UserComp