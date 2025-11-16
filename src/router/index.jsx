import Home from "../pages/home";
import Mision from "../pages/description/mision";
import Vision from "../pages/description/vision";
import History from "../pages/description/history";
import { Routes, Route } from "react-router-dom";
import Servicios from "../pages/services";
import NotFound from "../pages/notFound";
import EquipoTrabajo from "../pages/TeamWork";
import DescubridorTayrona from "../pages/descubridorTayrona";
import BasesPage from "../pages/dbAcademic";

const RouterApp = () => {
  const routerApp = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/description/mision",
      element: <Mision />,
    },

    {
      path: "/description/vision",
      element: <Vision />,
    },
    {
      path: "/description/historia",
      element: <History />,
    },
    {
      path: "/servicios",
      element: <Servicios />,
    },
    {
      path: "/equipo-trabajo",
      element: <EquipoTrabajo />,
    },

    {
      path: "/servicios/descubridor-tayrona",
      element: <DescubridorTayrona />,
    }
    ,{
      path: "/servicios/bases-de-datos",
      element: <BasesPage />,
    }
  ];

  return (
    <Routes>
      {routerApp.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterApp;
