
function renderNewEntryForm() {
    const page = document.getElementById('page');
    const heading = document.createElement('h1')
    heading.textContent = "New Entry"
    const form = document.createElement('form')
    form.innerHTML = `
    <section id="errors"></section>
    <fieldset>
      <label for="title">Title:</label><br>
      <input type="text" name="title">
    </fieldset>
    <fieldset>
      <label for="content">Entry: </label><br>
      <textarea name="content"></textarea>
    </fieldset>
    <button>Save</button>
    `
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(form))
        axios.post('/api/entries', data)
            .then(response => {
                renderEntriesList()
            }).catch(err => {
              document.getElementById('errors').textContent = err.response.data.message
            })
    })
    page.replaceChildren(heading, form)
}