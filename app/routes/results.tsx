import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/results";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { formatResultDate, resultPosts } from "~/data/results";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Results - IChTo 2026" },
    {
      name: "description",
      content: "Results of International Chemistry Tournament 2026",
    },
  ];
}

export default function Results() {
  return (
    <div className="min-h-screen">
      <HeroImage title="Results" imageUrl="/results.jpg" />

      <section className="container mx-auto px-4 mt-10 md:mb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-5 border-b border-gray-200 pb-4">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                  Official result notices
                </h2>
              </div>
              <Link
                to="/past"
                className="shrink-0 text-sm font-semibold text-blue-800 hover:text-blue-950 hover:underline"
              >
                View past competitions
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {resultPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden bg-white transition pb-4 border-b border-gray-200"
              >
                <Link
                  to={`/results/${post.id}`}
                  className="flex justify-between items-center px-3 sm:p-7 hover:bg-gray-50 rounded-2xl transition"
                >
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900">
                      {post.title}
                    </h3>
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <time dateTime={post.date}>
                          {formatResultDate(post.date)}
                        </time>
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    aria-hidden="true"
                    className="block text-gray-400 transition group-hover:text-blue-800"
                    size={24}
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
