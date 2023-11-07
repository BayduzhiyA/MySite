const node_for_click = document.getElementById("for_click")

function find_edit(){
    const p1  = document.getElementsByTagName('p')[3]
    console.log(p1.innerText)
    p1.innerText = 'BAYDUZHIY'

    const p2  = document.getElementsByTagName('p')[4]
    console.log(p2.innerText)
    p2.innerText = 'ALEXANDR'
}

node_for_click.addEventListener("click",find_edit)
