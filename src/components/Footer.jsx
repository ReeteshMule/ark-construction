import { Container } from './ui/Container';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white text-ark-dark py-12 border-t border-gray-200">
      <Container>
        <div className="text-center">
            <div className="mb-6">
                 <div className="text-xl font-bold font-heading mb-1">
                    <span className="text-ark-dark">ARK</span><span className="text-ark-red">2</span>
                 </div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest">Construction Services</div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-8">
                <p>+1 (213) 345-6789</p>
                <p>info@arkconstruction.com</p>
                <p>Head Office: Block A, Super society, Yorks</p>
                <p>road, Mahal, Nagpur - 440032</p>
            </div>

            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-ark-red transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-ark-red transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-ark-red transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-ark-red transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-ark-red transition-colors"><Youtube size={20} /></a>
            </div>

            <div className="text-xs text-gray-400">
                © {new Date().getFullYear()} ARK Construction Services. All rights reserved.
            </div>
        </div>
      </Container>
    </footer>
  );
};
