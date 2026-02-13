import { cn } from '../../lib/utils';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-ark-red text-white hover:bg-red-700 border-transparent',
    secondary: 'bg-ark-charcoal text-white hover:bg-zinc-800 border-transparent',
    outline: 'bg-transparent border-ark-red text-ark-red hover:bg-ark-red hover:text-white border-2',
    white: 'bg-white text-ark-dark hover:bg-gray-100 border-transparent'
  };

  return (
    <button 
      className={cn(
        'px-8 py-3 rounded-none font-medium text-sm tracking-wide transition-transform hover:scale-[1.03] active:scale-95 duration-200 border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
