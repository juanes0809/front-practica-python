import "./Logistica.css";
import { FormularioLogistica } from "../formularioLogistica/FormularioLogistica";

export function Logistica() {
  return (
    <>
      <section className="banner-logistica"></section>
      <section className="container-my-5 text-center">
        <section className="row p-5">
          <div className="col-12 col-md-6">
            <h3>Logistica</h3>
            <img src="../../../src/assets/proyecto.png" alt="mascota" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 align-self-center shadow p-5">
            <p>
              En nuestra empresa, la logística es el corazón de nuestras operaciones. Nos encargamos de coordinar la recepción, almacenamiento y distribución eficiente de nuestras prendas a nivel nacional e internacional. Trabajamos con tecnologías de última generación para garantizar que cada entrega se realice de manera puntual, asegurando la satisfacción de nuestros clientes y fortaleciendo nuestra posición como líderes en la industria textil en Colombia.
            </p>
          </div>
        </section>
      </section>

      <section className="container my-5">
        <div className="row justify-content-center text-center">
          <div className="col-8 text-center">
            <h3>Registrate como prooveedor</h3>
            <hr />
            <p>Este formulario está diseñado para garantizar el control detallado de la mercancía que llega a nuestras instalaciones. Por favor, registre la información correspondiente al proveedor, la referencia del producto, la cantidad recibida y cualquier observación relevante. Nuestro equipo utilizará esta información para validar la calidad y el estado de los productos, asegurando que cada envío cumpla con nuestros altos estándares de calidad.</p>
            <FormularioLogistica></FormularioLogistica>
          </div>
        </div>
      </section>

    </>
  );
}