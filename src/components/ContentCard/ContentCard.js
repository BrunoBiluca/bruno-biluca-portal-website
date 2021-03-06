import React from 'react';
import { useHistory } from "react-router-dom";
import styles from './ContentCard.module.css';
import placeholderImg from '../../images/placeholder.png';
import Category from '../Category/Category';

const ContentCard = (props) => {
  let history = useHistory();

  var content = props.content;

  if (!content)
    return (
      <div
        style={{ ...props.style }}
        className={`${styles.contentCard} ${styles.empty}`}
        onClick={props.onClick}
        data-testid="ContentCard"
      >
        {props.children}
      </div>
    );

  var featuredImage = content.featuredImage.thumbnail
    ? content.featuredImage.thumbnail
    : placeholderImg;

  function redirect() {
    history.push(content.link);
  }

  return (
    <div
      style={{ ...props.style }}
      className={styles.contentCard}
      data-testid="ContentCard"
      onClick={redirect}
    >
      <div className={styles.cardHeader}>
        <img src={featuredImage} alt="placeholder" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <div className={styles.cardCategories}>
            {
              content
                .categories
                .slice(0, 2)
                .map(c => (
                  <Category key={c.key} style={{ fontSize: "0.6em" }} category={c} />
                ))
            }
          </div>
          <div className={styles.cardDate}>
            {content.publishedAt}
          </div>
        </div>
        <div className={styles.cardContentBody}>
          <h3>{content.title}</h3>
          <p>
            {
              content.contentSummary.length > 100
                ? content.contentSummary.substring(0, 200) + "..."
                : content.contentSummary
            }
          </p>
        </div>
      </div>
    </div>
  );

}

ContentCard.propTypes = {};

ContentCard.defaultProps = {};

export default ContentCard;
