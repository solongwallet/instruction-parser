"use strict";
exports.__esModule = true;
var web3_js_1 = require("@solana/web3.js");
var spl_token_1 = require("@solana/spl-token");
var iparserManager_1 = require("../src/iparserManager");
function testToken() {
    var programID = new web3_js_1.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
    var mint = new web3_js_1.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
    var account = new web3_js_1.Account();
    var owner = new web3_js_1.Account();
    var trxi = spl_token_1.Token.createInitAccountInstruction(programID, mint, account, owner);
    var msg = iparserManager_1.IParserManager.instance().parseInstruction("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", trxi);
    console.log("msg is ", msg);
}
