import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const RecipePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            })
            .catch(() => {
                setRecipe(null);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="spinner-container">
                <FaSpinner className="spinner" />
            </div>
        );
    }

    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div className="recipe-details-container">
            <div className="recipe-card-expanded">
                <h1 className="recipe-title">{recipe.name}</h1>
                <img src={recipe.image} alt={recipe.name} className="recipe-image-expanded" />
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <button className="back-button" onClick={() => navigate("/")}>
                    Back to Recipes
                </button>
            </div>
        </div>
    );
};

export default RecipePage;
