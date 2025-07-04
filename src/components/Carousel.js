import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carsoule">
          <div className="carousel-item active">
            <img src="/burger.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/pizza.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/cake.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Search bar positioned at the bottom of the image */}
        <div
          className="carousel-caption d-flex justify-content-center"
          style={{
            bottom: "10%", // Adjust position
            zIndex: "90",
          }}
        >
          <form className="d-flex w-75">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
