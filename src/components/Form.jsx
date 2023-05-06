import React, { useEffect } from 'react'
import "./Home.css"
import { useLocation } from 'react-router-dom'

export default function Form() {
    const [detail, setDetail] = React.useState({

    })

    const [formData, setFormData] = React.useState({
        email: "", name: "", date: "", number: ""
    })

    const location = useLocation()
    useEffect(() => {
        setDetail(location.state);
    }, []);

    const handleChange = (event) => {
        const { value, type, name, checked } = event.target

        setFormData((preData) => {
            return {
                ...preData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)

    }

    return (
        <div className='form'>


            <div className="form-cardDetail">

                <img src={detail.img} alt="" />



            </div>
            <div className="first-form">
                <h1>{`${detail.name}...`}</h1>
                {/* <h1>{detail.name}</h1> */}
                <h2>Description</h2>

                <ul>

                    <li>{`Language:-${detail.language}`}</li>
                    <li>{`Status:-${detail.status}`}</li>
                    <li>{`Type:- ${detail.type}`}</li>
                </ul>



                <h2 className='bookingHeading'>Book Now!!</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange} />
                    <input
                        type="email"
                        placeholder='Email Adress'
                        name='email'
                        value={formData.email}
                        onChange={handleChange} />

                    <input
                        type="number"
                        placeholder='Number of person'
                        name='number'
                        value={formData.number}
                        onChange={handleChange} />

                    <input
                        type="date"
                        placeholder='confirm password'
                        name='date'
                        value={formData.date}
                        onChange={handleChange} />

                    <button className='btnForm'>Submit</button>

                </form>
            </div>
        </div>
    )
}
