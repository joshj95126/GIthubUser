function main() {
    $('form').submit(e => {
        e.preventDefault()
        const username = e.target.username.value
        console.log(username);
        getData(username)
    })
}

function getData(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderData(data)
        })
}

function renderData(data) {
    const html = data.map(item => `
<li>
${item.name}
</li>
`)
    $('ul').html(html)
}

$(main)