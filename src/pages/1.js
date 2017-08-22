import React from 'react'

const FirstSlide = () => (
    <div>
        <div className='left' >
            <h1> Who am I? </h1>
            <h2> Ryan Swart </h2>
            <img src="https://lh3.googleusercontent.com/1emdpcAWMqhL_X36hVVTcP-LUAs2wFZcw57jz3y28q5m1cu_STY7VwZ4wqQ3JSC96p1g_AU4-WtQCA=w320-h180-rw-no" />
            <p>
                Software Dev at VLT Labs.<br />
                Early Gatsby adopter, built <span> </span>
                <a href="https://app.xused.com/en/">XUsed</a> using Firebase + Gatsby
            </p>
        </div>
        <img src='static/images/xused.png' className='right'/>
    </div>
)

export default FirstSlide
