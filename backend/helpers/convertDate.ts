const convertDateToYYYYMMDD = (date: string): string => {
  const [month, day, year] = date.split("-");
  if (!month || !day || !year) {
    throw new Error("Invalid date format. Expected mm-dd-yyyy.");
  }
  return `${year}-${month}-${day}`; // Make sure to always return a string
};
