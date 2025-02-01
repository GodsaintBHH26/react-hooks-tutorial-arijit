import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

export const Contact = () => {
  const [phone] = useContext(AppContext)
  return (
    <div>
      <h1>Contact:</h1>
      {phone}
    </div>
  )
}