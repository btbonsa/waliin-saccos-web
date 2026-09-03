import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import Faq from "../../../components/ui/faq";
import ScrollReveal from "../../../components/ui/ScrollReveal";

const items = [
  {
    q: "Who can join Walin SACCO Ltd?",
    a: "Residents who can buy a minimum of five shares of 5000 ETB,  registration fee 1000 ETB, and  500 compulsory savings.",
  },
  {
    q: "How do I qualify for a loan?",
    a: "Loans are based on consistent savings. Most products require 25–30% continuous savings over a set number of months before you can borrow.",
  },
  {
    q: "Do members earn interest on savings?",
    a: "Yes. Adult mandatory and voluntary savings currently earn 7%, and children’s savings earn 10.5%.",
  },
  {
    q: "Is Walin member-owned?",
    a: "Yes. Every member has an equal vote, and surplus is shared through cooperative dividends after annual audits.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <SectionHeader
            align="left"
            className="text-left"
            title="Clear answers before you join"
            description="While you become a member of WALIN SACCO you are a member/owner not a customer, so you have the right to access all services and information that have been given here."
          />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Faq items={items} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
