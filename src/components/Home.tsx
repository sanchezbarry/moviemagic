import { useState, useEffect } from "react";


type resultProps = {
    name: string;
}

const Home = () => {
    const [movie, setMovie] = useState<resultProps[]>([]);

    useEffect(() => {
        const api = async () => {
          const data = await fetch("https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies", {
            method: "GET"
          });
          const jsonData = await data.json();
          setMovie(jsonData.results);
        };
    
        api();
      }, []);

    return (
    <>  
        <p>hi</p>
        <h1>
            {movie.map((value) => {
            return (
                <div>
                <div>{value.name}</div>
                </div>
            );
            })}
        </h1>

    </>
    )
}
export default Home;