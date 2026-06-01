export default function Footer({ copyrightText }) {
  return (
    <footer className="border-t border-white border-opacity-10 py-10 text-sm text-gray-500">
      <p>
        {copyrightText}
      </p>
    </footer>
  );
}
