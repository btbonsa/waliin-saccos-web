import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import Faq from "../../../components/ui/faq";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import { useLang } from "../../../context/LanguageContext";

export default function FaqSection() {
  const { t } = useLang();

  const items = [
    {
      q: t("faqWhoCanJoin"),
      a: t("faqWhoCanJoinAnswer"),
    },
    {
      q: t("faqLoanQualify"),
      a: t("faqLoanQualifyAnswer"),
    },
    {
      q: t("faqSavingsInterest"),
      a: t("faqSavingsInterestAnswer"),
    },
    {
      q: t("faqMemberOwned"),
      a: t("faqMemberOwnedAnswer"),
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <SectionHeader
            align="left"
            className="text-left"
            title={t("clearAnswers")}
            description={t("clearAnswersDescription")}
          />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Faq items={items} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
