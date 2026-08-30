import { motion } from "motion/react"
function about() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#f3f3f1] text-white min-h-screen">
  <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.08, 1.12, 1.08],
          x: [0, -30, 0, 30, 0],
          y: [0, 12, 0, -12, 0],
          opacity: [0.85, 1, 0.9],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale-[0.5]"
          style={{ filter: "grayscale(0.5) brightness(0.7) gradient(to bottom, rgba(0,0,0,0.42), rgba(0,0,0,0.15), rgba(0,0,0,0.08))" }}
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
          alt="Hands holding each other"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),rgba(0,0,0,0.15),rgba(0,0,0,0.08))]" />
      </motion.div>
      {/* Visible content so the section doesn't collapse */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="max-w-3xl p-8 text-center text-emerald-900">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90">
            Waliin Saccos is committed to serving members with integrity and
            transparency. Learn about our mission, leadership and services.
          </p>
        </div>
      </div>
      </section>


    </div>
  )
}

export default about