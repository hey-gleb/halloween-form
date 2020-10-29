onInputFocusOut = () => {
    const isEnabled = !!document.getElementById('field 1').value &&
        !!document.getElementById('field 2').value &&
        !!document.getElementById('field 3').value;
    if (isEnabled) {
        document.getElementById('button').disabled = false;
    }
}
