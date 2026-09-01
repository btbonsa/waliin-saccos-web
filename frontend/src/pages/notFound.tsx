import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50/50">
      <div className="text-center space-y-8 max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-800 to-emerald-950 leading-none">
            404
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          <h1 className="text-2xl font-extrabold text-gray-900">Page Not Found</h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:shadow-md transition-all duration-200"
          >
            <ArrowLeft size={15} />
            Go Back
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-800 shadow-lg shadow-emerald-950/20 transition-all duration-200"
          >
            <Home size={15} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
