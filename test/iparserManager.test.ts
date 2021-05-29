import { Account, PublicKey,SystemProgram } from "@solana/web3.js";
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
            const msg = ipm.parseInstruction("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", trxi);
            console.log("msg is :", msg)
        } catch(err) {
            console.log("got error:", err)
            expect(err).toBeInstanceOf(Error);
        }
    })

    it(`parseInstruction method implemented`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins(); // load 3 plugins
        const programID = new PublicKey("11111111111111111111111111111111");
        const account = new Account();

        // test parseInstruction implemented.
        const trxi = SystemProgram.createAccount({
            fromPubkey:account.publicKey,
            newAccountPubkey:account.publicKey,
            lamports:123,
            space:123,
            programId: programID, 
        });
        const msg = ipm.parseInstruction("11111111111111111111111111111111", trxi);
        console.log(msg);
        // expect(msg).toBeInstanceOf();
    })
})