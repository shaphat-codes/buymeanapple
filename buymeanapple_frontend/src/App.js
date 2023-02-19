import './App.css';
import {HashRouter as Router,Route} from 'react-router-dom' 
import PrivateRoute from './utils/PrivateRoute'
import {AuthProvider} from './context/AuthContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'




function App() {
  return (
    <div className="App">
    <Router>
	
    	<AuthProvider>
		<Header/>
		
	    <PrivateRoute component={UserPage} path="/:slug"exact />
		<PrivateRoute component={HomePage} path=""exact />
		  
		  
		  
		  <Route component={ProfilePage} path="/creator/profile"exact />
	      <Route component={LoginPage} path="/creator/login"exact />
	      <Route component={RegisterPage} path="/creator/register"exact />
	      
      	
		
		</AuthProvider>
    </Router>
    </div>
  );
}

export default App;
