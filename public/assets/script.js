document.querySelectorAll('#delete-form').forEach(element => {
  element.addEventListener('click', (ev) => {
    const confirmation = confirm("Tem certeza que deseja excluir esse post?")

    if(!confirmation)
    {
      ev.preventDefault()
    }
  })
})


