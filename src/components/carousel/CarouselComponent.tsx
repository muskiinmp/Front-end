import React from 'react'
import Carousel from 'react-elastic-carousel'

import './CarouselComponent.css'

function CarouselComponent() {

    var items = [
        { img: "https://static.wixstatic.com/media/36ee3b_6381cb94ea874b539a456cb5c75aa98f~mv2.jpg/v1/fill/w_1349,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ee3b_6381cb94ea874b539a456cb5c75aa98f~mv2.jpg"},
        { img: "https://static.wixstatic.com/media/36ee3b_cb0ba3f756c14be690803f1fe5ba6073~mv2.jpg/v1/fill/w_1349,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ee3b_cb0ba3f756c14be690803f1fe5ba6073~mv2.jpg"},
        { img: "https://static.wixstatic.com/media/36ee3b_cb2972f8547541eebae004bfc50b9117~mv2.jpg/v1/fill/w_1349,h_504,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ee3b_cb2972f8547541eebae004bfc50b9117~mv2.jpg"}
    ]

  return (
    <Carousel isRTL={false} disableArrowsOnEnd={false} enableAutoPlay={true} autoPlaySpeed={5000}>
        {
            items.map(item => (
                <>
                <img src={item.img} alt="Imagem" />
                </>
            ))
        }
    </Carousel>
  )
}

export default CarouselComponent