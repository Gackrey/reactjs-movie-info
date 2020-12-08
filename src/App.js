import React, { useState } from "react";
import "./styles.css";
var actionmovieslist = [
  {
    name: "Avengers Endgame",
    rating: "8.4/10",
    url:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
  },
  {
    name: "John Wick",
    rating: "7.4/10",
    url:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"
  },
  {
    name: "Mission Impossible",
    rating: "7.1/10",
    url:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg"
  }
];
var frictionmovieslist = [
  {
    name: "Interstellar",
    rating: "8.6/10",
    url:
      "https://resizing.flixster.com/6sVRqWCOwjCwRJzkF5kemLOxeg4=/206x305/v1.bTsxMTE5MDg2MDtqOzE4NzE0OzEyMDA7ODAwOzEyMDA"
  },
  {
    name: "Avatar",
    rating: "7.8/10",
    url:
      "https://static.toiimg.com/thumb/msid-61237190,width-219,height-317,imgsize-26276/61237190.jpg"
  },
  {
    name: "Jurassic Park",
    rating: "8.1/10",
    url:
      "https://resizing.flixster.com/1y1C_khigsVpVnjXIJGRCi1yda8=/206x305/v1.bTsxMTE2ODg4MDtqOzE4NzE0OzEyMDA7ODAwOzEyMDA"
  }
];
var comedymovieslist = [
  {
    name: "Hera Pheri",
    rating: "8.2/10",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61qjOvyARKJBW42AbX6XhNn-6na1bXTQsuA&usqp=CAU"
  },
  {
    name: "Dhamaal",
    rating: "7.3/10",
    url: "https://upload.wikimedia.org/wikipedia/en/6/60/Dhamaal_2007.jpg"
  },
  {
    name: "Golmaal",
    rating: "7.4/10",
    url: "https://timesofindia.indiatimes.com/photo/61295394.cms"
  }
];

// var frictionmovieslist = {
//   Interstellar: "4.9/5",
//   Avatar: "4.3/5",
//   "Jurassic Park": "4.2/5"
// };
// var comedymovieslist = {
//   "Hera Pheri": "4.8/5",
//   Dhamaal: "4.3/5",
//   Golmaal: "4.1/5"
// };
export default function App() {
  const [movielist, setmovielist] = useState("");
  if (movielist === "") {
    var details = actionmovieslist.map((item) => {
      return (
        <div className="listitems" key={item.name}>
          <img src={item.url} alt="" />
          <p style={{ margin: 0, fontStyle: "italic" }}>{item.name}</p>
          <small>IMDB: {item.rating}</small>
        </div>
      );
    });
    setmovielist(details);
  }
  function actionmovieset() {
    var details = actionmovieslist.map((item) => {
      return (
        <div className="listitems" key={item.name}>
          <img src={item.url} alt="" />
          <p style={{ margin: 0, fontStyle: "italic" }}>{item.name}</p>
          <small>IMDB: {item.rating}</small>
        </div>
      );
    });
    setmovielist(details);
  }
  function fictionmovieset() {
    var details = frictionmovieslist.map((item) => {
      return (
        <div className="listitems" key={item.name}>
          <img src={item.url} alt="" />
          <p style={{ margin: 0, fontStyle: "italic" }}>{item.name}</p>
          <small>IMDB: {item.rating}</small>
        </div>
      );
    });
    setmovielist(details);
  }
  function comedymovieset() {
    var details = comedymovieslist.map((item) => {
      return (
        <div className="listitems" key={item.name}>
          <img src={item.url} alt="" />
          <p style={{ margin: 0, fontStyle: "italic" }}>{item.name}</p>
          <small>IMDB: {item.rating}</small>
        </div>
      );
    });
    setmovielist(details);
  }
  return (
    <div className="App">
      <h1>📽️ Movies Club</h1>
      <p>Checkout your favorite movies.Select a genre to get started</p>
      <button onClick={actionmovieset}>Action</button>
      <button onClick={fictionmovieset}>Fiction</button>
      <button onClick={comedymovieset}>Comedy</button>
      <hr />
      <div id="movielist">{movielist}</div>
    </div>
  );
}
