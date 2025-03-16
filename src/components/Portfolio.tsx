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
    image: "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143139/10_yb4ywu.webp",
    category: "Traditional"
  },
  {
    id: "concept",
    title: "Concept Collection",
    image: "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143142/2_jh4pib.webp",
    category: "Modern"
  },
  {
    id: "classic",
    title: "Classic Collection",
    image: "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143140/8_bjdm2o.webp",
    category: "Classic"
  },
  {
    id: "luxe",
    title: "Luxe Collection",
    image: "https://res.cloudinary.com/das8wrfd1/image/upload/v1742143143/5_yrmzej.webp",
    category: "Luxury"
  }
];

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div id="portfolio" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[400px] object-cover transition-all duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div>
                  <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                  <p className="text-amber-500 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
