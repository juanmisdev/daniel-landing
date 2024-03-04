import Gallery from "react-image-gallery";
const ImageGallery = (Gallery as any).default ?? Gallery;
import 'react-image-gallery/styles/css/image-gallery.css'

function Carrusel() {

    const images = [
        {
            original: 'https://i.ibb.co/HPfXZw4/daniel11.jpg',
        },
        {
          original: 'https://i.ibb.co/kK81JZc/daniel1.jpg',
      },
      {
        original: 'https://i.ibb.co/QPxBjXq/daniel9.jpg'
      },
      {
        original: 'https://i.ibb.co/Bjb7C1W/daniel8.jpg'
      },
      {
        original: 'https://i.ibb.co/R7z2BQB/daniel7.jpg'
      },
      {
        original: 'https://i.ibb.co/FDXyV3H/daniel6.jpg'
      },
      {
        original: 'https://i.ibb.co/NNtWSXj/daniel4.jpg'
      },
      {
        original: 'https://i.ibb.co/44SrjNy/daniel3.jpg'
      },
      {
        original: 'https://i.ibb.co/M2xFNMz/daniel13.jpg'
      },
      {
        original: 'https://i.ibb.co/p3T8VHm/daniel12.jpg'
      },
      {
        original: 'https://i.ibb.co/7rk8VPv/daniel14.jpg'
      },
      {
        original: 'https://i.ibb.co/GQ5mNxP/daniel16.jpg'
      },
      {
        original: 'https://i.ibb.co/NZCbJsh/daniel17.jpg'
      },
      {
        original: 'https://i.ibb.co/rt86KGv/daniel18.jpg'
      },
      {
        original: 'https://i.ibb.co/yVRC7J9/daniel19.jpg'
      },
      {
        original: 'https://i.ibb.co/160dxSV/daniel15.png'
      }

    ]

  return (
    <div>
        { <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} showThumbnails={false}/> }
    </div>
  )
}

export default Carrusel


// https://ibb.co/JmXcrsK
// https://ibb.co/WKHXzd9
// https://ibb.co/KXS226z
// https://ibb.co/82zKCpC
// https://ibb.co/7CFsdqq
// https://ibb.co/ZN0gyBx
// https://ibb.co/dGDQ6QS
// https://ibb.co/wRFymBq
// https://ibb.co/THwfcHH
// https://ibb.co/z4LPBrk
// https://ibb.co/G0bYbqP