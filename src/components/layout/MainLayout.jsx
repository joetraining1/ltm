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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authState)
  const navigate = useNavigate()

  const getRtoken = async() =>{
    if(rToken){
      const tryLog = await axios.get('http://localhost:3030/newAccess', {
        withCredentials: true,
      }).then((res) => {
        return res.data?.access_token
      })
      Cookies.set("accessToken", tryLog);

      // comeback scene
      const acToken = Cookies.get("accessToken");
      if(acToken){
        const userRefresh = await ApiClient.get('user/me', {
          withCredentials: true,
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
