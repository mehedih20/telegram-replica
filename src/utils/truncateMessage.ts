export function truncateMessage(message: string) {
  const maxLength = 30;
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + "...";
  }
  return message;
}
