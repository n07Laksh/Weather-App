import React from 'react'

const SearchComponent = (props) => {
  return (
    <div>
      <div className='my-5'>
            <h3 className=''>{props.data.location.name}, {props.data.location.region} {props.data.location.country}</h3>
            <div className="mt-4">
                            <div className='row row-cols-auto'>
                                <div className='col'>
                                    <img className='icon-img' src={props.data.current.condition.icon} alt={props.data.current.condition.text} width="100px" height="100px" />
                                </div>
                                <div className='col'>
                                    <span className="display-3 ">{props.data.current.temp_c.toPrecision(2)}</span>
                                    <span className='display-4'>&deg;</span>
                                    <span className="display-5">C</span>
                                </div>
                            </div>
                            <div className='mx-4 mt-2'>{props.data.current.condition.text}</div>
                        </div>
                        <div className='my-3'>
                            <div>Feels like {(props.data.current.feelslike_c).toPrecision(2)}&deg; C</div>
                            <div>Wind {(props.data.current.wind_kph).toFixed(0)} km/h</div>
                            <div>Humidity {(props.data.current.humidity)}%</div>
                            <div>Wind Direction {(props.data.current.wind_dir)}</div>
                            <div>Cloud {(props.data.current.cloud)}%</div>
                        </div>
            </div>
    </div>
  )
}

export default SearchComponent
