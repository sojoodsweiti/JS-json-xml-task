import { log } from 'console';
import * as fs from 'fs';
const jsonDataFile = "./data.json"
const XMLDataFile = "./data.xml"
import xml2js from 'xml2js';
import { Parser } from 'xml2js';
//import { parseString } from 'xml2js';  
import{ DOMParser } from 'xmldom'

function jsonRead(){
    fs.readFile(jsonDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            jsonData.forEach(item => {
                const id = item.id;
                const name = item.name;
                const username = item.username;
                const email = item.email;
                console.log('ID:', id);
                console.log('Name:', name);
                console.log('Username:', username);
                console.log('Email:', email);
            })
            
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}
jsonRead()

fs.readFile(XMLDataFile, 'utf8', (err, xmlData) => {
    if (err) {
        console.error('Error reading XML file:', err);
        return;
    }
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item'); // Replace with the element name in your XML

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const id = item.getElementsByTagName('id')[0].textContent;
        const name = item.getElementsByTagName('name')[0].textContent;
        const username = item.getElementsByTagName('username')[0].textContent;
        const email = item.getElementsByTagName('email')[0].textContent;

        console.log('ID:', id);
        console.log('Name:', name);
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('---'); // Separator
    }
    
});

