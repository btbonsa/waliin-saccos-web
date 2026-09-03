import { UserPlus, PiggyBank, Landmark,  } from "lucide-react";
import Container from "../../../components/ui/container";
import SectionHeader from "../../../components/ui/section-header";
import ScrollReveal from "../../../components/ui/ScrollReveal";

const steps = [
  {
    icon: UserPlus,
    title: "Join as a member",
    desc: "Visit our work place at Holeta town, come  with your ID and 2 Photos  to be our member. ",
  },
  {
    icon: PiggyBank,
    title: "Save consistently",
    desc: "After registration, Start with a minimum  mandatory saving of  500 ETB per month , plus voluntary deposits anytime any amount.",
  },
  {
    icon: Landmark,
    title: "Access fair credit",
    desc: "Qualify various loan types   :- personal, business, housing, social , urban farm expansion and improve your livelihood as general",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-yellow-100 h-full py-20 sm:py-14 ">
      <Container>
        <ScrollReveal>
          <SectionHeader className="text-left"
            title="How Waliin SACCO works"
            description="Simple primary cooperative Society which enables you to Save, borrow and improve your financial access for your business. "
          />
        </ScrollReveal>
        <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {steps.map((step,) => (
            <ScrollReveal key={step.title}>
              <div className="group rounded-2xl shadow-lg bg-white p-5 sm:p-7 transition-all duration-500 hover:-translate-y-3 ease-in-out h-60">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-500 font-bold group-hover:bg-yellow-500 transition-all duration-600 group-hover:text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-black text-lg sm:text-xl">{step.title}</h3>
                <p className="text-md leading-relaxed text-muted">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
