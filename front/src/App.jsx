import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("Iniciando componente");
    fetch("https://api-aplicaciones-hibridas-84yxxtscs-master-victor.vercel.app/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <Layout>
      <Outlet />
      <Footer />
    </Layout>
  );
}
