import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsCard() {
  const [articles, setArticles] = useState([]);

  // Function to fetch news from NewsAPI
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2025-01-10&sortBy=publishedAt&apiKey=3a87b2fb73094d77aefdc24e3906223c`
      );
      setArticles(response.data.articles.slice(0, 5)); // Get first 5 articles
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch news when component mounts and update every 10 sec
  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest Tech News</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-lg">
              <img src={article.urlToImage} className="card-img-top" alt="news" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description ? article.description.substring(0, 80) + "..." : "No description available."}
                </p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;
