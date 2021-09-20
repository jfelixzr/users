
import AddUser from "../components/AddUser"
import Inicio from "../components/ShowUsers"
import EditUsers from "../components/EditUser"
import NavApp from '../components/NavApp'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'

const RouterApp = () => {
    return (
        <>
        <Router>
        <NavApp />
        <Switch>
        <Route exact path="/edit/:id" component={EditUsers} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/add" component={AddUser} />
     
        </Switch>
        </Router>

</>
    )
}

export default RouterApp
