import {
  auth,
  provider,
  signInWithPopup,
} from "../firebase/firebase-config";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { app } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "Pedrito"));
    }, 3500);
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    

    signInWithPopup( auth, provider).then(({user}) => {
      dispatch(
        login(user.uid, user.displayName)
      )
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
