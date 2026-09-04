import Container from "../../../components/ui/container";
import { useLang } from "../../../context/LanguageContext";

export default function Stats() {
  const { t } = useLang();

  const stats = [
    { value: "250+", label: t("activeMembers") },
    { value: "5M+", label: t("totalSavings") },
    { value: "100K+", label: t("loansDisbursed") },
    { value: "Holeta", label: t("communityServed") },
  ];

  return (
    <section className="border-y border-[#e6e0d6] bg-green-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#0e241d] sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#5d6f68]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
