function showBio() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('bio').classList.remove('hidden');

  const music = document.getElementById('bgMusic');
  music.play().catch(err => {
    console.log("Autoplay gagal:", err);
  });
}

function toggleDesc() {
  const box = document.getElementById('desc');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}