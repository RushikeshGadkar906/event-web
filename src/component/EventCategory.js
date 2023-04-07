import React, { useState, useEffect } from "react";
import { getEventCategory } from "../config/MyServices";

export const EventCategory = () => {
  const [eventCat, setEventCat] = useState([]);

  useEffect(() => {
    getEventCategory().then((res) => {
      setEventCat(res.data);
    });
  }, []);

  return (
    <>   
        {eventCat.map((currEle) => {
          return (
            <>
              <div class="card eventCardBody border-0" key={currEle.id}>
                <div class="card-body eventCard">
                  <h5 class="card-title">{currEle.event_name}</h5>
                  <p>{currEle.event_desc}</p>
                  <span class="dot">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </div>
            
                <img src={`image/${currEle.category_img}`} className="img-fluid eventImg" alt="" />
              </div>
            </>
          );
        })}     
    </>
  );
};
