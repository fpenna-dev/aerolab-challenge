import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import axios from "axios";
import Card from "./Card.jsx";
import ReactDOM from "react-dom";
import Modal from "./Modal.jsx";

const Layout = (props) => {
  // PROPS
  const { children } = props;

  //HOOKS
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);
  const [history, setHistory] = useState(null);
  const [clase, setClase] = useState(null);
  const [open, setOpen] = useState(false);

  // CREDENCIALES API
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUwZjY1YzdlNzE4NzAwMjBlMzhmOTEiLCJpYXQiOjE2MTU5MTg2ODR9.MieVMw3rKT5GYmlsLonaPTJ2vNCJAa-epwCfDPANWFk";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  const body = {
    amount: Number(points),
  };

  // OBTENGO LOS USUARIOS
  const obtenerUsuario = async () => {
    try {
      const res = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/me",
        config
      );
      const user = await res.data;
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };

  // OBTENGO EL HISTORIAL
  const obtenerHistorial = async () => {
    try {
      const res = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/history",
        config
      );
      const historial = await res.data;
      setHistory(historial);
    } catch (e) {
      console.log(e);
    }
  };

  // CARGAR MAS PUNTOS A LA CUENTA
  const handleClick = async () => {
    if (points == 1000 || points == 5000 || points == 7500) {
      try {
        const res = await axios.post(
          "https://coding-challenge-api.aerolab.co/user/points",
          body,
          config
        );
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Ingresa un monto valido");
    }
  };
  useEffect(() => {
    obtenerUsuario();
    obtenerHistorial();
  }, [handleClick]);

  // VALIDACIONES MOMENTANEAS A LA CARGA DE DATOS
  if (user === null) {
    return <p>Loading profile...</p>;
  }
  if (history === null) {
    return <span></span>;
  }

  return (
    <>
      <Header
        name={user.name}
        points={user.points}
        historial={
          history.length > 0 &&
          history.map((item, i) => (
            <Card
              key={i}
              image={item.img.url}
              category={item.category}
              title={item.name}
              classPropCard={"card--mod"}
              classPropBtn="card__button--mod"
              classPropErr="card__err--mod"
              classPropCoin="card__coin--mod"
            ></Card>
          ))
        }
        onClick={() => {
          if (clase === null) {
            setClase("probando");
          } else {
            setClase(null);
          }
        }}
        clase={clase}
        openModal={() => {
          setOpen(true);
        }}
      ></Header>
      {children}
      <Footer></Footer>
      {open ? (
        ReactDOM.createPortal(
          <Modal
            title="¡Agrega puntos!"
            text="Solamente puedes cargar 1000, 5000 o 7500"
            onClick={() => {
              setOpen(false);
            }}
          >
            <input
              type="number"
              onChange={(e) => {
                setPoints(e.target.value);
              }}
            />
            <button onClick={handleClick}>Sumar puntos</button>
          </Modal>,
          document.getElementById("teleport")
        )
      ) : (
        <span></span>
      )}
    </>
  );
};

export default Layout;
