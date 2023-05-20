const videoIds = [
  'RdlNrYmNdQ4',
  'KudGpbfWYrI',
  'mFgpWbI3Czo',
  '7_HeyTKfT0s',
  '1Dahqz-R49I',
  'z0EY-vQXRwc',
  'fWvKvOViM3g',
  'VYJtTteJzg8',
  'T13se_2A7c8',
  'tLzguJzXyBc',
  'lI6bA8eSYag',
  'MNB050u-VGo',
  'YjO5PuXJO48',
  'An_h_uLHMNo',
  'nBlqmw9dtHg',
  'RrQ1AANO87E'
];

const videoButtons = document.querySelectorAll('.picture');

videoButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const videoId = videoIds[index];
    const youtubeVideoURL = `https://www.youtube.com/watch?v=${videoId}`;
    window.location.href = youtubeVideoURL;
  });
});