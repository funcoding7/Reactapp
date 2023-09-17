import React, { useEffect, useState } from "react";
import NoImage from '../images/no_image.jpg';
import API from '../API';
const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);

        } catch (error) {
            setError(true);
        }
    };
    useEffect(() => {
        fetchMovies(1);

    }, [])
    return <div>Home page</div>;
};

export default Home;