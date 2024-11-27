export default function formatDate(dateString) {
  const date = new Date(dateString);
  let formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return formattedDate;
}
