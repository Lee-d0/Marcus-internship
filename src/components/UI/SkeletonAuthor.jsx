import React from 'react'

const SkeletonAuthor = ({ width, height, borderRadius }) => {
  return (
    <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar mt-3">
                      <div className='skeleton-box' style={{width:"150px", height:"150px", borderRadius:"100%"}} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name flex-column">
                       <div className='skeleton-box mb-3' style={{width:"100px", height:"20px"}}/>
                       <div className='skeleton-box mb-3' style={{width:"100px", height:"20px"}}/>
                       <div className='skeleton-box mb-3' style={{width:"100px", height:"20px"}}/>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower"/>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              )
  
}

export default SkeletonAuthor