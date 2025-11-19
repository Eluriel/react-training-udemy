import { useAccordionContext } from './Accordion';

export default function AccordionItem({ children, className }) {
  return <li className={className}>{children}</li>;
}
