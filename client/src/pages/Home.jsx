//base url
const base_url = import.meta.env.VITE_BASE_URL;

import Nav from "../components/Nav";
import BannerPrimary from "../components/BannerPrimary";
import HomeMiddle from "../components/HomeMiddle";
import Banner2 from "../components/Banner2";
import Faq from "../components/Faq";
import Stats from "../components/Stats";
import Loader from "../components/Loader.jsx";
import CartPopup from "../components/CartPopup.jsx";

//other imports
import postRequest from "../utility/postRequest.js";
import getRequest from "../utility/getRequest.js";
import { useContext, useState, useEffect } from "react";
import { context } from "../pages/Store.jsx";

function Home() {
  const [isLoding, setIsLoading] = useState(false);
  const [data, setData] = useContext(context);

  // checkLogin status
  const fetchLoginStatus = async () => {
    const result = await postRequest(`${base_url}/checklogin`);
    if (result.status === 401) {
      setData((prev) => ({ ...prev, isLogin: false, loginChecked: true }));
    } else if (result.suceess) {
      setData((prev) => ({
        ...prev,
        isLogin: true,
        user: result.data,
        loginChecked: true,
      }));
    }
  };

  //fetch resturants
  const fetchRestaurants = async () => {
    const response = await getRequest(`${base_url}/get/resturants`);
    if (response.suceess) {
      setData((prev) => ({ ...prev, resturants: response.data }));
    } else {
      toast.error(response.message, { position: "top-right", autoClose: 3000 });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await fetchLoginStatus();
      await fetchRestaurants();
      setIsLoading(false);
    })();
  }, []);

  if (isLoding) {
    return <Loader />;
  }

  return (
    <div>
      <Nav></Nav>
      <BannerPrimary></BannerPrimary>
      <HomeMiddle />
      <Banner2></Banner2>
      <Faq />
      <Stats />
      <CartPopup />
    </div>
  );
}

export default Home;
