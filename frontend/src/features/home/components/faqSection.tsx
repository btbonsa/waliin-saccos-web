import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import Faq from "../../../components/ui/faq";
import ScrollReveal from "../../../components/ui/ScrollReveal";

const items = [
  {
    q: "Who can join Waliin SACCO Ltd?",
    a: "Residents who can visit our Holeta office, present a valid ID, and commit to monthly mandatory savings of ETB 500 may apply for membership.",
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
    q: "Is Waliin member-owned?",
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
            title="Clear answers before you join"
            description="A savings and credit cooperative is not a commercial bank. You are an owner, not just a customer."
          />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Faq items={items} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
