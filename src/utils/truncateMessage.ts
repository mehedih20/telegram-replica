export function truncateMessage(message: string) {
  const maxLength = 40;
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  }
  return message;
}
