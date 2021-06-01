import { IParserPlugin, Message } from '@src/iparserPlugin';
import { TransactionInstruction } from '@solana/web3.js';
import {decodeInstruction} from '@project-serum/serum'

export class SerumV1Old implements IParserPlugin {
  programID = '4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn';
  parseInstruction(instruction: TransactionInstruction): Message {
    const msg = new Message();
    const it = decodeInstruction(instruction.data);
    console.log("it:", it)
    msg.program = this.programID;
    msg.type = 'instruction';
    msg.inputs = new Map<string, string>();
    // switch (it) {
    // }
    if (it.initializeMarket != null) {
        console.log("it is initializeMarket")
    } else if (it.newOrder != null) {
        console.log("it is newOrder")
    } else if (it.matchOrders != null) {
        console.log("it is matchOrders")
    } else if (it.consumeEvents != null) {
        console.log("it is consumeEvents")
    } else if (it.cancelOrder != null) {
        console.log("it is cancelOrder")
    } else if (it.settleFunds != null) {
        console.log("it is settleFunds")
    } else if (it.cancelOrderByClientId != null) {
        console.log("it is cancelOrderByClientId")
    } else if (it.newOrderV3 != null) {
        console.log("it is newOrderV3")
    } else if (it.cancelOrderV2 != null) {
        console.log("it is cancelOrderV2")
    } else if (it.cancelOrderByClientIdV2 != null) {
        console.log("it is cancelOrderByClientIdV2")
    } else if (it.cancelOrderByClientIdV2 != null) {
        console.log("it is cancelOrderByClientIdV2")
    }
    
    return msg
    }
}

export const plugin: SerumV1Old = new SerumV1Old();
