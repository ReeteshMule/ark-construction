import { cn } from '../../lib/utils';

export const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      {children}
    </section>
  );
};
