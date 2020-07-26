document.addEventListener("DOMContentLoaded", function(event) { 
    let q1 = async () => {
        const response = await fetch('http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
        const result = await response.json();
        console.log(result);
        document.getElementById('type').textContent = result.product;
        let rows = '';
        result.dataseries.forEach((el) => {
            newString = ''; // '<tr>td>qwe</td>'
            newString += '<td>' + el.rh2m + '</td>';
            newString += '<td>' + el.cloudcover + '</td>';
            newString += '<td>' + el.timepoint + '</td>';
            newString = '<tr>' + newString + '</tr>';
            rows += newString;
        });
        document.getElementById('rows').innerHTML = rows;
    }
    q1();
  });