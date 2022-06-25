/*
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

var days = [366];
*/

/*
var days = [1, 2, 3, 4, 5, 6, 7,
11,18,
22,23,24,25,26,27,28,


36,37,38,39,40,41,42,
43,50,57,
46,53,60,
49,56,63,


71,72,73,74,75,76,77,
84,91,98,


106,107,108,109,110,111,112,
119,126,133,


141,142,143,144,145,146,147,
148,155,
154,161,
162,163,164,165,166,167,168,


211,212,213,214,215,216,
195,
203,210,


226,227,228,229,230,231,
232,239,
236,243,
247,248,249,250,251,252,


260,261,262,263,264,
272,279,
273,280,
281,282,283,284,285,


296,297,298,299,300,301,
302,309,
306,313,
317,318,319,320,321,322,


332,334,
337,343,
345,349,
353,354,355];
*/
/*
const makeCommit = (ind, n) => {
	if (n === 0) {
		simpleGit().push(); ind++; n = 1;
		if (ind === days.length) {
			return;
		}
	}

	let DATE = moment().subtract(1, 'y').add(-1, 'd')
		.add(days[ind], 'd').format();
	let data = {
		date: DATE
	}
	console.log(DATE + ' ' + n);
	jsonfile.writeFile(FILE_PATH, data, () => {
		simpleGit().add([FILE_PATH]).commit(DATE+' '+n, { '--date': DATE },
			makeCommit.bind(this, ind, --n)).push();
	});    
}

let ind = 0; let n = 1;
makeCommit(ind, n);
*/



const jsonfile= require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';
const makeCommit = n => {
	if(n===0) return simpleGit().push();
	const x = random.int(52,52);
	const y = random.int(0,6);
	const DATE = moment().subtract(1,'y').add(1,'d')
		.add(x,'w').add(y,'d').format();
	const data = {
		date: DATE
	}
	console.log(DATE);
	jsonfile.writeFile(FILE_PATH, data, ()=>{
		simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE},
		makeCommit.bind(this, --n));
	});
}
makeCommit(10);