const onInputFieldChange = (fieldCount) => {
  let isEnabled = true;
  for (let i = 1; i <= fieldCount; i++) {
    const currentField = document.getElementById(`field ${i}`);
    isEnabled &= currentField.value && currentField.checkValidity();
  }
  document.getElementById('button').disabled = !isEnabled;
}
