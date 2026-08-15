export type ResultPost = {
  id: number;
  title: string;
  date: string;
  content: string[];
  driveFileId: string;
};

// Keep the newest result first so the index page is ready to publish as-is.
export const resultPosts: ResultPost[] = [
  {
    id: 1,
    title: "Stage 1 Results",
    date: "2026-08-15",
    content: [
      "The official results for Day 1 is published.",
      "Please review the detailed scores in the document below.",
    ],
    driveFileId: "1no4n-4lbds0IpTHVA272hWD7lnSEjf1p",
  },
];

export function getResultPost(id: string | number) {
  return resultPosts.find((post) => String(post.id) === String(id));
}

export function formatResultDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
