import React from "react";
import styles from './NewsItem.module.css';


// 부모 컴포넌트에서 기사 관련된 props 전달받음
const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage} = article;

    return(        
        
        <div className={styles.newsitemblock}>
            {urlToImage && (
                
                <div className={styles.thumbnail}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <image src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}

            <div className={styles.contents}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </div>

    );
}

export default NewsItem;