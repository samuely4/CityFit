import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Loader from './loader';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    if(currentUser === 'wait') {
        return (
            <Loader />
        )
    }
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                        <Redirect to='/login' />
                    )
            }
        />
    );
};

export default PrivateRoute;