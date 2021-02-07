const generatePage = require('./page-template');
const readline = require('readline');
const fs = require('fs');



const processLineByLine = async () => {
    let contactList = [];



    const fileStream = fs.createReadStream('C:/Users/essen/Downloads/user-notes_react.csv');
    // const fileStream = fs.createReadStream('some.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {

        const createObj = (contactArr) => {
            let contactObj = {};
            contactObj.courseNote = contactArr[0];
            contactObj.courseCourse = contactArr[1];
            contactObj.courseModule = contactArr[2];
            contactObj.courseClip = contactArr[3];
            contactObj.courseClipTime = contactArr[4];
            contactList.push(contactObj);
        }
        // let contactObj = {};
        const contactArr = line.split(",");
        if (contactArr.length === 6) {
            createObj(contactArr);
        }
        // else {
        //     const tempArr = line.split('",');
        //     if (tempArr.length === 6) {
        //         createObj(tempArr);
        //     }
        //     // if (tempArr.length === 6) {
        //     // }
        // }
    }
    console.log(contactList, contactList.length);


    // fs.writeFile('./index.html', generatePage(contactList), err => {
    //     if (err)
    //         throw new Error(err);
    //     console.log('Success. Check out index.html');
    // });

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

