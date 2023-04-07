import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from './component/Navbar';
import Main from "./component/Main";
import About from "./component/About";
import "./scss/style.scss";
import { EventCategory } from "./component/EventCategory";
import Header from "./component/Header/Header";
import { PopularEvent } from "./component/PopularEvent";
import { FeaturedOrganizers } from "./component/FeaturedOrganizers";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Event Category Section Start*/}
        <section>
          <h4 class="eventHeadline">
            Event Category <span class="viewAll"> VIEW ALL </span>
          </h4>
          <span class="headingUnderline1"></span>
          <span class="headingUnderline2"></span>
          <div class="row mt-3 eventSecBody">
            <EventCategory />
          </div>
        </section>
        {/* Event Category Section End */}

        {/* Popular Event Section Start */}
        <section>
          <h4 class="eventHeadline mt-4">
            Popular Event <span class="viewAll"> VIEW ALL </span>
          </h4>
          <span class="headingUnderline1"></span>
          <span class="headingUnderline2"></span>
          <div className="row  mt-4">
            <PopularEvent />
          </div>
        </section>
        {/* Popular Event Section End */}
        
        {/* Featured Organizers Section Start */}
        <section>
          <h4 class="eventHeadline mt-4">
          Featured Organizers <span class="viewAll"> VIEW ALL </span>
          </h4>
          <span class="headingUnderline1"></span>
          <span class="headingUnderline2"></span>
          <div className="row  mt-4">
            <FeaturedOrganizers />
          </div>
        </section>
        {/* Featured Organizers Section End */}
      </div>
    </>
  );
}

export default App;
