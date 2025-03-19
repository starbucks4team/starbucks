async function getOrderHistory(url) {
  try {
    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

window.onload = async () => {
  importPage('header');
  importPage('footer');
  let result = await getOrderHistory('http://127.0.0.1:3000/orderhistory');
  for (let i = 0; i < result.length; i++) {
    let container = document.querySelector('#order-table>tbody');
    let template = `<tr class="underline">
            <td class="order-cell">${result[i].orderNo}</td>
            <td class="order-cell">${result[i].orderDate}</td>
            <td class="order-cell">`;

    for (let j = 0; j < result[i].prodNos.length; j++) {
      template += `${result[i].prodNos[j]}<br/>`;
    }
    template += `</td> <td class="order-cell">`;
    for (let j = 0; j < result[i].prodNames.length; j++) {
      template += `${result[i].prodNames[j]}<br/>`;
    }
    template += `</td> <td class="order-cell">`;
    for (let j = 0; j < result[i].prices.length; j++) {
      template += `${result[i].prices[j]}<br/>`;
    }
    template += `</td> <td class="order-cell">`;
    for (let j = 0; j < result[i].quantities.length; j++) {
      template += `${result[i].quantities[j]}<br/>`;
    }
    template += `</td> <td class="order-cell">`;
    template += `</td></tr>`;
    container.innerHTML += template;
  }
};
