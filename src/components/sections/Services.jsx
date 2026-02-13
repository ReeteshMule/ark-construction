import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Clock, Calculator, FileText, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time Saving",
    description: "We will continuously work at achieving a one-week lead time to all your estimates, we will be ready with the detailed estimate one week before the due date. We give a strong lead time so that you get enough time for revisions."
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Cost Estimation",
    description: "Accurate and detailed cost estimation to ensure your project stays within budget. We analyze every aspect to prevent unexpected expenses."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Documentation",
    description: "Complete handling of all construction documentation, permits, and paperwork. We ensure compliance and organized record-keeping throughout the project."
  },
    {
    icon: <PenTool className="w-8 h-8" />,
    title: "Project Planning",
    description: "Strategic planning and scheduling to optimize resources and timelines. Our expert team ensures efficient project execution from start to finish."
  }
];

export const Services = () => {
  return (
    <Section id="services" className="bg-ark-light">
      <Container>
        <div className="text-center mb-16">
           <h2 className="text-4xl font-heading font-bold text-ark-dark mb-4">Our Services</h2>
           <div className="w-20 h-1 bg-ark-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-transparent hover:border-ark-red group">
                    <div className="text-ark-red mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-xl font-bold text-ark-dark mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};
