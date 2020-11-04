import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ saveSerachLyrics }) => {
    
    const [ search, saveSearch ] = useState ({
        artist: '',
        song: ''
    });

    const [ error, saveError] = useState(false);
    
    //Funcion a cada input para leer el contenido
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const {artist, song } = search;

    const handlerSubmit = e => {
        e.preventDefault();
        if(artist.trim() === '' || song.trim() === '') {
            saveError(true);
            return;
           
        }   
        saveError(false);
        saveSerachLyrics(search);
    }

    return ( 
        <div className="background">
            { error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <div className="container">
               <div className="row">
                    <form 
                        onSubmit={handlerSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                           <legend className="text-center">Buscador  Letras de Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={updateState}
                                            value={artist}
                                            
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-2 btn btn-lg btn-outline-light float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>  
                </div>
            </div>
        </div>
        

     );
}
 
export default Formulario;