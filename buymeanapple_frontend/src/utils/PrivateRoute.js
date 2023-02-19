import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
	let {user} = useContext(AuthContext)

	return(
		<div>
		<Route {...rest}>{!user ? <Redirect to ="/:slug"/>: children}</Route>
		<Route {...rest}>{user ? <Redirect to ="/creator/profile"/>: children}</Route>
		</div>
	)
}

export default PrivateRoute