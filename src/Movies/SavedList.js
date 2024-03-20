import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavedList(props) {
  const naviagte = useNavigate()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span key={movie.id} onClick={() => naviagte(`movies/${movie.id}`)}  className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={() => naviagte("/")} className="home-button">Home</div>
    </div>
  );
}
