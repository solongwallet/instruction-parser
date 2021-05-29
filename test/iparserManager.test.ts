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
        expect(ipm.plugins.size).toBe(3);
    })

    it(`parseInstruction method not implemented`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins(); // load 3 plugins
        const programID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
        const mint = new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
        const account = new Account();
        const owner = new Account();

        // test parseInstruction not implemented.
        const trxi = Token.createInitAccountInstruction(programID, mint, account.publicKey, owner.publicKey);
        try{
            ipm.parseInstruction("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", trxi);
        } catch(err) {
            expect(err).toBeInstanceOf(Error);
        }
    })

    it(`parseInstruction method implemented`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins(); // load 3 plugins
        const programID = new PublicKey("11111111111111111111111111111111");
        const mint = new PublicKey("11111111111111111111111111111111");
        const account = new Account();
        const owner = new Account();

        // test parseInstruction implemented.
        const trxi = Token.createInitAccountInstruction(programID, mint, account.publicKey, owner.publicKey);
        const msg = ipm.parseInstruction("11111111111111111111111111111111", trxi);
        console.log(msg);
        // expect(msg).toBeInstanceOf();
    })
})