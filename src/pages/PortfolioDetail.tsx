import { useParams } from 'react-router-dom';

const portfolioDetails = {
  country: {
    title: "Country Collection",
    description: "Traditional designs with a modern twist, perfect for countryside homes.",
    images: [
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&q=80"
    ]
  },
  concept: {
    title: "Concept Collection",
    description: "Innovative and forward-thinking designs for the modern home.",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80"
    ]
  },
  classic: {
    title: "Classic Collection",
    description: "Timeless designs that never go out of style.",
    images: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80"
    ]
  },
  luxe: {
    title: "Luxe Collection",
    description: "Premium designs for those who demand the very best.",
    images: [
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80"
    ]
  }
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const collection = id ? portfolioDetails[id as keyof typeof portfolioDetails] : null;

  if (!collection) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Collection not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{collection.title}</h1>
        <p className="text-gray-400 text-lg mb-8">{collection.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collection.images.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`${collection.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
