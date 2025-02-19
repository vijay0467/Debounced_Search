import React from "react";

const RecipeDetails = ({ recipe }) => {
    return (
        <div className="recipe-details">
            <h2 className="recipe-title">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <p className="recipe-description">{recipe.description}</p>
        </div>
    );
};

export default RecipeDetails;
