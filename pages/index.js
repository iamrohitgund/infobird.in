import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full pb-12">
        <section className="grid gap-8 py-16 md:grid-cols-5 md:items-end">
          <div className="md:col-span-3">
            <p className="mb-5 text-sm font-bold uppercase tracking-widest text-cyan-300">
              technology & more / since the blog era
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-none text-white md:text-7xl">
              A sharper signal for gadgets, AI, and internet culture.
            </h1>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl leading-8 text-gray-300">
              {globalData.blogTitle}
            </p>
          </div>
        </section>

        <section className="mb-10 grid gap-4 border-y border-white border-opacity-10 py-5 text-sm font-semibold uppercase tracking-widest text-gray-500 sm:grid-cols-3">
          <span>weekly reads</span>
          <span>hands-on context</span>
          <span>no hype fog</span>
        </section>

        <section id="latest" className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black text-white">Latest</h2>
            <span className="text-sm font-semibold text-gray-500">
              {posts.length} posts
            </span>
          </div>
          <ul className="grid w-full gap-5">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="group border border-white border-opacity-10 bg-white bg-opacity-5 transition hover:border-cyan-300 hover:border-opacity-60 hover:bg-opacity-10"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="grid gap-6 p-6 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-30 md:grid-cols-5 md:p-8">
                  <div className="md:col-span-3">
                    {post.data.date && (
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-300">
                        {post.data.date}
                      </p>
                    )}
                    <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                      {post.data.title}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-between md:col-span-2">
                    {post.data.description && (
                      <p className="text-lg leading-7 text-gray-300">
                        {post.data.description}
                      </p>
                    )}
                    <ArrowIcon
                      className="mt-6 transition group-hover:translate-x-2"
                      color="text-cyan-300"
                    />
                  </div>
                </a>
              </Link>
            </li>
          ))}
          </ul>
        </section>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
