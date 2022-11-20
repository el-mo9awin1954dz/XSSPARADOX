
//Dependencies
const Puppeteer = require("puppeteer")

//Variables
const args = process.argv.slice(2);
const URL = args[0];
const XSSPAYLOAD = args[1];
const channel = args[3];
const token = args[2];
const msgme = args[4];

//Main


Main()


if(URL === undefined || XSSPAYLOAD === undefined || token === undefined || channel === undefined || msgme === undefined) {

     const str = `
        DZROOT BUG
        SCAN
        FIND
        EXPLOIT
                        DZ-HACKING-LAB @EL-MO9AWIN\n 
                                        `;



    console.log(str);

    console.log('\n\n','\x1b[31m',
     `
	⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⠀⠀⠀⠀⠀⢀⣠⣤⣶⣾⣿⡿⠟⠛⠛⠛⠛⠛⠻⢿⣿⣷⣶⣦⣤⣀⠀⠀⠀⠀⠀⠸⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣇⠀⠀⢴⣶⣿⣿⣿⡟⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⣿⣿⣿⣷⣶⠀⠀⢀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣆⠀⠈⠉⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠈⠉⠀⢀⣾⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣻⣿⣧⡀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⣰⣿⣿⣁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣿⣿⠿⠛⣿⣷⡄⠀⠸⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡏⠀⠀⣴⣿⠟⠿⢿⣿⣷⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡟⠋⠉⠀⠀⠀⠀⠈⢿⣿⣄⠀⠻⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⡿⠁⢀⣾⣿⠏⠀⠀⠀⠀⠉⠉⠻⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣦⠀⠙⢿⣿⣶⣤⣀⣀⠀⠀⠀⣀⣀⣤⣶⣿⣿⠟⠀⣰⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⠀⣰⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⠿⡿⡿⠿⣿⣿⢿⣿⣿⣿⣿⣿⢿⢿⡿⠿⠿⠿⠿⠿⢿⣿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣷⡀⢹⣿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⡿⠁⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⠁⠀⠀⣿⣿⠀XSS⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⣿⣿⡇⠀⠀⢻⣿⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⣿⠃⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⢿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣿⠇⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⡿⠋⠁⠀⠀⠀⠀⠉⠻⣿⣷⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠈⢿⣿⡄⠀⠀⠀
⠀⠀⠀⣼⣿⠏⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠏⠀⢀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠈⢿⣿⡀⠀⠀
⠀⠀⣸⣿⠏⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠸⣿⣷⣄⠀⢀⣴⣿⡷⠀⠘⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠘⣿⣷⡀⠀
⠀⣸⣿⡟⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀⠈⠻⠟⠀⠸⠿⠋⠀⠀⢠⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠘⣿⣷⠀
⢠⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣷⣦⣀⡀⠀⠀⠀⠀⣀⣤⣶⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢹⣿⡇
⠈⣿⣿⣄⡀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢻⣿⡇⠀⠀⠀⠀⣿⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⣀⣼⣿⠇
⠀⠈⠛⢿⣿⣦⣀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⢀⣤⣾⣿⠟⠁⠀
⠀⠀⠀⠀⠉⠻⣿⣷⣤⡀⠀⣿⣿⠀V⠀0.1⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀PARADOX⠀⣿⣿⡇⠀⣠⣶⣿⡿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣶⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣾⡿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀
	

    `,'\x1b[0m');


    console.log('DZ-HACKING-LAB @EL-MO9AWIN\n');



    console.log("USAGE : node XSSPARADOX.js URL PAYLOAD ID TOKEN XSS-FOUND");
    console.log("\nfor x in $(cat FUZZ-XSS.txt);do  node XSSPARADOX.js URL $x ID TOKEN XSS-FOUND ;done\n");\
    console.log("for x in $(cat FUZZ-XSS.txt);do for z in $(cat urls.txt);do node XSSPARADOX.js $z $x ID TOKEN XSS-FOUND;done;done\n\n");

    process.exit(1);
}
async function Main(){
    const browser = await Puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] })
    const page = await browser.newPage()

    var is_vulnerable = false
    
    page.on("dialog", dialog =>{
        is_vulnerable = true
        dialog.accept()
    })

    await page.goto(URL+XSSPAYLOAD)

    browser.close()
    if(is_vulnerable){

        const notifier = require('node-notifier');

        var MSG = msgme;
    // String
        var alert = "XSS BUG FOUND ON :" + URL+PAYLOAD + " \n" + MSG;
    // Object
        notifier.notify({
        	title: 'XSS BUG FIND',
                message: alert,
        });


        console.log("FOUND XSS >>> ",URL+" |PAYLOAD| "+XSSPAYLOAD)
	const https = require('https')
	const querystring = require('querystring')
	const token = args[3];
	const channel = args[2];
	const FOUND = URL+XSSPAYLOAD;
	const message = "[#] DZPOC FOUND XSS >>> PAYLOAD [1337] |> "+URL;
	module.exports = {
          sendMessage,
  	  sendMessageFor,
  	  sendRequest
	}

	function sendMessage (token, channel, message) {
  	  return sendMessageFor(token, channel)(message)
	}

	function sendMessageFor (token, channel) {
  	  const baseUrl = `https://api.telegram.org/bot${token}`

  	  return message => {
    	    const urlParams = querystring.stringify({
      	      chat_id: channel,
      	      text: message,
      	      parse_mode: 'HTML'
    	    })

    	    return sendRequest(`${baseUrl}/sendMessage?${urlParams}`)
  	  }
	}

	function sendRequest (url) {
  	  return new Promise((resolve, reject) => {
    	    https.get(url, res => res.statusCode === 200 ? resolve(res) : reject(res))
              .on('error', reject)
  	  })
	}
	sendMessage (token, channel, message)

    }else{
        console.log("NOT FOUND XSS >>> ",URL+" |PAYLOAD| "+XSSPAYLOAD)
    }
}

