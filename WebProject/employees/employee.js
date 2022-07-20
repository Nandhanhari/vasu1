let employee=[{id:101,ename:"vasu",esal:30000},
{id:102,ename:"basu",esal:40000},
{id:103,ename:"nosu",esal:500000}]


function emp_data(){
    let rows=""
    for(emp of employee){
        rows+=`<tr>
            <td>${emp.id}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
        </tr>`
    }
    document.getElementById('tbody_data').innerHTML = rows
    
}