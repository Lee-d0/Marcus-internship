import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import axios from "axios";
import SkeletonNewItems from "../UI/SkeletonNewItems";
import SkeletonAuthorItems from "../UI/SkeletonAuthorItems";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AuthorItems = () => {
  const {id} = useParams()
  const [author, setAuthor] = useState([])
  const [authorName, setAuthorName] = useState([])
  const [loading, setLoading] = useState(false)

  async function AuthorInfo() {
    setLoading(true)
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)
    setAuthor(data.nftCollection)
    setLoading(false)
    
  }
  async function AuthorName() {
    setLoading(true)
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`)
    setAuthorName(data)
    setLoading(false)
    
  }
  useEffect(() => {
    AuthorInfo()
    AuthorName()
  },[])
  return (
    <div className="de_tab_content" data-aos="fade-in" data-aos-duration="1000">
      <div className="tab-1">
        <div className="row">
           {loading ? <SkeletonAuthorItems/> : author.map((authorInfo, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to="">
                    <img className="lazy" src={authorName.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
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
                  <Link to={`/item-details/${authorInfo.nftId}`}>
                    <img
                      src={authorInfo.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${authorInfo.nftId}`}>
                    <h4>{authorInfo.title}</h4>
                  </Link>
                  <div className="nft__item_price">{authorInfo.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{authorInfo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
