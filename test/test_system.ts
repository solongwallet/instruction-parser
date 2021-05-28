import { Account, PublicKey } from "@solana/web3.js";
import {Token} from "@solana/spl-token";
import {IParserManager} from "@solong/iparser";


function testToken() {
    let programID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
    let mint = new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
    let account = new Account();
    let owner = new Account();

    let trxi = Token.createInitAccountInstruction(programID, mint, account, owner);
    let msg = IParserManager.instance().parseInstruction("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",trxi)
    console.log("msg is ", msg)
}