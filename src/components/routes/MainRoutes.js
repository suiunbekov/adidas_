import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import MainPage from "../../pages/MainPage";
import Samba from "../samba";
import NotePage from "../../NotePage";
import Edite from "../Edite/Edite";

const MainRoutes = () => {
  const publicROUTE = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <MainPage />, id: 2 },
    { link: "*", element: <NotePage />, id: 3 },
    { link: "/samba", element: <Samba />, id: 4 },
    { link: "/edite/:id", element: <Edite />, id: 5 },
  ];

  return (
    <Routes>
      {publicROUTE.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
