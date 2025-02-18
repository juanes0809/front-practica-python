export function FormularioLogistica() {
    return (
      <>
        <form className="border rounded p-5 ">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombre encargado" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Correo encargado" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Contacto encargado" />
          </div>
          <div className="mb-3">
            <input type="date" className="form-control" placeholder="Fecha de receptor" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Detalles" />
          </div>
        
          <button className="btn btn-primary">Guardar registro</button>
        </form>
      </>
    );
  }
  