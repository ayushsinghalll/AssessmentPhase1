const data=[['CID','Customer Name','Service Name','Service Date','Cost'],
    ['C1001','Ayush','Car Care Service','22-June-2022',4500],
    ['C1002','Ajay','Car Care Service','26-June-2022',8500],
    ['C1003','Amit','Body Repair Service','22-June-2022',7500],
    ['C1004','Ayush','Preventive Maintained Service','22-June-2022',9500],
    ['C1005','Ayush','Car Care Service','22-May-2022',3500],
    ['C1006','Ayush','Body Repair Service','25-June-2022',6500],
    ['C1007','Ayush','Preventive Maintained Service','22-June-2022',8900],
    ['C1008','Ayush','Body Repair Service','22-June-2022',3500],
    ['C1009','Ayush','Car Care Service','22-June-2022',6600],
    ['C10010','Ayush','Body Repair Service','22-June-2022',4900],
    ['C10011','Ayush','Car Care Service','22-June-2022',4200],
    ['C10012','Ayush','Preventive Maintained Service','22-June-2022',4700],
]

function getCells(data, type) {
    return data.map(cell => `<${type}>${cell}</${type}>`).join('');
}

function createBody(data) {
    return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}

function createTable(data) {
    const [headings, ...rows] = data;
    return `
<center>
    <table>
      <thead>${getCells(headings, 'th')}</thead>
      <tbody>${createBody(rows)}</tbody>
    </table>
    </center>
  `;
}
document.body.insertAdjacentHTML('beforeend', createTable(data));

