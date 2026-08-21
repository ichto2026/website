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
      "The official results for Stage 1 have been published.",
      "Please review the detailed scores in the document below.",
    ],
    driveFileId: "1no4n-4lbds0IpTHVA272hWD7lnSEjf1p",
  },
  {
    id: 2,
    title: "Stage 2 Results",
    date: "2026-08-16",
    content: [
      "The official results for Stage 2 have been published.",
      "Please review the detailed scores in the document below.",
      "--- Updated ---",
      "The organizers of IChTo 2026 sincerely apologize for the errors in recording and publishing the strategic refusal history for the semifinal stages of IChTo. Periodic Acid did not present Problem 6, but strategically refused it. St. Paul did not strategically refuse Problem 4, but instead presented it. We sincerely apologize for any confusion or inconvenience this may have caused. We will take greater care in reviewing the score announcement process to ensure that similar errors do not occur in the remaining stages of the competition.",
    ],
    driveFileId: "1_bN93UQUUBe94EeocFJsnLbOwADaddxO",
  },
  {
    id: 3,
    title: "Stage 3 Results",
    date: "2026-08-17",
    content: [
      "The official results for Stage 3 have been published.",
      "Please review the detailed scores in the document below.",
    ],
    driveFileId: "12qx1GtusFjbQmawkrAgrHN6PLk4JFdZr",
  },
  {
    id: 4,
    title: "Stage 4 Results",
    date: "2026-08-17",
    content: [
      "The official results for the Semi-final Stages have been published.",
      "Please review the detailed scores in the document below.",
    ],
    driveFileId: "1rsXpnmz3XFVUw4HM_jIdvIhTDvCc2G6i",
  },
  {
    id: 5,
    title: "Final Stage Results",
    date: "2026-08-19",
    content: [
      "The official results for the Final Stage have been published.",
      "Please review the detailed scores in the document below.",
    ],
    driveFileId: "1Rll-IiQ_cjpqLpE9ft_UsyGEGYD-j_NB",
  },
  {
    id: 6,
    title: "Final Results",
    date: "2026-08-21",
    content: [
      "The final results of the International Chemistry Tournament 2026 have been published.",
      "Congratulations to all participants on your hard work and dedication throughout the tournament!",
    ],
    driveFileId: "1QUy-lDr0R4ATAIrE1Gcuy43qyUtO7jGM",
  },
].sort((a, b) => b.id - a.id);

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
