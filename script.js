const container = document.querySelector('#links');

for (const item of window.siteLinks) {
  const row = document.createElement(item.url ? 'a' : 'div');
  row.className = `link-row${item.url ? '' : ' unavailable'}`;
  if (item.url) {
    row.href = item.url;
    row.target = '_blank';
    row.rel = 'noopener noreferrer';
    row.setAttribute('aria-label', `${item.title} — ${item.description} (opens in a new tab)`);
  }
  const number = document.createElement('span');
  number.className = 'link-number';
  number.textContent = item.number;
  const body = document.createElement('span');
  body.className = 'link-body';
  const title = document.createElement('strong');
  title.textContent = item.title;
  const description = document.createElement('span');
  description.textContent = item.description;
  body.append(title, description);
  const end = document.createElement('span');
  end.className = 'link-end';
  end.textContent = item.url ? '↗' : 'SOON';
  row.append(number, body, end);
  container.append(row);
}

document.querySelector('#year').textContent = new Date().getFullYear();
