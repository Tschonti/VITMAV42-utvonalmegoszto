function clearModal() {
    document.getElementById('name').value = '';
    document.getElementById('time').value = '';
    document.getElementById('type').selectedIndex = 0   ;
    document.getElementById('titlePartOne').innerHTML = 'Új teljesítés';
    document.getElementById('newEditSubmit').dataset.id = '';
    document.getElementById("errors").innerHTML = '';
    document.getElementById("errors").setAttribute('hidden', true)
}

function fillModal(el, mode, id) {
    const name = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    const time = el.parentElement.parentElement.previousElementSibling.innerHTML;
    document.getElementById('titlePartOne').innerHTML = 'Teljesítés szerkesztése';
    document.getElementById('time').value = time;
    document.getElementById('name').value = name;
    document.getElementById('type').selectedIndex = mode + 1;
    document.getElementById('newEditSubmit').dataset.id = id;
}

function fillDeleteModal(el, id) {
    const name = el.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    const time = el.parentElement.parentElement.previousElementSibling.innerHTML;
    document.getElementById('effort-data').innerHTML = ` ${name}, ${time}`;
    document.getElementById('deleteSubmit').setAttribute('href', '/efforts/del/' + id);
}

function onNewEditSubmit() {
    const id = document.getElementById('newEditSubmit').dataset.id;
    const name = document.getElementById('name').value
    const time = document.getElementById('time').value
    const type = document.getElementById('type').value
    if (id > 0) {
        console.log(`POST request to /efforts/edit/${id} ...`)
    } else {
        fetch('/efforts/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, time, type })
        })
        .then(resp => resp.json())
        .then(data => {
            if (typeof data.errors !== "undefined") {
                document.getElementById("errors").innerHTML = ''
                document.getElementById("errors").removeAttribute('hidden')
                data.errors.forEach(err => {
                    const myErr = document.createElement('li')
                    myErr.innerHTML = err
                    document.getElementById("errors").appendChild(myErr)
                })
            } else {
                window.location.reload()
            }
        })
    }
}