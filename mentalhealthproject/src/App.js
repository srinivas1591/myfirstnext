import Signup from "./authentication/Signup";
import  AuthContext  from './authentication/AuthProvider'
import Signin from "./authentication/Signin";
import { BrowserRouter as Router , Switch ,  Route} from 'react-router-dom'
import Dashboard from "./UserDashboard/Dashboard";
import  PrivateRoute  from './authentication/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthContext>
            <PrivateRoute exact path="/" component={ Dashboard } />
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
