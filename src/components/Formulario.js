import React, { useState } from "react";

const Formulario = ({ setBusquedaLetra }) => {
  const [info, setInfo] = useState({
    cancion: "",
    artista: "",
  });
  const [error, setError] = useState(false);
  //método que permite actualizar el estado de las acciones del usuario en el formulario
  const handleOnChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const { cancion, artista } = info;
  // método que permite realizar un submit en el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacón
    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // se pasa la info al componenete principal
    setBusquedaLetra(info);
    setInfo({
      cancion: "",
      artista: "",
    });
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="col card text-white bg-transparent mb-5 pt-5 pb-5"
          >
            <fieldset>
              <legend className="text-center">Buscador letra canciones </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre artista"
                      onChange={handleOnChange}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre canción"
                      onChange={handleOnChange}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
