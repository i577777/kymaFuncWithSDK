const odataSdk = require("@sap-opps/odata-sdk");
const util = require("util");

const messages = [];

module.exports = {
  main: async function (event, context) {
    try {
      const od = odataSdk.oData;
      const odfn = od();
      messages.push("Lets go! - GitHub version");
      const resultPromise = await odfn.basePricesApi
        .requestBuilder()
        .getAll()
        .top(5)
        .execute({ destinationName: "PAULAN_ODATA_DEST" });
      messages.push("Still alive!");
      messages.push(resultPromise);
      messages.push("done");
    } catch (error) {
      messages.push(error.message);
    } finally {
      return util.inspect(messages);
    }
  },
};
