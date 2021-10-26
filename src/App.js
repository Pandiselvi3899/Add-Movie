
import React, {useState} from 'react';

import { Button } from '@material-ui/core';
import "./App.css";
function App() {
  const movies = [
    {
      name: "Oh My Kadavule", 
      poster: "https://oceanofmovies.se//wp-content/uploads/2020/03/Oh-My-Kadavule-Movie-Free-Download-720p.jpg",
      rating: "⭐8.1",
      description: `Two childhood friends, Anu and Arjun, decide to get married. However, their marital life becomes complicated due to misunderstandings and miscommunication which leads to a divorce.`,
    },
    {
      name: "3",
      poster: "https://i.pinimg.com/736x/71/8d/a1/718da1cd6d679eaf94e2ac5f88805038--disaster-movie--movie.jpg",
      rating: "⭐7.3",
      description: `Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.`,
    },
    {
      name: "Raja Rani",
      poster: "https://cinemachaat.files.wordpress.com/2014/03/poster.jpg",
      rating: "⭐7.6",
      description: `John and Regina, who dislike each other, are forced to get married and lead troubled lives. However, things take a turn when the couple suffers a sudden tragedy.`,
    },

    {
      name: "96",
      poster:"https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: "⭐8.6",
      description: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    },

    {
      name: "Sachein",
      poster: "https://selzimg.s3.amazonaws.com/items/206048/21eg4za2qhw/original.jpg",
      rating: "⭐7.4",
      description: `Sachein and Shalini, who study in the same college, become close friends after he saves her injured father during an accident. However, their ego does not allow them to disclose their feelings.`,
    },
  ];
const [name, setName]=useState('');
const [poster, setPoster]=useState('');
const [rating, setRating]=useState('');
const [description, setDescription]=useState('');


const addMovie = (e)=> {
  e.preventDefault();
};

  return (
    <section>
    <div className="add-movie-form">
    <input
    value={name}
     placeholder="Name" 
     onChange={(event)=>setName(event.target.value)}
    />
    <input
    value={poster}
     placeholder="Poster url" 
     onChange={(event)=>setPoster(event.target.value)}
    />
    <input
    value={rating}
     placeholder="Rating" 
     onChange={(event)=>setRating(event.target.value)}
    />
    <input
    value={description}
     placeholder="description" 
     onChange={(event)=>setDescription(event.target.value)}
    /> 

     <Button onClick={addMovie} size="large" color="primary" variant="contained">
 Add Movie
</Button>
     </div>
      <div className="movie-list">
        {movies.map((mv,index) => (
          <Movie
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            description={mv.description}
          />
        ))}
      </div>
    </section>

  
  );
}

function Movie({ name, poster, rating, description }) {
  return (
    <div className="movie-container">
      <img
       className="movie-poster" 
       src={poster} 
       alt={name} 
       />
      <div className="movie-details">
      <h2>{name}</h2>
      <p>{rating}</p>
    </div>
    <p>{description}</p>
    </div>
  );
}

export default App;
