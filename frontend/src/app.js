import React from "react"
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/style.scss"
import BoilerPlateRouter from "./routes/router"
import { Provider } from "react-redux"
import getStore from "./redux-store/store"

const store = getStore()

class BoilerPlate extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BoilerPlateRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<BoilerPlate />, document.getElementById("root"))