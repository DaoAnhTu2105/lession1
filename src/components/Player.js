import React from "react";
import { players } from "../shared/ListOfPlayers";
import { useState } from "react";

const Player = () => {
  const [player, setPlayers] = useState([]);
  return (
    <>
      <div className="main-container">
        {console.log(player)}
        <div className="grid-container">
          {players.map((p) => (
            <div className="grid-item" key={p.id}>
              <div className="card">
                <img src={p.img} alt="" />
                <h3>{p.name}</h3>
                <p className="title">{p.club}</p>
                <p>
                  <button
                    onClick={() => {
                      setPlayers(p);
                    }}
                  >
                    <a href="#popup1">Detail</a>
                  </button>
                </p>
              </div>
            </div>
          ))}
          <div id="popup1" className="overlay">
            <div className="popup">
              <img src={player.img} alt="" />
              <h2>{player.name}</h2>
              <a className="close" href="/#">
                &times;
              </a>
              <div className="content">{player.info}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
