export const getNameInitials = (name: string) => {
  return name
    .split(" ")
    .map((word: string) => word[0].toUpperCase())
    .join("");
};
