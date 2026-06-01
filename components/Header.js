import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="flex items-center justify-between py-8">
      <p className="text-xl font-black tracking-normal text-white">
        <Link href="/">
          <a className="group inline-flex items-end gap-2" aria-label={name}>
            <span className="flex items-end text-3xl font-black leading-none tracking-normal sm:text-4xl">
              <span className="text-orange-400">info</span>
              <span className="-ml-1 text-sky-500">bird</span>
              <span className="-ml-1 text-orange-400">.in</span>
            </span>
            <span className="hidden pb-1 text-xs font-black uppercase tracking-widest text-sky-300 md:inline">
              technology & more
            </span>
          </a>
        </Link>
      </p>
      <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-400 sm:flex">
        <a href="#latest" className="hover:text-white">
          latest
        </a>
      </nav>
    </header>
  );
}
