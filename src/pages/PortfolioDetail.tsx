import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const portfolioDetails = {
  country: {
    title: "Country Collection",
    description: "Traditional designs with a modern twist, perfect for countryside homes.",
    images: [
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143141/4_bepmrn.webp",
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/9_vutvcc.webp",
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143139/10_yb4ywu.webp",
      
    ]
  },
  concept: {
    title: "Concept Collection",
    description: "Innovative and forward-thinking designs for the modern home.",
    images: [
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143141/3_b4eddh.webp",
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143143/7_lxaygv.webp", 
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143142/2_jh4pib.webp"
    ]
  },
  classic: {
    title: "Classic Collection",
    description: "Timeless designs that never go out of style.",
    images: [
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/6_kn79gx.webp",
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/8_bjdm2o.webp"
    ]
  },
  luxe: {
    title: "Luxe Collection",
    description: "Premium designs for those who demand the very best.",
    images: [
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/12_kxbmi0.webp",
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143139/11_ghradd.webp", 
      "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/1_omdy71.webp"
    ]
  }
};




export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const collection = id ? portfolioDetails[id as keyof typeof portfolioDetails] : null;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!collection) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Collection not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {collection.title}
          </h1>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl">{collection.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collection.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              <LazyLoadImage
                src={image}
                alt={`${collection.title} - Image ${index + 1}`}
                effect="opacity"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              
                <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex justify-center">
                <span className="text-white text-lg font-bold">Explore This Masterpiece</span>
                </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            
            <div className="relative max-w-4xl w-full">
              <img
                src={collection.images[selectedImage]}
                alt={`Enlarged view - ${collection.title}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">{selectedImage + 1} / {collection.images.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}