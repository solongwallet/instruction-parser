import { Account, PublicKey,SystemProgram } from "@solana/web3.js";
import { Token } from "@solana/spl-token";
import { IParserManager } from "../src/iparserManager";
import {DexInstructions} from "@project-serum/serum"
import BN from 'bn.js'

describe('IParserManager Class', () => {
    it(`instance`, () => {
        const ipm = IParserManager.instance();
        expect(ipm).toBeInstanceOf(IParserManager);
    });

    it(`plugins length`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins();
        // @ts-ignore
        expect(ipm.plugins.size).toBe(4);
    })

    it(`parseInstruction method not implemented`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins(); // load 3 plugins
        const programID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
        const mint = new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt");
        const owner = new Account();

        // test parseInstruction not implemented.
        //const trxi = Token.createInitAccountInstruction(programID, mint, account.publicKey, owner.publicKey);
        const trxi = Token.createInitMintInstruction(programID,mint,10,owner.publicKey,owner.publicKey);
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
    it(`parseInstruction method implemented`, () => {
        const ipm = IParserManager.instance();
        ipm.loadPlugins(); // load 3 plugins
        const programID = new PublicKey("4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn");
        //const account = new Account();

        // test parseInstruction implemented.
        const trxi = DexInstructions.initializeMarket({
            market:programID,
            requestQueue:programID,
            eventQueue:programID,
            bids:programID,
            asks:programID,
            baseVault:programID,
            quoteVault:programID,
            baseMint:programID,
            quoteMint:programID,
            baseLotSize: new BN(10),
            quoteLotSize: new BN(100000),
            feeRateBps: 5,
            vaultSignerNonce: new BN(1),
            quoteDustThreshold: new BN(10),
            programId: programID,
        });
        const msg = ipm.parseInstruction("4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn", trxi);
        console.log(msg);
        // expect(msg).toBeInstanceOf();
    })
})