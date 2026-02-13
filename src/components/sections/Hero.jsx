import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-white text-ark-dark relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeIn_0.6s_ease]">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight text-ark-dark">
              Building <span className="text-ark-red">Visions</span> Into Reality
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Streamline your construction projects with our comprehensive management services. Tracking addendums and making changes made simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Start Project <ArrowRight className="ml-2 inline w-4 h-4" />
              </Button>
              <Button variant="outline">
                View Portfolio
              </Button>
            </div>
            
            <div className="mt-12 flex gap-8">
              {['Project Planning', 'Construction Mgmt', 'Architecture'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <CheckCircle className="text-ark-red w-4 h-4" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Abstract Laptop Representation */}
            <div className="bg-orange-100 rounded-3xl p-8 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="bg-white rounded-xl shadow-2xl overflow-hidden aspect-video relative border-b-8 border-gray-200">
                  {/* Mock UI */}
                  <div className="bg-gray-100 p-3 flex gap-2 border-b">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-8 flex flex-col items-center justify-center h-full bg-gradient-to-br from-white to-gray-50">
                     <div className="text-ark-red text-6xl font-bold mb-4">ARK²</div>
                     <div className="text-gray-400 text-sm">Construction Management Software</div>
                  </div>
               </div>
               {/* Laptop Base */}
               <div className="bg-gray-200 h-4 rounded-b-xl mt-1 mx-4"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-ark-red/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
