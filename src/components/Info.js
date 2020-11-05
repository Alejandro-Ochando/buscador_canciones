import React, {Fragment } from 'react';


const Info = ({ info }) => {
    
    if(Object.keys(info).length === 0) return null;
    const { strArtistThumb,  strGenre, strBiographyES, strBiographyEN, strArtist } = info;
    
    const biography = (strBiographyES === null) 
        ?
            (strBiographyEN === null) 
                ?
                    <p className="letra text-justify">No existe información</p>
                :
                    <p className="letra text-justify">{strBiographyEN}</p>
        :  
            <p className="letra text-justify">{strBiographyES}</p>
     
    const genre = (strGenre === null) ? null : <p className="card-text font-italic">Género: {strGenre}</p>  ;
                 

    return ( 
    <Fragment>
        <div className="  font-weight-bold">
            <h2>Información de {strArtist}</h2>
            <div className="border"></div>
        </div>    
        <div className="card border-light">
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                {genre}
                <h2 className="card-text mb-3 mt-4">Biografía:</h2>
                <p className="card-text">{biography}</p>
                <p className="card-text mt-5">   
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    </Fragment>
    );
}
 
export default Info;