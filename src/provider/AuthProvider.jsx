import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true)
		return signOut(auth);
	}

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	  };
	
	  const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, gitProvider);
	  };

	useEffect(()=>{
	    const unsubscribe =	onAuthStateChanged(auth, loggedUser => {
			console.log('logged in user', loggedUser)
			setUser(loggedUser)
			setLoading(false)
		})

		return () => {
			unsubscribe();
		}
	}, [])

	// const photoAdd = (name, photo) => {
	// 	return updateProfile(auth, name, photo);
	// }

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		logOut,
		setUser,
		googleSignIn,
		githubSignIn
		// photoAdd
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;