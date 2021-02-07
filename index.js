const generatePage = require('./page-template');
const readline = require('readline');
const fs = require('fs');



const processLineByLine = async () => {
    let contactList = [];

    const fileStream = fs.createReadStream('C:/Users/essen/OneDrive/Documents/bootcamp_doc/contacts.csv');
    // const fileStream = fs.createReadStream('some.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        let contactObj = {};
        const contactArr = line.split(",");
        contactObj.contactName = contactArr[0];
        contactObj.contactLinkedIn = contactArr[1].trim();
        contactList.push(contactObj);
    }
    // console.log(contactList);

    // try {
        fs.writeFile('./index.html', generatePage(contactList), err => {
            if (err)
                throw new Error(err);
            console.log('Success. Check out index.html');
        });
    // }
    // catch (error) {
    //     console.log('something happened ' + error);
    // }

}
processLineByLine();

// function writeTheFile(contactList) {
//     console.log(contactList);
//     try {
//         fs.writeFile('./index.html', generatePage(contactList), err => {
//             if (err)
//                 throw new Error(err);
//             console.log('Success. Check out index.html');
//         });
//     }
//     catch (error) {
//         console.log('something happened ' + error);
//     }
// }
// writeTheFile(contactList);

