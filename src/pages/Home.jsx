import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to CreatorVerse! 🎥</h1>
            <h3>Join the ultimate creator fanbase community!</h3>
            <p>CreatorVerse Fanbase is a vibrant online community that connects fans of thousands of content creators from around the globe. Here, fans can showcase their favorite creators, share posts, and discover new talent by exploring creators celebrated by others. Join the conversation and dive into the diverse world of content creation!</p>
            <Link to="/gallery"><button className="explore-btn">Explore Now</button></Link>
        </div>
    );
};

export default Home;