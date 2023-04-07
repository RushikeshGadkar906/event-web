import React, { useState, useEffect } from "react";
import { getPopularEvent } from "../config/MyServices";

export const PopularEvent = () => {
  const [popularEvnt, setpopularEvnt] = useState([]);

  useEffect(() => {
    getPopularEvent().then((res) => {
      setpopularEvnt(res.data);
    });
  }, []);  
  return (
    <>
        {popularEvnt.map((currEle) => {
          return (
            <>
              <div class="col-md-3" key={currEle.id}>
                <div class="card border-0">
                  <div class="musicImg">
                    <img src={`image/${currEle.event_img}`} className="card-img-top" alt="" />
                  </div>
                  
                  <div class="cardBody mt-3">
                    <section class="eventInfo">
                      <h6 class="card-subtitle mb-1 eventDT">{currEle.time}</h6>
                      <h5 class="card-title eventName">{currEle.event_name}</h5>
                      <h6 class="card-subtitle mb-1 eventDT text-muted">
                        {currEle.city}
                      </h6>
                    </section>
                    
                    <img src="image/share.png" className="shareImg" alt="" />
                    <div class="shareItems ">
                    <div><img src="image/whatapp.png" alt="" /></div>
                    <div><img src="image/fb.png" alt="" /></div>
                    <div><img src="image/insta.png" alt="" /></div>
                      {/* <div><img src="image/whatapp.png" alt=""></div>
                <div><img src="image/fb.png" alt=""></div>
                <div><img src="image/insta.png" alt=""></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
