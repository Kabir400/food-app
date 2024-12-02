const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  // Define suffixes for date
  const suffixes = ["th", "st", "nd", "rd"];
  const day = date.getDate();
  const daySuffix =
    suffixes[day % 10 > 3 || Math.floor((day % 100) / 10) === 1 ? 0 : day % 10];

  // Get month and year
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format the date
  return `${day}${daySuffix} ${month}, ${year}`;
};

export default formatDate;
