// Preserve referral parameters when returning to the home registration form.
const params = new URLSearchParams(location.search);
document.querySelectorAll('a[href="../../#dang-ky"]').forEach(link => {
  const url = new URL(link.getAttribute('href'), location.href);
  params.forEach((value, key) => {
    if (/^(ref|utm_[a-z0-9_]+)$/i.test(key)) url.searchParams.set(key, value);
  });
  link.href = url.href;
});
