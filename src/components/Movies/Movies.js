import React, { useState } from 'react';
import styles from "./Movies.module.css"
import Movie from '../Movie/Movie';
import DataMovie from '../../utils/constants/DataMovie';

const Movies = () => {

    // state
    const [item, setItem] = useState(DataMovie)

    const handleClick = () => {
        const movie = {
            id: 14,
            title: "The Dark Knight Rises",
            date: "20 Juli 2012",
            image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg"
        }

        const movie2 = {
            id: 15,
            title: "Fast X",
            date: "17 Mei 2023",
            image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
        }

        setItem([...item, movie, movie2])
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {
                        item.map(function(data){
                            return(
                                    <Movie key={data.id} title={data.title} date={data.date} image={data.image}/>
                            )
                        })
                    }
                </div>
                <button onClick={handleClick}>Tambahkan Movie</button>
            </section>
        </div>
    );
}

export default Movies;
