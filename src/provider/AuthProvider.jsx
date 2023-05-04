import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider,updateProfile , createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = async (email, password, photo, name) => {
		setLoading(true);
		const {user} = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(user, { displayName: name, photoURL: photo })
		return auth.currentUser 
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
			setUser(auth.currentUser)
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