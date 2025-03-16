import { useNavigate } from 'react-router-dom';

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "country",
    title: "Country Collection",
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80",
    category: "Traditional"
  },
  {
    id: "concept",
    title: "Concept Collection",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
    category: "Modern"
  },
  {
    id: "classic",
    title: "Classic Collection",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
    category: "Classic"
  },
  {
    id: "luxe",
    title: "Luxe Collection",
    image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80",
    category: "Luxury"
  }
];

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div id="portfolio" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
