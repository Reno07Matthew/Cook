import React, { useState } from 'react';
import './search.css';

function RecipeSearchPage() {
    const [chatResponse, setChatResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState('');

    const handleSearchChange = (event) => {
        setPrompt(event.target.value); // Update prompt state here
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
    
        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }), // Use prompt here instead of searchQuery
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setChatResponse(data.message); // Assuming the response data is the chat response
        } catch (error) {
            console.error('Error fetching chat response:', error);
            setChatResponse('Sorry, something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <div className="recipe-search-container">
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={handleSearchChange}
                    placeholder="Enter your ingredients.."/>
                <button type="submit" className="chat-button" disabled={isLoading}>{isLoading ? 'Loading...' : 'Chat'}</button>
            </form>
        </div>
        {chatResponse && <div className="chat-response">{chatResponse}</div>}
    </div>
);
}


export default RecipeSearchPage;
