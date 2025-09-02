  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbziizwY6YZBiGC2gl9v7nHXgnBCBUq550DX19fleuNgk-OVr7TRcIlvwPHbSjaPZyzOsQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.querySelector("span")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
          msg.style.display="block"
          setTimeout(()=>{
              msg.style.display="none"
            },5000)
        form.reset()
      }
        )
      .catch(error =>
         console.error('Error!', error.message
         ))
  })