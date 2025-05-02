import React, { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('네트워크 응답에 문제가 있습니다.')
        return res.json()
      })
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>불러오는 중...</p>
  if (error) return <p>에러 발생: {error}</p>

  return (
    <div className="App">
      <h1>사용자 목록</h1>
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
