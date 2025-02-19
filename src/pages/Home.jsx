import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SuggestionsList from "../components/SuggestionsList";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Home = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let debounceTimer;

    useEffect(() => {
        setLoading(true);
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            fetch(`https://dummyjson.com/recipes${query ? `/search?q=${query}` : ""}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecipes(data.recipes || []);
                    setLoading(false);
                })
                .catch(() => {
                    setRecipes([]);
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [query]);

    return (
        <div className="container">
            <h1 className="title">Recipe Search</h1>
            <SearchBar query={query} setQuery={setQuery} />

            {loading ? (
                <div className="spinner-container">
                    <FaSpinner className="spinner" />
                </div>
            ) : (
                <SuggestionsList 
                    recipes={recipes} 
                    onSelect={(recipe) => navigate(`/recipe/${recipe.id}`)}  // Navigate to recipe details
                />
            )}
        </div>
    );
};

export default Home;
