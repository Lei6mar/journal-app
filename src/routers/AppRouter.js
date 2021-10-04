import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { auth, onAuthStateChanged } from "../firebase/firebase-init";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    onAuthStateChanged(auth, (user)=> {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }

      setChecking(false);
      // console.log(user);
    })
    
  }, [dispatch, setChecking, setIsLoggedIn]);

  if(checking){
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isAuth={isLoggedIn}/>
          <PrivateRoute exact path="/" component={JournalScreen} isAuth={isLoggedIn} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
