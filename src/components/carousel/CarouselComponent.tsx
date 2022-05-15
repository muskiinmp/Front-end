import React from 'react'
import Carousel from 'react-elastic-carousel'

import './CarouselComponent.css'

function CarouselComponent() {

    var items = [
        { img: "https://i.imgur.com/WUcm7gm.jpg" },
        { img: "https://i.imgur.com/n3p7hel.jpg" },
    ]

    return (
        <div className="rec.rec-arrow">
            <Carousel isRTL={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                {
                    items.map(item => (
                        <>
                            <img src={item.img} alt="Imagem" />
                        </>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CarouselComponent