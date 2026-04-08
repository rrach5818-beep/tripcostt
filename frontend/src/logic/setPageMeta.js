export function setPageMeta({ title, description }) {
  // Title
  if (title) {
    document.title = title;
  }

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]');

  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }

  if (description) {
    metaDesc.setAttribute('content', description);
  }
}