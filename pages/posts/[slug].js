import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <article className="pb-12">
        <header className="border-y border-white border-opacity-10 py-12 md:py-16">
          {frontMatter.date && (
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-cyan-300">
              {frontMatter.date}
            </p>
          )}
          <h1 className="max-w-4xl text-5xl font-black leading-none text-white md:text-7xl">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">
              {frontMatter.description}
            </p>
          )}
        </header>
        <main className="mx-auto mt-12 max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {prevPost && (
            <Link href={`/posts/${prevPost.slug}`}>
              <a className="flex flex-col border border-white border-opacity-10 bg-white bg-opacity-5 px-8 py-7 transition hover:border-cyan-300 hover:border-opacity-60">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  Previous
                </p>
                <h4 className="mb-6 text-2xl font-black text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon
                  className="mt-auto rotate-180 transform"
                  color="text-cyan-300"
                />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`}>
              <a className="flex flex-col border border-white border-opacity-10 bg-white bg-opacity-5 px-8 py-7 transition hover:border-cyan-300 hover:border-opacity-60">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  Next
                </p>
                <h4 className="mb-6 text-2xl font-black text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto" color="text-cyan-300" />
              </a>
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
