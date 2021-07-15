const button = document.querySelector('button')! // need exclamation mark to let TS know there is a button

button.addEventListener('click', () => {
    console.log('Clicked')
})
