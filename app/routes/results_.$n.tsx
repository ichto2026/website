import { ArrowLeft, CalendarDays, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router";
import HeroImage from "~/components/HeroImage";
import { formatResultDate, getResultPost, resultPosts } from "~/data/results";
import type { Route } from "./+types/results_.$n";

export function loader({ params }: Route.LoaderArgs) {
  const post = getResultPost(params.n);

  if (!post) {
    throw new Response("Result notice not found", { status: 404 });
  }

  return { post };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Result Not Found - IChTo 2026" }];
  }

  return [
    { title: `${data.post.title} - IChTo 2026` },
    {
      name: "description",
      content: data.post.content[0],
    },
  ];
}

export default function ResultPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  const postIndex = resultPosts.findIndex((item) => item.id === post.id);
  const newerPost = resultPosts[postIndex - 1];
  const olderPost = resultPosts[postIndex + 1];
  const drivePreviewUrl = post.driveFileId
    ? `https://drive.google.com/file/d/${post.driveFileId}/preview`
    : null;

  return (
    <div className="min-h-screen">
      <HeroImage title="Results" imageUrl="/results.jpg" />

      <main className="container mx-auto px-4 pb-20">
        <article className="mx-auto max-w-4xl">
          <Link
            to="/results"
            className="my-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-900 hover:underline"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Back to all results
          </Link>

          <header className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="flex items-center gap-1.5 text-gray-500">
                <CalendarDays aria-hidden="true" size={16} />
                <time dateTime={post.date}>{formatResultDate(post.date)}</time>
              </span>
            </div>
          </header>

          <div className="space-y-4 py-9 text-md leading-6 text-gray-700">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <section aria-labelledby="official-document-title">
            {drivePreviewUrl && (
              <div className="overflow-hidden bg-gray-100 md:h-200">
                <iframe
                  src={drivePreviewUrl}
                  title={`${post.title} official document`}
                  className="h-[65vh] min-h-[520px] w-full md:h-[760px]"
                  allow="autoplay"
                />
              </div>
            )}
          </section>

          {(olderPost || newerPost) && (
            <nav
              aria-label="Result notices"
              className="mt-12 grid gap-3 border-t border-gray-200 pt-8 sm:grid-cols-2"
            >
              {olderPost ? (
                <Link
                  to={`/results/${olderPost.id}`}
                  className="rounded-xl border border-gray-200 p-4 hover:bg-gray-50"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Previous notice
                  </span>
                  <span className="mt-1 block font-bold text-gray-900">
                    {olderPost.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {newerPost && (
                <Link
                  to={`/results/${newerPost.id}`}
                  className="rounded-xl border border-gray-200 p-4 text-right hover:bg-gray-50"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Next notice
                  </span>
                  <span className="mt-1 block font-bold text-gray-900">
                    {newerPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>
    </div>
  );
}
