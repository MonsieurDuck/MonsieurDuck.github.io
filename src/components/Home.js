import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img src="./roundDuck.png" className="Home-image" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Dunstan's Wang Website!</h1>
                        <p>
                            Currently in development
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;