import React from "react";

function Body() {
    
    const memeArray = [
        {
            path: "../images/image1.png"
        },
        {
            path: "../images/image2.png"
        },
        {
            path: "../images/image3.png"
        },
        {
            path: "../images/image4.png"
        },
        {
            path: "../images/image5.png"
        },
        {
            path: "../images/image6.jpeg"
        },
    ]

    const [count, setCount] = React.useState(0);

    function changeCount() {
        setCount((prevCount) => {

            return (prevCount > 4 ? 0 : prevCount + 1)
        })
    }
    
    const [textBody, setTextBody] = React.useState({
        upperText: "",
        lowerText: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setTextBody((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(textBody)

    return (
    <div className="bodyContainer">
        <div className="bodyHolder">
            <div className="inputHolder">
                <div className="leftInput">
                <input 
                    type="text" 
                    placeholder="Upper Text"
                    onChange={handleChange}
                    name="upperText"
                />
                </div>
                <div className="rightInput">
                <input 
                    type="text" 
                    placeholder="Lower Text"
                    onChange={handleChange}
                    name="lowerText"
                />
                </div>
                
            </div>
            <div>
                <button type="button" onClick={changeCount} >Get new image</button>
            </div>
            <div className="imageContainer">
          <div className="imageWithText" >
            <img src={memeArray[count].path} alt="Your Image" />
            <h2 className="meme--text top">{textBody.upperText}</h2>
            <h2 className="meme--text bottom">{textBody.lowerText}</h2>
          </div>
        </div>
        </div>
    </div>

    )
}
 
export default Body;