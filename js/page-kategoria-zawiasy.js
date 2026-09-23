function resetFilters() {
  const inputs = document.querySelectorAll('aside input');
  inputs.forEach(i => {
    if (i.type === 'checkbox') i.checked = true;
  });
}
