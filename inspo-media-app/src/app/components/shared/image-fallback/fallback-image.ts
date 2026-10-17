// Shown when a post/comment has no image or its URL fails to load
export const FALLBACK_IMAGE_SRC = (() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#eceae6"/>
    <text x="200" y="158" text-anchor="middle" font-family="system-ui, sans-serif"
      font-size="18" fill="#8a857d">Image unavailable</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
})();
