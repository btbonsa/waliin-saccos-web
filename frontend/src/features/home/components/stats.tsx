import Container from "../../../components/ui/container";

const stats = [
  { value: "250+", label: "Active members" },
  { value: "5M+", label: "Total savings (ETB)" },
  { value: "100K+", label: "Loans disbursed (ETB)" },
  { value: "Holeta", label: "Community we serve" },
];

export default function Stats() {
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
