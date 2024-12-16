import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-neon">
        Art-Synt: Tu acceso al corazón de Night City
      </h1>
      <div className="mx-5 mt-10 p-6 bg-white shadow-lg rounded-lg presentation">
        <h2>Crea tu destino, arma tu estilo</h2>
        <p>
          Sumérgete en el oscuro resplandor del futuro, donde el acero y el neón
          son la norma, y las mejoras cibernéticas son el estándar. En{" "}
          <strong>Art-Synt</strong>, te ofrecemos lo último en tecnología y moda
          de Night City: desde icónicos implantes hasta vestimenta digna de un
          Netrunner. Nuestros productos están diseñados para aquellos que no temen
          a la oscuridad ni a la velocidad de la luz.
        </p>
        <p>
          Aquí, no se trata solo de adquirir artículos. Cada compra te acerca a
          convertirte en la leyenda de las calles. ¿Quieres el atuendo que usan
          los más duros de <em>Edgerunners</em>? ¿O una serie de cibermejoras para
          enfrentar los riesgos de la ciudad sin dormir? Todo está a tu alcance.
          Sé parte de los sobrevivientes y deja que tu estilo hable por ti.
        </p>
        <h3>Productos de última generación</h3>
        <ul>
          <li>
            <strong>Implantes Cibernéticos</strong>: Desde manos robóticas de
            titanio hasta visores aumentados de última generación.
          </li>
          <li>
            <strong>Armaduras Urbanas</strong>: Equipos que combinan resistencia y
            estética. Los mejores para enfrentarse a las pandillas de Night City.
          </li>
          <li>
            <strong>Moda de Netrunner</strong>: Lleva contigo la actitud y el
            estilo cyberpunk en cada prenda.
          </li>
          <li>
            <strong>Accesorios Exclusivos</strong>: Elementos únicos inspirados en
            las leyendas de Night City, disponibles solo para los más audaces.
          </li>
        </ul>
        <p>
          No esperes a que la oscuridad te consuma. Atrévete a explorar, redefine
          lo posible y asegura tu lugar en el tablero de Night City. En Art-Synt,
          tu viaje comienza aquí.
        </p>
      </div>
    </div>
  );
}

export default Home;
