import { Link } from "react-router-dom"

const SkeletonAuthorItems = ({ width, height, borderRadius }) => {
return (
    new Array(8).fill(0).map((authorInfo, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <div className="nft__item">
            <div className="author_list_pp">
              <Link to="">
                <div className="skeleton-box" style={{width:"40px", height:"40px", borderRadius:"100%"}} alt="" />
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
              <Link to="/item-details">
                <div
                  style={{width:'250px', height:"200px"}}
                  className="lazy nft__item_preview skeleton-box"
                  alt=""
                />
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4 className="skeleton-box" style={{width:"100px", height:"20px"}}></h4>
              </Link>
              <div className="nft__item_price skeleton-box" style={{width:"50px", height:"20px"}}>{authorInfo.price}</div>
              <div className="nft__item_like">
                <i className="fa fa-heart"></i>
                <span>{authorInfo.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))
)
}

export default SkeletonAuthorItems