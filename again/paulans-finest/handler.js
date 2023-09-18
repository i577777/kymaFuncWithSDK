//const all = require("OData");
const all = require("OData/index.js");

module.exports = {
	main: async function (event, context) {
		const od = all.oData;
		const odfn = od();
		console.log("Lets go!");
		const resultPromise = odfn.basePricesApi.requestBuilder().getAll().top(5).execute({ destinationName: 'PAULAN_ODATA_DEST' });
		console.log("Still alive!");
		resultPromise.then(data => { console.log(data); } );
		return "done";
    }

}
