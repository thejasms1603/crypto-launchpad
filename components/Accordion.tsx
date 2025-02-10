import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionPage() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is this platform secure?</AccordionTrigger>
        <AccordionContent>
          Yes, Launchpad provides secure and audited smart contracts for our
          thousands of monthly recurring users. You can rest assured that
          everything on our platform is 100% safe
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>What is Solana Launchpad?</AccordionTrigger>
        <AccordionContent>
          Solana Launchpad is a platform that helps projects launch tokens and
          NFTs on the Solana blockchain, providing fundraising and
          community-building tools.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>How can I contact you?</AccordionTrigger>
        <AccordionContent>
          You can contact me via email, LinkedIn, Discord, or Telegram. Links
          are provided below in the footer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
