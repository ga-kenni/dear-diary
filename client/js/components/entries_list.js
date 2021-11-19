
function renderEntry(userId, entry) {
    const el = document.createElement('div')
    el.classList.add('challenge')
    
    const title = document.createElement('h2')
    title.textContent = entry.title
    
    const desc = document.createElement('p')
    desc.textContent = entry.content 

    el.append(title, desc)
    return el
}

function renderEntriesList() {
    const page = document.getElementById('page');
    const paragraph = document.createElement('p');
    paragraph.textContent = "Loading";
    page.replaceChildren(paragraph);

    axios.get('/api/sessions')
        .then(response => {
            if (!response.data.loggedIn) {
                window.location = "/login.html"
                return
            }
            const userId = response.data.userId
            axios.get(`/api/users/${userId}/entries`)
                .then(response => {
                    const listElements = response.data.map(row => renderEntry(userId, row))
                    if (listElements.length === 0) {
                        page.innerHTML = '<p>No entries yet</p>'
                        return
                    }
                    page.replaceChildren(...listElements)
                }).catch((err) => {
                    console.warn(err)
                })
        })   
}