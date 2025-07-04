import React, { useState } from "react";
interface Props{
    items:String[];
    heading:String;
    onSelect:(item:String)=>void;
}
function ListGtoup({items,heading,onSelect}:Props) {
    const [text, setText] = useState("");
    const [selectedIndex, setIndex] = useState("");
    const handleon = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div>
                <h1>{heading}</h1>
                <ul className="list-group">
                    {items.length === 0 && <p>not found</p>}
                    {items.map((item, index) => (<li className={selectedIndex=== index ? "list-group-item active" : "list-group-item"} onClick={() =>{setIndex(index); onSelect(item);}} key={item}>{item}</li>))}
                </ul>
            </div>
            <div className="form-floating">
                <textarea value={text} onChange={handleon}  className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Enter Text</label>
            </div>
            <div className="container">
                <textarea name="word" id="word" value={text.toLocaleUpperCase()}></textarea>
                <img src="https://th.bing.com/th/id/OIP.3z76z4KZtcQOww5gkqeeMgHaFz?rs=1&pid=ImgDetMain" style={{height:'200px', width:'200px'}} className="img-thumbnail" alt="img" />
            </div>
        </>
    )
}
export default ListGtoup;