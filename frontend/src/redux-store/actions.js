// LOGIN
const loginUser = ({ _id, name, email }) => ({
  type: "LOGIN",
  user: {
    _id,
    name,
    email
  }
})

// LOGOUT
const logoutUser = () => ({
  type: "LOGOUT"
})

export { loginUser, logoutUser }