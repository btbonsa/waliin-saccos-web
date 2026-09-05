import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Container from "../../../components/ui/container";
import { useLang } from "../../../context/LanguageContext";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();

  const stats = [
    { display: <CountUp target={250} suffix="+" />, label: t("activeMembers") },
    { display: <CountUp target={5} suffix="M+" />, label: t("totalSavings") },
    { display: <CountUp target={100} suffix="K+" />, label: t("loansDisbursed") },
    { display: <span>Holeta</span>, label: t("communityServed") },
  ];

  return (
    <section className="border-y border-[#e6e0d6] bg-green-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-[#0e241d] sm:text-4xl tabular-nums">
                {stat.display}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#5d6f68]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
