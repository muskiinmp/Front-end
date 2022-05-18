import React from 'react'
import Carousel from 'react-elastic-carousel'

import './CarouselComponent.css'

function CarouselComponent() {

    var items = [
        { img: "https://i.imgur.com/n3p7hel.jpg" },
        { img: "https://i.imgur.com/WUcm7gm.jpg" },
        { img: "https://static.wixstatic.com/media/36ee3b_ccb382c739b94ef09a41ccc362928853~mv2.jpg/v1/fill/w_1349,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ee3b_ccb382c739b94ef09a41ccc362928853~mv2.jpg" },
    ]

    return (
        <div className="rec.rec-arrow">
            <Carousel isRTL={false} enableAutoPlay={true} autoPlaySpeed={8000}>
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