import React, { useEffect } from "react";
import Logo from "../assets/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { User_LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign out
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen px-7 z-10 py-1 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className="w-52 mx-auto md:mx-0" src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2 justify-center items-center">
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 " src={User_LOGO} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="align-middle font-bold text-white"
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
