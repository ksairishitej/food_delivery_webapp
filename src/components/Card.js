import React from 'react'
export default function Card(props) {
  let options = props.options[0];
  let priceOptions = options ? Object.keys(options) : [];
  const handleAdd = () => {

  }
  return (
    <div>
      <div data-bs-theme="dark">
        <div className="card mt-3" style={{ width: "16rem", maxHeight: "350px", height: "auto", background: "black" }}>
          <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: "150px", objectFit: "cover" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <select className="m-2 h-100 bg-success text-light rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success text-light rounded">
              {priceOptions.map((data) => (
                <option key={data} value={data}>{data}</option>
              ))}
            </select>
            <br></br>
            <div className="d-inline h-100 fs-4">
              TOTAL
            </div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAdd}>AddToCart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
