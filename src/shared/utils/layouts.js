export const getWindowDimensions = (window) => {
  if (!window && typeof window !== "undefined") return;
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};
