import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { BG_IMG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const result = Validate(email.current.value, password.current.value);
    setErrorMessage(result);
    if (result) return;
    //Sign Up and Sign In Logic

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Error: " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Error: " + errorMessage);
        });
    }
  };

  const handleSignUpToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />

      <div className="absolute md:w-full">
        <img
          className="h-screen object-cover md:w-full"
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full rounded-md bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="p-4 my-4 w-full rounded-md bg-gray-700"
          type="text"
          placeholder="Email Address"
          ref={email}
        />

        <input
          className="p-4 my-4 w-full rounded-md bg-gray-700"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-base text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-md"
          onClick={() => handleSubmit()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-base cursor-pointer" onClick={handleSignUpToggle}>
          {isSignInForm ? "New User? Sign Up" : "Already registed!! Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
