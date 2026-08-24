import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mohammadreza Golkar
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>

          <Link href="/research" className="hover:text-white">
            Research
          </Link>

          <Link href="/cv" className="hover:text-white">
            CV
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}