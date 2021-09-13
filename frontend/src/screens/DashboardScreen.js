import React, { useState, useEffect } from "react"
import Header from "../components/Header"

const DashboardPage = (props) => {
  const token = Cookie.get("token")
  const dispatch = useDispatch()

  if (!token) {
    props.history.push("/")
    return <div></div>
  }

  return (
    <div>
      <Header route={props.history.location.pathname}/>
    </div>
  )
}

export default DashboardPage