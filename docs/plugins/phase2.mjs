function render({ model, el }) {
  // Setup quick-access to state
  const getValue = () => model.get('value');
  const setValue = (value) => model.set('value', value);

  const getResult = () => model.get('result');
  const setResult = (result) => model.set('result', result);

  let input = document.createElement('input');
  input.classList.add('');
  input.innerHTML = ``;

  input.addEventListener('input', () => {
    setValue(input.value)
    model.save_changes();
  });
  
  /*input.on('change:input', () => {
    input.value = getValue();
  });*/
  el.appendChild(input);

  // Destructor to clean-up when MyST is finished with us!
  return () => input.remove();
}
export default { render };