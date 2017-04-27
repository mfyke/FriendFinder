var friends = require("../data/friends");
module.exports = function(app) {


   app.get("/api/friends", function(req, res) {
   		res.json(friends);
   });


  

	app.post("/api/friends", function(req, res) {
		friends.push(req.body);
		var x = req.body;
	 	//var differences = [];
	 	var smallest=9000;
	 	var bestF;
	 	for (var i = 0; i<friends.length; i++) {
	 		var total = 0;
	 		if (x.name != friends[i].name) {
	 			for (var j = 0; j < friends[i].scores.length; j++) {
	 				total += Math.abs(parseInt(friends[i].scores[j])-parseInt(x.scores[j]))
	 			}
	 			if(total<smallest) {
	 				smallest=total;
	 				bestF=i;
	 			}
	 		}
	 	}
	 

	  	res.json(friends[bestF]);
		
		// console.log(friends);
		// console.log(smallest);
	  });


};
