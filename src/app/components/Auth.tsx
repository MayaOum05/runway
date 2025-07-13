"use client"
import { useState, useEffect } from "react"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth"
import './Auth.css';
import Posts from './Posts';
import RoomLabel from './RoomLabel';

export default function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState<User | null>(null) 
  const [error, setError] = useState("")
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    if (user) {
      setShowWelcome(true);
      const timer = setTimeout(() => setShowWelcome(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    setError("")
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      setUser(cred.user)
    } catch (e: any) {
      if (e.code === "auth/invalid-email") {
        setError("Invalid email address.")
      } else if (e.code === "auth/user-not-found") {
        setError("User not found.")
      } else if (e.code === "auth/wrong-password") {
        setError("Wrong password.")
      } else {
        setError("Login failed. Please try again.")
      }
    }
  }

  const signup = async () => {
    setError("")
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      setUser(cred.user)
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") {
        setError("Email is already in use.")
      } else if (e.code === "auth/invalid-email") {
        setError("Invalid email address.")
      } else if (e.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.")
      } else {
        setError("Signup failed. Please try again.")
      }
    }
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
  }

    return (
    <div className="auth-card">

      {error && <div className="error-alert">{error}</div>}

      {user ? (
        <>
          <RoomLabel label="Rooms" targetPath="/search" />



          <Posts />
        </>
      ) : (
        <>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="auth-input"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="auth-input"
          />
          <button onClick={login} className="auth-button">Login</button>
          <button onClick={signup} className="auth-button">Sign Up</button>
        </>
      )}

    </div>
  );

}
