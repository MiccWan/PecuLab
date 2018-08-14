# PecuLab
PecuLab is a website developed by the lab's members.
* **Link:** The live server opens [here](https://github.com/MiccWan).

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
Then add a file named config.json, setting your port as follow:
```bash
$ touch config.json
```
In config.json:
```json
{
	"port":<YOUR_PORT>
}
```

Finally, open your server using:
```bash
$ node app.js
```

Test is by connecting to "http://localhost:<YOUR_PORT>"
