import React, { useEffect, useState } from 'react';
import styles from './GamesCarrousel.module.css';
import ContentCard from '../ContentCard/ContentCard';
import GamesRequest from '../../services/GamesRequest';

const GamesCarrousel = () => {
  let [games, setGames] = useState([]);

  useEffect(() => {
    new GamesRequest(true)
      .get()
      .then(res => setGames(res));
  }, []);

  return (
    <div>
      <h2>Games</h2>
      <div className={styles.gamesCarrousel}>
        {
          games.map(g => {
            return (
              <ContentCard
                style={{
                  width: "75%",
                  height: "440px",
                  display: "inline-block",
                  margin: "0 1em"
                }}
                content={g}
              />
            );
          })
        }
      </div>
      <div>
        <ContentCard>
          <a href="/games" className={styles.contentSeeMore}>
            See more...
          </a>
        </ContentCard>
      </div>
    </div>
  );
}

GamesCarrousel.propTypes = {};

GamesCarrousel.defaultProps = {};

export default GamesCarrousel;
