# PecuLab
PecuLab is a website developed by the lab's members.
* **Link:** The live server opens [here](http://ec2-18-191-117-61.us-east-2.compute.amazonaws.com:7123/).

## Installation
Download the repository
```bash
$ git clone https://github.com/MiccWan/PecuLab.git
$ cd PecuLab
```
This website is developed using [Node.js](https://nodejs.org/), and uses [Express](https://expressjs.com/) as its web framework.
Once you have downloaded Node.js, run the following commands:
```bash
$ npm install
```
Then add a file named config.json, setting your port and password as follow:
```bash
$ touch config.json
```
In config.json:
```json
{
	"port": <YOUR_PORT>,
	"password": <YOUR_PASSWORD>,
    "DEBUG": <true/false>
}
```

Finally, open your server using:
```bash
$ node app.js
```

Test your app by connecting to "http://localhost:<YOUR_PORT>"
