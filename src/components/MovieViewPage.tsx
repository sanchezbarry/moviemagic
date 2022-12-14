import React, { useState, useEffect } from 'react';

const singleMovieApi = 'https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies/:id';

type Movie = {
    name: string;
    productionYear: number;
    genre: string;
    synopsisShort: string;
    synopsis: string;
  };

  const MovieViewPage = () => {
    return (   
        <>
        </>
    )
  }

export default MovieViewPage;