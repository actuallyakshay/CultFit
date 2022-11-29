import React from 'react'
import { useSelector } from 'react-redux'

function PrivateRoute({ children }) {
    
    const isAuth = useSelector(state => state?.auth?.data?.isAuth)
    

  return children
}

export default PrivateRoute