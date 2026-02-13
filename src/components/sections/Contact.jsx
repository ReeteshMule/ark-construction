import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <Section id="contact" className="bg-ark-dark text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Ready to start your project? Get in touch with us today.</p>
        </div>

        <form className="max-w-xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name*</label>
                    <input type="text" className="w-full bg-transparent border border-gray-700 p-3 focus:border-ark-red focus:outline-none text-white transition-colors" placeholder="Enter your name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email*</label>
                    <input type="email" className="w-full bg-transparent border border-gray-700 p-3 focus:border-ark-red focus:outline-none text-white transition-colors" placeholder="Enter your email" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-transparent border border-gray-700 p-3 focus:border-ark-red focus:outline-none text-white transition-colors" placeholder="Type the subject" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-transparent border border-gray-700 p-3 focus:border-ark-red focus:outline-none text-white transition-colors" placeholder="Type your message here..."></textarea>
            </div>
            <Button variant="primary" className="w-full">Submit</Button>
        </form>
      </Container>
    </Section>
  );
};
