import React from "react";
import RecipeCard from "./RecipeCard";  // Import the RecipeCard component

const SuggestionsList = ({ recipes, onSelect }) => {
    return (
        <div className="suggestions-grid">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.id} className="suggestion-card">
                        <RecipeCard 
                            recipe={recipe} 
                            onView={() => onSelect(recipe)}  // Passing onView to RecipeCard
                        />
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default SuggestionsList;
