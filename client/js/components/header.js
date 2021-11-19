function logout() {
    axios.delete('/api/sessions').then((respose) => {
        window.location = "/login.html"
    })
}

function renderHeader() {
    const header = document.getElementById('header-nav');
    header.innerHTML = `
    <h1>Dear Diary</h1>
    <ul id="navlist">
        <li onClick="renderEntriesList()">Entries</li>
        <li onClick="renderNewEntryForm()">New Entry</li>
        <li onClick="logout()">Logout</li>
    </ul>
    `
}