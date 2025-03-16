import { Ruler, Palette, PenTool as Tools, Clock, Shield, Award } from 'lucide-react';

const services = [
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "Custom Design",
    description: "Personalized kitchen layouts tailored to your space and lifestyle needs."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Material Selection",
    description: "Expert guidance in choosing the finest materials and finishes for your kitchen."
  },
  {
    icon: <Tools className="w-8 h-8" />,
    title: "Professional Installation",
    description: "Skilled craftsmen ensuring precise and reliable installation."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timely Delivery",
    description: "Efficient project management to complete your kitchen on schedule."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Guarantee",
    description: "10-year warranty on all our installations and materials."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "After-sale Support",
    description: "Dedicated support team for maintenance and queries post-installation."
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive kitchen design and installation services, 
            ensuring every detail meets our exceptional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="text-amber-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
