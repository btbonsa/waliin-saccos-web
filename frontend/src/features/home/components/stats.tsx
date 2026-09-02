import Container from "../../../components/ui/container";

const stats = [
  { value: "250+", label: "Active members" },
  { value: "5M+", label: "Total savings (ETB)" },
  { value: "100K+", label: "Loans disbursed (ETB)" },
  { value: "Holeta", label: "Community we serve" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-paper">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-forest sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
