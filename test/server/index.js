import express from 'express';
const PORT = process.env.PORT || 3001;
const app = express();

import fs from 'fs' 

app.get("/", (req, res) => {
  res.json({ d: "Hello!" });
});

const dirname = `${process.cwd()}/server/data/`; 

const getData = (chs, i, els, dField) => { 

	return chs[i][els].reduce((rs, el, k) => { 

	  if(validUrl(el)) { 
	  
		rs.push(
		  fetch(el)
		    .then(res => res.json())
		    .then(data => { chs[i][els][k] = data[dField]; }) 
		); 
	  } 

	  return rs; 
	
	}, []);  

} 

const validUrl = (s) => {
    try {
      new URL(s);
      return true;
    } catch (err) {
      return false;
    }
};

app.get("/api", async (req, res) => {

  try {

	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	
    const name = req.query.name.trim(); 

	let chs = []; 

    const apiRes = await fetch('https://swapi.dev/api/people/?search=' + name);
    let jsonD = await apiRes.json();

    if(jsonD.count == 0) { 

	  //Grogu
      const fileNames = await fs.promises.readdir(dirname);
      
	  for (let filename of fileNames) {

		  let ch = await fs.promises.readFile(dirname + filename, 'utf8'); 

		  ch = JSON.parse(ch); 

		  if(ch.name.trim() === name) { chs.push(ch); } 

      }

    } else { 
	
	  //Luke Skywalker 
	  chs = jsonD.results; 

	} 
	
	if(chs.length == 0) { res.json({ d: chs }); } 

	let requests = []; 
	  
	chs.map(async (ch, i) => {

	  requests = requests.concat(getData(chs, i, 'films', 'title'))
				   .concat(getData(chs, i, 'species', 'name')) 
				   .concat(getData(chs, i, 'vehicles', 'name'))
				   .concat(getData(chs, i, 'starships', 'name'))

	  if(validUrl(ch.homeworld)) { 
	  
	    let rsPlanet = fetch(ch.homeworld)
					     .then(res => res.json())
                         .then(data => { chs[i].homeworld = data.name; }) 
			
	    requests = requests.concat(rsPlanet); 
	  
	  } 

		
	  try {
		await Promise.all(requests) 

		res.json({ d: chs }); 
		  
	  } catch (err) {
		console.error(err)
      } 
		
	});

  } catch (err) {
    console.log(err)
    res.status(500).send('Ooops!')
  }

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});