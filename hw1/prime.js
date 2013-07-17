#!/ust/bin/env node
var fs = require('fs');
var outfile  = "prime.txt";
var out = "";
var i = 0;
var j = 0;
var k = 0;
//console.log("2 ");

var count =0;
for(i=3;i<101;i++)
{
	for(j=2;j<=i/2;j++)
	{
		if((i % j) == 0)
			{
				
				//fs.writeFileSync(outfile, i);
			}
	}

}

