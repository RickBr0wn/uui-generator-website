function uuid() {
  document.getElementById('uuid').innerHTML = UUID()
}

/**
A function that returns a universally unique identifier (uuid).  
example: 1b83fd69-abe7-468c-bea1-306a8aa1c81d
@returns `string` : 32 character uuid (see example)
*/
function UUID() {
  const hashTable = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ]
  let uuid = []
  for (let i = 0; i < 35; i++) {
    if (i === 7 || i === 12 || i === 17 || i === 22) {
      uuid[i] = '-'
    } else {
      uuid[i] = hashTable[Math.floor(Math.random() * hashTable.length - 1)]
    }
  }
  return uuid.join('')
}

/**
A function that copies a text field to the system clipboard.
*/
function copyToClipboard(str) {
  function listener(e) {
    /* e.clipboardData.setData("text/html", str) */
    e.clipboardData.setData('text/plain', str)
    alert(`${str} has been copied to the clipboard.`)
    e.preventDefault()
  }
  document.addEventListener('copy', listener)
  document.execCommand('copy')
  document.removeEventListener('copy', listener)
}
