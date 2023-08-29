import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import Cookies from "js-cookie";
import ApiClient from "../../services/ApiClient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const MainLayout = () => {
  const rToken = Cookies.get("refreshToken");
  const aToken = Cookies.get("accessToken");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authState)
  const navigate = useNavigate()

  const getRtoken = async() =>{
    if(rToken){
      console.log(rToken)
      axios.defaults.withCredentials = true;
      const tryLog = await axios.get('http://localhost:3030/newAccess', {
        withCredentials: true,
        // headers: {
        //   Cookie: `refreshToken=${rToken}; accessToken=${aToken}`
        // }
      }).then((res) => {
        return res.data?.access_token
      })
      console.log(tryLog)
      Cookies.set("accessToken", tryLog);

      // comeback scene
      if(tryLog){
        const userRefresh = await axios.get('http://localhost:3030/user/me', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${tryLog}`
          }
        }).then((res) => {
          return res.data
        }).catch((err) => console.log(err))
        dispatch(login(userRefresh?.result))
        return
      }
      return
    }
    return
  }

  // useEffect(() => {
  //   if(user.user === ''){
  //     navigate('/')
  //     return
  //   }
  //   return
  // }, [user])

  useEffect(() => {
    if(rToken){
      getRtoken()
      return
    }
    return
  }, [])

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
