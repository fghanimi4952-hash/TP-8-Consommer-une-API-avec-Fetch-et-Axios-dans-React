import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);       // Liste des articles
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null);     // État d'erreur éventuelle

  const fetchData = () => {
    setLoading(true);
    setError(null);
    // On démarre le fetch
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'une fois au montage

  if (loading) return (
    <div className="component-card">
      <p className="loading">Chargement en cours</p>
    </div>
  );
  
  if (error) return (
    <div className="component-card">
      <p className="error">Erreur : {error}</p>
    </div>
  );

  return (
    <div className="component-card">
      <h2 className="component-title">
        Articles chargés avec fetch()
        <span className="badge badge-fetch">fetch</span>
      </h2>
      <button onClick={fetchData} className="reload-button" disabled={loading}>
        🔄 Recharger les données
      </button>
      <ul className="data-list">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;

