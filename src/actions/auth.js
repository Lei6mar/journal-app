import Swal from 'sweetalert2'


import {
  auth,
  provider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from "../firebase/firebase-init";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        // await updateProfile(user, {displayName: name});
        // console.log(user);
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch(e => {
        console.log(e);
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');

      });
    // dispatch(login(123, "Pedrito"));
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: name });
        // console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire('Error', e.message, 'error');

      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
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


export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})