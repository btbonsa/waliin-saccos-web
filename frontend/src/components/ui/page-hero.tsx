import Container from "./container";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0e241d] py-28 sm:py-36">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e241d]/65 via-[#0e241d]/75 to-[#0e241d]/95" />

      <Container className="relative flex flex-col items-center text-center">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold tracking-widest uppercase text-[#d4af5a]">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base text-white/60">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
