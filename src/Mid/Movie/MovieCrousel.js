import React from 'react'
import Slider from 'react-slick';

function MovieCrousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };


    let data = [
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },
        { img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" },

    ]


    return (
        <div>
            <Slider {...settings}>
                {
                    data.map((item, index) => {
                        return (
                            <div>
                                <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' />
                            </div>

                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default MovieCrousel