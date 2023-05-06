import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
let api = "https://api.tvmaze.com/search/shows?q=all"
import "./Home.css"


export default function Home() {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleClick = (name, language, img, status, type) => {
        navigate("/form", { state: { name: name, language: language, img: img, status: status, type: type } });
    };

    const getApi = async (http) => {
        try {
            const response = await fetch(http);
            const json = await response.json();
            console.log(json)

            setData(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApi(api);
    }, []);

    // Move the map function outside the render function
    const renderData = data.map((ele) => {

        const imageUrl = ele.show.image ? ele.show.image.medium : "https://static.tvmaze.com/uploads/images/medium_portrait/33/82953.jpg";
        const summaryText = ele.show.summary.replace(/<[^>]+>/g, "");
        return (
            <div className="card" key={ele.show.id}>
                <div className="sce1">
                    <img src={imageUrl} alt="" />
                    <ul>
                        <li>
                            <h2>{ele.show.name}</h2>
                        </li>
                        <li>{`Runtime:- ${ele.show.runtime}`}</li>
                        <li>{`Language:- ${ele.show.language}`}</li>
                        <li>{`Runtime:- ${ele.show.rating.average}`}</li>
                    </ul>
                </div>
                <div className="sce2">
                    <h1>{ele.show.name}</h1>
                    <p>{summaryText}</p>
                    <ul>
                        <li>{`Status :-  ${ele.show.status}`}</li>
                        {/* <li>{`officialSite:-  ${ele.show.officialSite}`}</li> */}
                        <li>officialSite:-, <Link>{ele.show.officialSite}</Link></li>
                        <li>{`Imdb=:- ${ele.show.externals.imdb}`}</li>
                        <li>{`Type=:- ${ele.show.type}`}</li>
                    </ul>
                    <button className="btn" onClick={() => handleClick(ele.show.name, ele.show.language, imageUrl, ele.show.status, ele.show.type)}> Book Now</button>
                </div>
            </div>
        )
    });

    return (
        <div>
            <h1 className='mainheading'>MOVIE HUB</h1>
            {renderData}
        </div>
    );
}
//[0].show.status