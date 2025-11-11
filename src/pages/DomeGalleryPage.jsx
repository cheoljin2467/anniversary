import DomeGallery from "../Components/DomeGallery";
import img1 from '../assets/DomeGalleryImg1.jpg';
import img2 from '../assets/DomeGalleryImg2.jpg';
import img3 from '../assets/DomeGalleryImg3.jpg';
import img4 from '../assets/DomeGalleryImg4.jpg';
import img5 from '../assets/DomeGalleryImg5.jpg';
import img6 from '../assets/DomeGalleryImg6.jpg';
import img7 from '../assets/DomeGalleryImg7.jpg';


export default function DomeGalleryPage() {
  const myimages = [
    { src: img1, alt: 'Gallery 1' },
    { src: img2, alt: 'Gallery 2' },
    { src: img3, alt: 'Gallery 3' },
    { src: img4, alt: 'Gallery 4' },
    { src: img5, alt: 'Gallery 5' },
    { src: img6, alt: 'Gallery 6' },
    { src: img7, alt: 'Gallery 7' },
  ];


  return (
    <div className="w-screen h-screen">
      <DomeGallery
        images={myimages}
        grayscale={false}
        
       />
    </div>
  );
}