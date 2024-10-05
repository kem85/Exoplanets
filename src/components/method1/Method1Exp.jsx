import './Method1.css';
function Explain(){

    return (

        
        <div className="exoplanetSection" style={{height:'100%',width:'40%',overflow:'scroll'}}>
  <h1>Exploring Distant Worlds: The Quest to Discover Exoplanets</h1>
  <p>
    In the vast expanse of our Milky Way galaxy, countless stars twinkle, and around many of them, new worlds – exoplanets – quietly orbit. While the distances are mind-boggling, stretching across thousands of light-years, scientists have developed ingenious methods to uncover these distant worlds, revealing secrets hidden in the stars.
  </p>
  <p>
    In fact, NASA's Kepler Space Telescope has shown us something astonishing: there are more planets than stars in our galaxy! That means countless possibilities of unexplored worlds, perhaps even ones similar to Earth, waiting to be discovered. But how exactly do we find these planets, especially when even the closest known exoplanet, Proxima Centauri b, is an incredible 4 light-years away?
  </p>

  <h2>The Science Behind the Discovery: How Do We Find Exoplanets?</h2>
  <p>
    The process of finding exoplanets is like trying to spot a firefly next to a lighthouse from thousands of miles away. Yet, through brilliant techniques and advanced technology, astronomers have managed to discover over 5,000 exoplanets – and counting! But how?
  </p>

  <p>
    There are five main methods that scientists use, each one as fascinating as the next. However, two methods stand out as the most reliable: the <strong>Transit Method</strong> and the <strong>Radial Velocity Method</strong>.
  </p>

  <h3>Transit Method: Detecting the Shadows of Other Worlds</h3>
  <p>
    Imagine this: you're gazing up at a distant star when suddenly, the light dims ever so slightly. What's happening? An exoplanet is passing in front of the star, temporarily blocking a small portion of its light. This minuscule drop in brightness, while tiny, gives scientists the clue they need to know a planet is there. This is the magic of the <strong>Transit Method</strong> – one of the most powerful tools for spotting exoplanets.
  </p>

  <h3>Astrometry: Detecting Tiny Wobbles in Space</h3>
  <p>
    Now, let’s explore a lesser-known but equally fascinating method: <strong>Astrometry</strong>. While it may not have uncovered as many planets yet, the technique is incredible in its precision. When a planet orbits a star, it exerts a small gravitational pull, causing the star to “wobble” ever so slightly in relation to other nearby stars.
  </p>

  <p>
    Astrometry tracks these tiny wobbles by capturing a series of images and comparing the star’s position against the stars around it. It’s like noticing if a leaf in the wind moves ever so slightly compared to the trees in the background. These minute movements can reveal the presence of an exoplanet, even if the planet itself is invisible!
  </p>

  <div className="buttons">
  <Link to="/quiz">
        <button className="learn-more gloww-button">Learn More About Exoplanets</button>
      </Link>


    <button className="explore-methods button">Explore Detection Methods</button>
  </div>
</div>
        );

};

export default Explain;