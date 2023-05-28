let url ='https://646f13ae09ff19b1208687f0.mockapi.io/brewery'

function createTable(data)
{
    let tbody = document.getElementById('table-body')
    data.forEach(e => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${e.id}</td>
        <td>${e.name}</td>
        <td>${e.street}</td>
        <td>${e.city}</td>
        <td>${e.state}</td>
        <td>${e.postalcode}</td>
        <td>${e.country}</td>
        <td>${e.type}</td>
        <td>${e.websiteurl}</td>
        `
        tbody.append(tr)
    });
}
  

async function loadData()
{
    let res = await fetch(url);
    let data = await res.json()
    createTable(data)
}
loadData()
    