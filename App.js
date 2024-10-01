import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const res = await fetch('http://localhost:3001/api/insurance-query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        setResponse(data.response);
        setLoading(false);
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1 className="title">InsureEase - AI Insurance Assistant</h1>
                <form onSubmit={handleSubmit} className="query-form">
                    <input
                        type="text"
                        className="query-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask about your insurance..."
                        required
                    />
                    <button type="submit" className="submit-btn">
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {loading ? (
                    <div className="loading">Fetching your personalized insurance guidance...</div>
                ) : (
                    response && <div className="response-box">Response: {response}</div>
                )}
            </div>
        </div>
    );
}

export default App;
