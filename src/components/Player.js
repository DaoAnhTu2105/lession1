import React from "react";

const Player = () => {
  return (
    <div className="main-container">
      <div className="grid-container">
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/cr.jpg" alt="" />
            <h3>Cristiano Ronaldo</h3>
            <p className="title">Manchester United</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/kante.jpg" alt=""></img>
            <h3>Kante</h3>
            <p className="title">Chealsea</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/messi.jpg" alt=""></img>
            <h3>Messi</h3>
            <p className="title">PSG</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/neymar.jpg" alt=""></img>
            <h3>Neymar</h3>
            <p className="title">PSG</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/kane.jpg" alt=""></img>
            <h3>Kane</h3>
            <p className="title">Tottemham</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="card">
            <img src="assets/images/haaland.jpg" alt=""></img>
            <h3>Haaland</h3>
            <p className="title">Manchester City</p>
            <p>
              <button> Detail</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
