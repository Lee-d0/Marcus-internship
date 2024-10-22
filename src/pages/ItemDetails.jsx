import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SkeletonDetail from "../components/UI/SkeletonDetail";

const ItemDetails = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState([])
  const [loading, setloading] = useState(false)

  async function ItemDetail() {
    setloading(true)
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`)
    setDetail(data)
    setloading(false)
    console.log(data)
    
  }



  useEffect(() => {
    window.scrollTo(0, 0);
    ItemDetail()
  }, []);


  return (
     <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            {loading ? <SkeletonDetail/> :
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={detail.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{detail.title} #{detail.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {detail.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {detail.likes}
                    </div>
                  </div>
                  <p>
                    {detail.description}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detail.ownerId}`}>
                            <img className="lazy" src={detail.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detail.ownerId}`}>{detail.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${detail.creatorId}`}>
                            <img className="lazy" src={detail.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${detail.creatorId}`}>{detail.creatorName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{detail.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
