import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <Section id="about" className="bg-ark-dark text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
                <div className="absolute inset-0 bg-ark-red/20 transform translate-x-4 translate-y-4"></div>
                <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Architect working on plans" 
                    className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            {/* Content Side */}
            <div>
                <h4 className="text-ark-red font-medium tracking-widest uppercase mb-2">Who We Are</h4>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">ARK² CONSTRUCTION SERVICES</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    ARK² is a customer-centric construction service company dedicated to providing efficient solutions for the global construction industry. Our team is committed to delivering exceptional quality outputs that save time and cost for our clients.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    We believe in consolidating the paperwork, documentation, scheduling, and estimating processes, so our clients can focus on their construction projects. Our comprehensive project management approach offers a wide range of services to meet our client's needs.
                </p>
                <Button variant="primary">Get in Touch</Button>
            </div>
        </div>
      </Container>
    </Section>
  );
};
