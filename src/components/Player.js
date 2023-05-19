import React from "react";
import { players } from "../shared/ListOfPlayers";

const Player = () => {
  return (
    <div className="main-container">
      <div className="grid-container">
        {players.map((p) => (
          <div className="grid-item">
            <div className="card">
              <img src={p.img} alt="" />
              <h3>{p.name}</h3>
              <p className="title">{p.club}</p>
              <p>
                <button> Detail</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Player;
