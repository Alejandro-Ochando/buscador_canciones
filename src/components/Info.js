import React, {Fragment } from 'react';

const Info = ({ info }) => {
    
    if( info.length === 0 ) return null;

    const {strArtist, strBiographyES, strBiographyEN} = info;

    const artist = (strBiographyES === null) 
        ?
            (strBiographyEN === null) 
                ?
                    <p className="letra text-justify">No existe información</p>
                :
                    <p className="letra text-justify">{strBiographyEN}</p>
        :  
            
            <p className="letra text-justify">{strBiographyES}</p>
            

    return ( 
    <Fragment>
        <h2>{strArtist}</h2>
        <div className="border"></div>
        {artist}
    </Fragment>
    );
}
 
export default Info;