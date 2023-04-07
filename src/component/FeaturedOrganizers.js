import React, { useState, useEffect } from "react";
import { getFeaturedOrganizers } from "../config/MyServices";

export const FeaturedOrganizers = () => {
  const [featuredOrg, setFeaturedOrg] = useState([]);

  useEffect(() => {
    getFeaturedOrganizers().then((res) => {
      setFeaturedOrg(res.data);
    });
  }, []);

  const removeCard = (index) =>{
      const removeCard = featuredOrg.filter((currEle,i)=>{
          return i !== index
      });
      setFeaturedOrg(removeCard);
  }
  return (
    <>
      {featuredOrg.map((currEle,i) => {
        return (
          <>
            <div className="col-md-3  item rmvFetOrgCard" key={currEle.id}>
              <div className="card item-card card-block cardSecBody">
                <div className="foInnerCard">
                  <h4 className="item-card-title text-end">
                    <i
                      className="fa fa-remove removeCard"
                      aria-hidden="true" onClick={() =>removeCard(i)}
                    ></i>
                
                  </h4>
                  <img
                    src={`image/${currEle.organizers_img}`}
                    classNameName="img-fluid foImg"
                    alt=""
                  />
                  <h5 className="card-title  mt-3 foHeading addDotExtrString">
                    {currEle.organizers_name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {currEle.follow} Followers
                  </h6>
                </div>
                <button type="submit" className="foBtn">
                  Follow
                </button>
              </div>
            </div>
          </>

        );

      })}    
    </>
  );
};
