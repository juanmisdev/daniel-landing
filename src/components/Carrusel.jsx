import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

function Carrusel() {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
    ]

  return (
    <div>
        <ImageGallery items={images} />
    </div>
  )
}

export default Carrusel