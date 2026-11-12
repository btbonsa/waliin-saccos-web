import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "../components/seo";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-[#fffcf8] px-4">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist on the Waliin SACCO Ltd website."
        noindex
      />
      <div className="max-w-md space-y-5 text-center">
        <p className="text-8xl font-bold text-[#0e241d]">404</p>
        <h1 className="text-2xl font-bold text-[#000]">Page not found</h1>
        <p className="text-sm leading-relaxed text-[#5d6f68]">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e6e0d6] bg-white px-6 text-sm font-bold text-[#000] hover:bg-[#f5f3ef] transition-colors"
          >
            <ArrowLeft size={15} />
            Go back
          </button>
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0e241d] px-6 text-sm font-bold text-white hover:bg-[#16382e] transition-colors"
          >
            <Home size={15} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
