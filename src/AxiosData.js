import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);        // Liste des utilisateurs
  const [loading, setLoading] = useState(true);  // État de chargement
  const [error, setError] = useState(null);      // État d'erreur éventuelle

  const fetchData = () => {
    setLoading(true);
    setError(null);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        Utilisateurs chargés avec axios
        <span className="badge badge-axios">axios</span>
      </h2>
      <button onClick={fetchData} className="reload-button" disabled={loading}>
        🔄 Recharger les données
      </button>
      <ul className="data-list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
              <span className="user-city">📍 {user.address.city}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;

