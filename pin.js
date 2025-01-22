async function func(){
    var x= document.getElementById('pin-search').value

    x = Number.parseInt(x)
    let url =  `https://api.postalpincode.in/pincode/${x}`
    
        let value = await fetch(url)
        let val = await value.json()
        console.log(val)
     if (val[0].PostOffice||val[0]||val[0].PostOffice.length===0) {

            const container = document.getElementById('container');
            container.innerHTML = 'No results found or invalid input. Please try again.';}
     
let table ='<table border = "2"> <thead><tr><th>Name</th><th>Branch Type</th><th>Delivery Status</th><th>Circle</th><th>District</th><th>Division</th><th>Region</th><th>Block</th><th>State</th><th>Country</th><th>Pincode</th></tr></thead><tbody>'
val[0].PostOffice.forEach(element => {

table += `<tr>
            <td>${element.Name}</td>
            <td>${element.BranchType}</td>
            <td>${element.DeliveryStatus}</td>
            <td>${element.Circle}</td>
            <td>${element.District}</td>
            <td>${element.Division}</td>
            <td>${element.Region}</td>
            <td>${element.Block}</td>
            <td>${element.State}</td>
            <td>${element.Country}</td>
            <td>${element.Pincode}</td>
          </tr>`;});
table = table+'</tbody></table>'
const container = document.getElementById('container')
container.innerHTML = table
    }
