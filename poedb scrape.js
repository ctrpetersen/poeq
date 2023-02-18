var table = document.getElementsByClassName('mb-0 table table-dark table-hover table-striped table-bordered filters tablesorter tablesorter-default tablesorterc570143c25b098')[0]
var uniques = []
for (var i = 0, row; row = table.rows[i]; i++) {
  const item = table.rows[i]
  if (item.className === 'tablesorter-headerRow') continue;

  const cdnLink = item.childNodes[0].firstChild.firstChild.src.replace('https://cdn.poedb.tw', 'https://web.poecdn.com').replace('.webp', '.png')

  const name = decodeURI(item.childNodes[1].firstChild.getAttribute('data-hover').replace('?t=UniqueItems&n=', '').replaceAll('+', ' ').replaceAll('%2C', ','))

  uniques.push({
    cdnLink,
    name
  })
}

console.log(uniques)
