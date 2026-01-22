export function useTimeAgo(date: string | null | undefined) {
  if (!date) return "Invalid date";

  const parsed = new Date(date.trim());

  if (isNaN(parsed.getTime())) return "Invalid date";

  const diffSeconds = Math.floor(
    (Date.now() - parsed.getTime()) / 1000
  );

  if (diffSeconds < 0) return "Just now";

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;  
  const year = 365 * day;  

  if (diffSeconds < minute)
    return `${diffSeconds} sec ago`;

  if (diffSeconds < hour)
    return `${Math.floor(diffSeconds / minute)} min${
      diffSeconds >= 2 * minute ? "s" : ""
    } ago`;

  if (diffSeconds < day)
    return `${Math.floor(diffSeconds / hour)} hour${
      diffSeconds >= 2 * hour ? "s" : ""
    } ago`;

  if (diffSeconds < month)
    return `${Math.floor(diffSeconds / day)} day${
      diffSeconds >= 2 * day ? "s" : ""
    } ago`;

  if (diffSeconds < year)
    return `${Math.floor(diffSeconds / month)} month${
      diffSeconds >= 2 * month ? "s" : ""
    } ago`;

  return `${Math.floor(diffSeconds / year)} year${
    diffSeconds >= 2 * year ? "s" : ""
  } ago`;
}
