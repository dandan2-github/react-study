import React from 'react'
import './UserCard.css'

interface UserProps {
  user: {
    id: number
    name: string
    email: string
    phone: string
  }
}

function UserCard({ user }: UserProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>📧 {user.email}</p>
      <p>📞 {user.phone}</p>
    </div>
  )
}

export default UserCard
