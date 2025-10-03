function showSelection() {
  // Get the selected format (paragraphs, words, bytes, or lists)
  const selectedFormat = document.querySelector('input[name="format"]:checked');
  
  // Get the quantity value
  const quantity = document.getElementById('quantity').value;
  
  // Get the checkbox state
  const startWithLorem = document.querySelector('.generator-controls input[type="checkbox"]').checked;
  
  if (selectedFormat) {
    let message = `Generate ${quantity} ${selectedFormat.value}`;
    if (startWithLorem) {
      message += "\nStart with 'Lorem ipsum dolor sit amet...'";
    }
    alert(message);
  } else {
    alert('Please select a format');
  }
}