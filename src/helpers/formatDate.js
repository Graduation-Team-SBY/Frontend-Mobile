export const formatDate = (date) => {
  let day = String(new Date(date).getUTCDate()).padStart(2, "0");
  let month = String(new Date(date).getUTCMonth() + 1).padStart(2, "0");
  let year = String(new Date(date).getUTCFullYear());

  return `${day}/${month}/${year}`;
};

export const formatDateMonth = (date) => {
  const year = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(
    date
  );
  const month = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
    date
  );
  const day = new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(date);
  return `${day} ${month} ${year}`;
};
