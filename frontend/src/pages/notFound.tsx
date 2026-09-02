import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4">
      <div className="max-w-md space-y-6 text-center">
        <p className="text-8xl font-bold text-forest">404</p>
        <h1 className="text-2xl font-bold text-ink">Page not found</h1>
        <p className="text-sm leading-relaxed text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-paper px-6 text-sm font-bold text-ink"
          >
            <ArrowLeft size={15} />
            Go back
          </button>
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-6 text-sm font-bold text-white"
          >
            <Home size={15} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
