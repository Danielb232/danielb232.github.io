const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

document.querySelector('a[href="Bekele_Daniel.pdf"]').addEventListener('click', async (e) => {
  e.preventDefault();

  let location = 'unknown';

  try {
    const geo = await fetch('https://ipapi.co/json/');
    const data = await geo.json();
    location = `${data.city}, ${data.region}, ${data.country_name}`;
  } catch (e) {}

  try {
    await fetch('https://formspree.io/f/maqkgqgz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Someone clicked your resume link',
        time: new Date().toLocaleString(),
        referrer: document.referrer || 'direct visit',
        location: location,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
      })
    });
  } catch (e) {}

  window.open('Bekele_Daniel.pdf', '_blank');
});