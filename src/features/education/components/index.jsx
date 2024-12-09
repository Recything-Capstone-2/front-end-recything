import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from './HeroSection';
import PopularArticle from './PopularArticle';
import OtherArticlesSection from './OtherArticlesSection';


const Education = () => {
  const [articles, setArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  return (
    <main>

      {/* Hero */}
        <HeroSection />

      {/* Popular Article Section */}
        <PopularArticle/>

      {/* Popular Article Section */}
      <OtherArticlesSection/>
        
    </main>
    
  );
};

export default Education;