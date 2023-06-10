import React from 'react'
import UpdateTime from './UpdateTime'
// import RealDateTime from './RealDateTime'

function Home(props) {
console.log(props)
    return (
        <div>
            <div className="container text-light my-5">
                <h3>{props.data.location.name}, {props.data.location.region}</h3>

                <div className="mt-3">
                    <div className='row row-cols-auto'>
                        <div className='col'>
                            <img className='icon-img' src={props.data.current.condition.icon} alt={props.data.current.condition.text} width="100px" height="100px" />
                        </div>
                        <div className='col'>
                            <span className="display-1 ">{props.data.current.temp_c.toPrecision(2)}</span>
                            <span className='display-2'>&deg;</span>
                            <span className="display-4">C</span>
                        </div>
                    </div>
                    <div className='mx-4 mt-2'>{props.data.current.condition.text}</div>
                </div>

                <div>
                    <UpdateTime data={props.data} />
                </div>
                <br/>

                <div>
                    <div>Feels like {(props.data.current.feelslike_c).toPrecision(2)}&deg; C</div>
                    <div>Wind {(props.data.current.wind_kph).toFixed(0)} km/h</div>
                    <div>Humidity {(props.data.current.humidity)}%</div>
                    <div>Wind Direction {(props.data.current.wind_dir)}</div>
                </div>

            </div>
            {/* <RealDateTime data={props.data} /> */}
        </div>
    )
}

export default Home
