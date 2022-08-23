import { GET_REGISTER, GET_LOGIN, GifData } from "./ActionTypes";
import axios from "axios";

export const Registration = (dispatch, formData, navigate) => {
  console.log(formData);
  axios.post("https://appnewh.herokuapp.com/signup", formData).then((res) => {
    dispatch({ type: GET_REGISTER, res });
    console.log(res.data);
    if (res.data.message === "signup Success") {
      alert("signup success");
      navigate("/login");
    }
  });
};



export const UserLogin = (dispatch, formData, navigate) => {
  console.log(formData);
  axios.get("https://appnewh.herokuapp.com/signup", formData).then((res) => {
    if (res.data.token) {
      console.log(res.data);
      alert("login Success");
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("isLogin", true);
      dispatch({ type: GET_LOGIN, res });
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid Credintials or Register First");
    }
  });
};


export const GetGifData = (payload) => (dispatch) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=hIfbosObNHw2T4o7N9TbPVEB1s5bGvAg&q=${payload}&limit=25&offset=0&rating=g&lang=en`
    )
    .then((res) => {
      dispatch(GifData(res.data.data));
    });
};