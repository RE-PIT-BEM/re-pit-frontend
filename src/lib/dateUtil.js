export default function formatDate(dateString) {
  const date = new Date(dateString);
  let formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);

  return formattedDate;
}

export const formatValueDate = (dateString) => {
  const currentDate = new Date(dateString);
  currentDate.setDate(currentDate.getDate() + 10);
  return currentDate.toISOString().split("T")[0];
};
