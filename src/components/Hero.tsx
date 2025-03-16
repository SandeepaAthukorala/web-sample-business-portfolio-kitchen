import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Design Your Kitchen with the Experts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Eco-friendly Design & Precision
          </p>
          <button 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
            onClick={() => scrollToSection('portfolio')}
          >
            View our portfolio
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
