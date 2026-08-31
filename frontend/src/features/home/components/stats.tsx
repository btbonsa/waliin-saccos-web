const stats = [
  {
    value: "10K+",
    label: "Active Members",
  },
  {
    value: "50M+",
    label: "Total Savings",
  },
  {
    value: "20M+",
    label: "Loans Disbursed",
  },
  {
    value: "15+",
    label: "Years of Service",
  },
];

function Stats() {
  return (
    <section className="border-y border-gray-200 bg-white py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-yellow-400">
                {stat.value}
              </div>

              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;