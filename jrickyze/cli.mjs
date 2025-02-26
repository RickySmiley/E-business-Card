#!/usr/bin/env node


import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
	padding: 2,
	width: 85,
	title: "jrickyze",
	titleAlignment: "center",
	borderStyle: "double",
	borderColor: "#b906f3",
};

const intro = chalk.bold("Jose Zermeno |" + chalk.hex("#ff0eb2") (" Software Developer ") + "\nFind me on the internet.\n\n");


const links = [
	{ name: chalk.hex("#ffffff").bgHex("#f30909")(" NPM "), urls:["        https://www.npmjs.com/~zermenor29"] },
	{ name: chalk.hex("#0e0606").bgHex("#ffffff")(" GitHub "), urls: ["    https://github.com/RickySmiley"]}, 
	{ name: chalk.hex("#fff").bgHex("#1829e5")(" LinkedIn "), urls: ["  https://www.linkedin.com/in/jose-zermeno-778965b9/"]},
];

const linkList = links.map((link) => `${link.name} ${link.urls.join('\n')}`).join("\n");


console.log(boxen(intro + linkList, boxenOptions));
