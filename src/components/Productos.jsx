import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import "./productos.css";
import Button from "./Button.jsx";

const Productos = () => {
  // HOOKS
  const [products, setProducts] = useState(null);
  const [idProduct, setIdProduct] = useState("5a0b35f8734d1d08bf7084e3");

  // CREDENCIALES API
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUwZjY1YzdlNzE4NzAwMjBlMzhmOTEiLCJpYXQiOjE2MTU5MTg2ODR9.MieVMw3rKT5GYmlsLonaPTJ2vNCJAa-epwCfDPANWFk";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const body = {
    productId: idProduct,
  };

  // OBTENGO LOS PRODUCTOS PARA MAPEARLOS
  const obtenerProducts = async () => {
    try {
      const res = await axios.get(
        "https://coding-challenge-api.aerolab.co/products",
        config
      );
      const productos = await res.data;
      setProducts(productos);
    } catch (e) {
      console.log(e);
    }
  };

  // RECLAMO LOS PRODUCTOS
  const reedem = () => {
    try {
      const data = axios.post(
        "https://coding-challenge-api.aerolab.co/redeem",
        body,
        config
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    obtenerProducts();
  }, []);

  // VALIDACION MOMENTANEA SOBRE LOS PRODUCTOS
  if (products === null) {
    return <p></p>;
  }

  return (
    <>
      <section className="products">
        <div className="products__nav">
          <p className="products__pagination">16 of 32 products</p>
          <p className="products__filter">Sort by:</p>
          <Button text="Most Recent"></Button>
          <Button text="Lowest price"></Button>
          <Button text="Highest price"></Button>
        </div>
        {products.length > 0 &&
          products.map((item) => (
            <Card
              key={item._id}
              image={item.img.url}
              category={item.category}
              title={item.name}
              price={item.cost}
              onClick={() => {
                setIdProduct(item._id);
                console.log(idProduct);
                reedem();
              }}
            ></Card>
          ))}
      </section>
    </>
  );
};

export default Productos;
