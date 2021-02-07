const generateList = contactData => {
    return `
        <ul>
            ${contactData
                .map(({ contactName, contactLinkedIn }) => {
                    return `
                      <li class='contact-list'>
                       Name:  <b>${contactName}</b> 
                       LinkedIn:  <b>${contactLinkedIn}</b>
                      </li>
                    `;
                })
                .join(' ')
            }
        </ul>
    `;
}


const generatePage = (contactList) => {
    // console.log(contactList);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact List</title>
    <link rel='stylesheet' href='styles.css'>
</head>
<body>
    ${generateList(contactList)}
</body>
<script type="='text/javascript" src="index.js"></script>
</html>`
}

module.exports = generatePage;