import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
export default function() {
  const [search, setsearch] = useState('')
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {  
        'Content-type': 'application/json'
      }
    })
    response = await response.json()
    setfoodCat(response[1])
    setfoodItem(response[0])
    //console.log(response[0],response[1])   
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div><Navbar /></div>
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
          <div className="d-flex w-75 justify-content-center">
            <input
            value={search}
            onChange={(e)=>{setsearch(e.target.value)}}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          </div>
      </div>
      <div className='m-3'>
        {
          foodCat.length > 0
            ? foodCat.map((data)=>{
              return (
                <div key={data._id} className='row mb-3'>
                  <div className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {foodItem.length > 0
                    ? foodItem.filter((item) => (item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLocaleLowerCase())

                    )).map((filterItems) => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6  my-1 col-lg-3' >
                          <Card foodName={filterItems.name}
                          options={filterItems.options}
                          imaSrc={filterItems.img}
                          ></Card>
                        </div>
                      )
                    })
                    : null
                  }
                </div>
              )
            })
            : <div></div>
        }
        <div></div>

      </div>
      <div><Footer /></div>
    </>
  )
}
