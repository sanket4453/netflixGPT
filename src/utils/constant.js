export const User_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1bLQRXVyNgftzLiXfqcGLuazjnOqldYVHZ56h-K7OfkyeAJ0Q_DbtseHjmkdZ9aj_kM&usqp=CAU";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY; 