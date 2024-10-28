import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonNewItems from "../UI/SkeletonNewItems.jsx"




import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ExploreItems = () => {
  const [explore, setExplore] = useState([])
  const [visible , setVisible] = useState(8)
  const [loading , setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  
  

  const handleAdd = () => {
    setVisible(visible + 4)
  }



  async function  Explore() {
    setLoading(true)
    const {data} =await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
    setExplore(data)
    setLoading(false)
   
  }
  const sortedProducts = [...explore].sort((a, b) => {
    if (sortOrder === 'price_low_to_high') {
      return a.price - b.price; 
    } else if (sortOrder === 'price_high_to_low'){
      return b.price - a.price;
    }else if(sortOrder === 'likes_high_to_low'){
      return b.likes - a.likes

    }
  });

   

  useEffect(()=> {
    Explore()
    const intervalId = setInterval(() => {
      setExplore(prevItem => 
        prevItem.map(item => ({
          ...item,
          countdown: item.expiryDate ? Math.max(0,
          item.expiryDate - Date.now()) : null
        }))
      )
    }, 1000);
    return () => clearInterval(intervalId)
    
    
   
  },[])
  function formatCountDown(ms){
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms/ (1000 * 60)) % 60;
    const hours = Math.floor(ms/ (1000 * 60 * 60))
    return `${hours}h:${minutes}m:${seconds}`;
  }
 


  
  
 
  return (

    
    <>
      <div data-aos="fade-in" data-aos-duration="1000">
        <form action="#">
        <select id="filter-items" defaultValue="" value={sortOrder} onChange={handleSortChange} >
          <option value="default">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
        </form>
      </div>
    {loading ? <SkeletonNewItems/> : sortedProducts.slice(0, visible).map((explore, index) => (
      <div
        key={index}
        className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        style={{ display: "block", backgroundSize: "cover" }}
        data-aos="fade-in" data-aos-duration="1000"
      >
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to={`/author/${explore.authorId}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            >
              <img className="lazy" src={explore.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          {explore.expiryDate && <div className="de_countdown">
                  <span  className="timer__hour">{formatCountDown(explore.countdown)}</span>
                  
                </div>}

          <div className="nft__item_wrap">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <Link to={`/item-details/${explore.nftId}`}>
              <img src={explore.nftImage} className="lazy nft__item_preview" alt="" />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to={`/item-details/${explore.nftId}`}>
              <h4>{explore.title}</h4>
            </Link>
            <div className="nft__item_price">{explore.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{explore.likes}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
      {visible < 16 &&  <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={handleAdd} data-aos="zoom-in-up" data-aos-duration="1000">
          Load more
        </Link>
      </div>}
    
    </>
  );
};

export default ExploreItems;
