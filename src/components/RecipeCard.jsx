import React from "react";

const RecipeCard = ({ recipe, onView }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h2 className="recipe-name">{recipe.name}</h2>
            <button className="view-details-btn" onClick={onView}>
                View Details
            </button>
        </div>
    );
};

export default RecipeCard;
