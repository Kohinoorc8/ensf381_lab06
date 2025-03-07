/**
 * Home.js
 * ENSF 381 Lab 6 Exercise 2
 * March 7th, 2025
 * 
 * Kohinoor Chauhan - 30204155
 * Sabrina Li - 30173044
 */

function Home(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {/* Welcome to the Home Page */}
        </div>
    );
}

export default Home;
