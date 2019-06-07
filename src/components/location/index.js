import React from 'react'

function Location() {
    return (
        <div className="location_wrapper">
            <iframe 
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.630329278621!2d-57.59011078439516!3d-25.316621334625175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8f1d29849f9%3A0x930817a089994873!2sJockey+Club+del+Paraguay!5e0!3m2!1ses!2spy!4v1559932581860!5m2!1ses!2spy" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                 <div>
                     Location
                 </div>
            </div>
        </div>
    )
}

export default Location
