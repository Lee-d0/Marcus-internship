import React from 'react'
import { Link } from 'react-router-dom'

const SkeletonDetail = ({ width, height, borderRadius }) => {
  return (
    <div className="row">
              <div className="col-md-6 text-center">
                <img
                  
                  className="img-fluid img-rounded mb-sm-30 nft-image skeleton-box"
                  style={{width, height}}
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2 className='skeleton-box' style={{width, height}}></h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {}
                    </div>
                  </div>
                  <p>
                    {}
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">{}</Link>
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
                          
                        </div>
                        <div className="author_list_info">
                          <Link to="/author">{}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                     
                      <span>{}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SkeletonDetail