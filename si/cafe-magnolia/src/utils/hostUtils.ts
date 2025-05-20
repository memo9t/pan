export const getCurrentHost = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.hostname;
  }

  if (process.env.REPLIT_PROXY_URL) {
    try {
      return new URL(process.env.REPLIT_PROXY_URL).hostname;
    } catch {
      return 'localhost';
    }
  }
  return 'localhost';
};