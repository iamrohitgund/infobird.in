import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  const isExternal = href && /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...otherProps}
      />
    );
  }

  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </>
  );
}
