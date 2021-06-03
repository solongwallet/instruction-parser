import { IParserPlugin, Message } from '@src/iparserPlugin';
import { TransactionInstruction } from '@solana/web3.js';
import { decodeInstruction } from '@project-serum/serum';

export class SerumV1Old implements IParserPlugin {
  programID = 'BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg';
  parseInstruction(instruction: TransactionInstruction): Message {
    const msg = new Message();
    const it = decodeInstruction(instruction.data);
    console.log('it:', it);
    msg.program = this.programID;
    msg.type = 'instruction';
    msg.inputs = new Map<string, string>();

    if (it.initializeMarket != null) {
      console.log('it is initializeMarket');
      msg.name = 'initializeMarket';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58());
      msg.inputs.set('requestQueue', instruction.keys[1].pubkey.toBase58());
      msg.inputs.set('eventQueue', instruction.keys[2].pubkey.toBase58());
      msg.inputs.set('bids', instruction.keys[3].pubkey.toBase58());
      msg.inputs.set('asks', instruction.keys[4].pubkey.toBase58());
      msg.inputs.set('baseVault', instruction.keys[5].pubkey.toBase58());
      msg.inputs.set('quoteVault', instruction.keys[6].pubkey.toBase58());
      msg.inputs.set('baseMint', instruction.keys[7].pubkey.toBase58());
      msg.inputs.set('quoteMint', instruction.keys[8].pubkey.toBase58());
      msg.inputs.set('rentSysvar', instruction.keys[9].pubkey.toBase58());

      msg.inputs.set('baseLotSize', it.initializeMarket.baseLotSize.toString());
      msg.inputs.set('quoteLotSize', it.initializeMarket.quoteLotSize.toString());
      msg.inputs.set('feeRateBps', it.initializeMarket.feeRateBps.toString());
      msg.inputs.set('vaultSignerNonce', it.initializeMarket.vaultSignerNonce.toString());
      msg.inputs.set('quoteDustThreshold', it.initializeMarket.quoteDustThreshold.toString());
    } else if (it.newOrder != null) {
      console.log('it is newOrder');
      msg.name = 'newOrder';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58());
      msg.inputs.set('openOrders', instruction.keys[1].pubkey.toBase58());
      msg.inputs.set('requestQueue', instruction.keys[2].pubkey.toBase58());
      msg.inputs.set('payer', instruction.keys[3].pubkey.toBase58());
      msg.inputs.set('owner', instruction.keys[4].pubkey.toBase58());
      msg.inputs.set('baseVault', instruction.keys[5].pubkey.toBase58());
      msg.inputs.set('quoteVault', instruction.keys[6].pubkey.toBase58());

      msg.inputs.set('side', it.newOrder.side.toString());
      msg.inputs.set('limitPrice', it.newOrder.limitPrice.toString());
      msg.inputs.set('maxQuantity', it.newOrder.maxQuantity.toString());
      msg.inputs.set('orderType', it.newOrder.orderType.toString());
      msg.inputs.set('clientId', it.newOrder.clientId.toString());
    } else if (it.matchOrders != null) {
      console.log('it is matchOrders');
      msg.name = 'matchOrders';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58());
      msg.inputs.set('eventQueue', instruction.keys[1].pubkey.toBase58());
      msg.inputs.set('bids', instruction.keys[2].pubkey.toBase58());
      msg.inputs.set('asks', instruction.keys[3].pubkey.toBase58());
      msg.inputs.set('baseVault', instruction.keys[4].pubkey.toBase58());
      msg.inputs.set('quoteVault', instruction.keys[5].pubkey.toBase58());

      msg.inputs.set('limit', it.matchOrders.limit.toString());
    } else if (it.consumeEvents != null) {
      console.log('it is consumeEvents');
      msg.name = 'consumeEvents';
      msg.inputs.set('market', instruction.keys[instruction.keys.length-2].pubkey.toBase58()); 
      msg.inputs.set('eventQueue', instruction.keys[instruction.keys.length-1].pubkey.toBase58()); 

      msg.inputs.set('limit', it.consumeEvents.limit.toString());
    } else if (it.cancelOrder != null) {
      console.log('it is cancelOrder');
      msg.name = 'cancelOrder';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58());
      msg.inputs.set('openOrders', instruction.keys[1].pubkey.toBase58());
      msg.inputs.set('requestQueue', instruction.keys[2].pubkey.toBase58());
      msg.inputs.set('owner', instruction.keys[3].pubkey.toBase58());

      msg.inputs.set('side', it.cancelOrder.side.toString());
      msg.inputs.set('orderId', it.cancelOrder.orderId.toString());
      msg.inputs.set('openOrders', it.cancelOrder.openOrders.toString());
      msg.inputs.set('openOrdersSlot', it.cancelOrder.openOrdersSlot.toString());
    } else if (it.settleFunds != null) {
      console.log('it is settleFunds');
      msg.name = 'settleFunds';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58());
      msg.inputs.set('openOrders', instruction.keys[1].pubkey.toBase58());
      msg.inputs.set('owner', instruction.keys[2].pubkey.toBase58());
      msg.inputs.set('baseVault', instruction.keys[3].pubkey.toBase58());
      msg.inputs.set('quoteVault', instruction.keys[4].pubkey.toBase58());
      msg.inputs.set('baseWallet', instruction.keys[5].pubkey.toBase58());
      msg.inputs.set('quoteWallet', instruction.keys[6].pubkey.toBase58());
      msg.inputs.set('vaultSigner', instruction.keys[7].pubkey.toBase58());

    } else if (it.cancelOrderByClientId != null) {
      console.log('it is cancelOrderByClientId');
      msg.name = 'cancelOrderByClientId';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('openOrders', instruction.keys[1].pubkey.toBase58())
      msg.inputs.set('requestQueue', instruction.keys[2].pubkey.toBase58())
      msg.inputs.set('owner', instruction.keys[3].pubkey.toBase58())

      msg.inputs.set('clientId', it.cancelOrderByClientId.clientId.toString());
    } else if (it.newOrderV3 != null) {
      console.log('it is newOrderV3');
      msg.name = 'newOrderV3';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('openOrders', instruction.keys[1].pubkey.toBase58())
      msg.inputs.set('requestQueue', instruction.keys[2].pubkey.toBase58())
      msg.inputs.set('eventQueue', instruction.keys[3].pubkey.toBase58())
      msg.inputs.set('bids', instruction.keys[4].pubkey.toBase58())
      msg.inputs.set('asks', instruction.keys[5].pubkey.toBase58())
      msg.inputs.set('payer', instruction.keys[6].pubkey.toBase58())
      msg.inputs.set('owner', instruction.keys[7].pubkey.toBase58())
      msg.inputs.set('baseVault', instruction.keys[8].pubkey.toBase58())
      msg.inputs.set('quoteVault', instruction.keys[9].pubkey.toBase58())

      msg.inputs.set('side', it.newOrderV3.side.toString());
      msg.inputs.set('limitPrice', it.newOrderV3.limitPrice.toString());
      msg.inputs.set('maxBaseQuantity', it.newOrderV3.maxBaseQuantity.toString());
      msg.inputs.set('maxQuoteQuantity', it.newOrderV3.maxQuoteQuantity.toString());
      msg.inputs.set('selfTradeBehavior', it.newOrderV3.selfTradeBehavior.toString());
      msg.inputs.set('orderType', it.newOrderV3.orderType.toString());
      msg.inputs.set('clientId', it.newOrderV3.clientId.toString());
    } else if (it.cancelOrderV2 != null) {
      console.log('it is cancelOrderV2');
      msg.name = 'cancelOrderV2';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('bids', instruction.keys[1].pubkey.toBase58())
      msg.inputs.set('asks', instruction.keys[2].pubkey.toBase58())
      msg.inputs.set('openOrders', instruction.keys[3].pubkey.toBase58())
      msg.inputs.set('owner', instruction.keys[4].pubkey.toBase58())
      msg.inputs.set('eventQueue', instruction.keys[5].pubkey.toBase58())


      msg.inputs.set('side', it.cancelOrderV2.side.toString());
      msg.inputs.set('orderId', it.cancelOrderV2.orderId.toString());
    } else if (it.cancelOrderByClientIdV2 != null) {
      console.log('it is cancelOrderByClientIdV2');
      msg.name = 'cancelOrderByClientIdV2';
      msg.inputs.set('market', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('bids', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('asks', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('openOrders', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('owner', instruction.keys[0].pubkey.toBase58())
      msg.inputs.set('eventQueue', instruction.keys[0].pubkey.toBase58())

      msg.inputs.set('clientId', it.cancelOrderByClientIdV2.clientId.toString());
    } 

    return msg;
  }
}

export const plugin: SerumV1Old = new SerumV1Old();
