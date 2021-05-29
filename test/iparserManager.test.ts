import { Account, PublicKey } from "@solana/web3.js";
import { Token } from "@solana/spl-token";
import { IParserManager } from "../src/iparserManager";

describe('IParserManager Class', () => {
    it(`instance`, () => {
        const ipm = IParserManager.instance();
        expect(ipm).toBeInstanceOf(IParserManager);
    });

    it(`plugins length`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins();
        // @ts-ignore
        expect(ipm.plugins.length).toBeInstanceOf(3);
    })

    it(`parseInstruction method`, () => {
        const ipm = IParserManager.instance();
        const programID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
        const mint = new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
        const account = new Account();
        const owner = new Account();

        const trxi = Token.createInitAccountInstruction(programID, mint, account.publicKey, owner.publicKey);
        const msg = ipm.parseInstruction("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", trxi);
        console.log('msg: ', msg);
        // expect(msg).toBe('');
    })
})