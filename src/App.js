import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';


function App() {
  
  const [ searchLyrics, saveSerachLyrics ] = useState ({});
  const [ lyrics, saveLyrics ] = useState('');

  useEffect(()=> {
    if(Object.keys(searchLyrics).length === 0 ) return;
    
    const consultAPIletter = async () => {

      const { artist, song } = searchLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const result = await axios.get(url);
      saveLyrics(result.data.lyrics);
    }

    consultAPIletter();

  }, [searchLyrics]);

  return (
    <Fragment>
      <Formulario 
        saveSerachLyrics={saveSerachLyrics}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">Artista</div>
          <div className="col-md-6">
            <Cancion 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
