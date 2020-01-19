import React from 'react';
import './styles.css';

const DeveloperItem = ({ developer }) => {
    return (
        <li className="dev-item">
            <header>
                <img src={developer.avatar_url} alt={developer.name}></img>
                <div className="user-info">
                    <strong>{developer.name}</strong>
                    <span>{developer.technologies.join(', ')}</span>
                </div>
            </header>
            <p>{developer.bio}</p>
            <a href={`https://github.com/${developer.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DeveloperItem;