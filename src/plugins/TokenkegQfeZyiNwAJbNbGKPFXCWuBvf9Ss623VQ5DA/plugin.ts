import { IParserPlugin, Message } from '@src/iparserPlugin';
import { TransactionInstruction } from '@solana/web3.js';
import { TokenInstruction } from './instruction';

export class TokenProgram implements IParserPlugin {
  programID = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';

  parseInstruction(instruction: TransactionInstruction): Message {
    const msg = new Message();
    const it = TokenInstruction.deocdeTokenInstructionType(instruction);
    msg.program = this.programID;
    msg.type = 'instruction';
    msg.inputs = new Map<string, string>();
    switch (it) {
      case 'InitMint': {
        msg.name = 'InitMint';
        const param = TokenInstruction.decodeInitMint(instruction);
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('rent', param.rent.toBase58());
        msg.inputs.set('decimals', param.decimals.toString());
        msg.inputs.set('mintAuthority', param.mintAuthority.toBase58());
        msg.inputs.set('option', param.option.toString());
        msg.inputs.set('freezeAuthority', param.freezeAuthority.toBase58());
        break;
      }
      case 'InitAccount': {
        msg.name = 'InitAccount';
        const param = TokenInstruction.decodeInitAccount(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        msg.inputs.set('rent', param.rent.toBase58());
        break;
      }
      case 'Transfer': {
        msg.name = 'Transfer';
        const param = TokenInstruction.decodeTransfer(instruction);
        msg.inputs.set('source', param.source.toBase58());
        msg.inputs.set('destination', param.destination.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        break;
      }
      case 'Approve':{
        msg.name = 'Approve';
        const param = TokenInstruction.decodeApprove(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('delegate', param.delegate.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        break;
      }
      case 'Revoke': {
        msg.name = 'Revoke';
        const param = TokenInstruction.decodeRevoke(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        break;
      }
      case 'SetAuthority': {
        msg.name = 'SetAuthority';
        const param = TokenInstruction.decodeSetAuthority(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('currentAuthority', param.currentAuthority.toBase58());
        msg.inputs.set('authorityType', param.authorityType.toString());
        msg.inputs.set('option', param.option.toString());
        msg.inputs.set('newAuthority', param.newAuthority.toBase58());
        break;
      }
      case 'MintTo': {
        msg.name = 'MintTo';
        const param = TokenInstruction.decodeMintTo(instruction);
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('dest', param.dest.toBase58());
        msg.inputs.set('authority', param.authority.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        break;
      }
      case 'Burn': {
        msg.name = 'Burn';
        const param = TokenInstruction.decodeBurn(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        break;
      }
      case 'CloseAccount': {
        msg.name = 'CloseAccount';
        const param = TokenInstruction.decodeCloseAccount(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('dest', param.dest.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        break;
      }
      case 'FreezeAccount': {
        msg.name = 'FreezeAccount';
        const param = TokenInstruction.decodeFreezeAccount(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('dest', param.dest.toBase58());
        msg.inputs.set('authority', param.authority.toBase58());
        break;
      }
      case 'ThawAccount': {
        msg.name = 'ThawAccount';
        const param = TokenInstruction.decodeThawAccount(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('dest', param.dest.toBase58());
        msg.inputs.set('authority', param.authority.toBase58());;
        break;
      }
      case 'TransferChecked': {
        msg.name = 'TransferChecked';
        const param = TokenInstruction.decodeTransferChecked(instruction);
        msg.inputs.set('source', param.source.toBase58());
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('destination', param.destination.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        msg.inputs.set('decimals', param.decimals.toString());
        break;
      }
      case 'ApproveChecked': {
        msg.name = 'ApproveChecked';
        const param = TokenInstruction.decodeApproveChecked(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('delegate', param.delegate.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        msg.inputs.set('decimals', param.decimals.toString());
        break;
      }
      case 'MintToChecked': {
        msg.name = 'MintToChecked';
        const param = TokenInstruction.decodeMintToChecked(instruction);
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('dest', param.dest.toBase58());
        msg.inputs.set('authority', param.authority.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        msg.inputs.set('decimals', param.decimals.toString());
        break;
      }
      case 'BurnChecked': {
        msg.name = 'BurnChecked';
        const param = TokenInstruction.decodeBurnChecked(instruction);
        msg.inputs.set('account', param.account.toBase58());
        msg.inputs.set('mint', param.mint.toBase58());
        msg.inputs.set('owner', param.owner.toBase58());
        msg.inputs.set('amount', param.amount.toString());
        msg.inputs.set('decimals', param.decimals.toString());
        break;
      }
      default: {
        msg.name = "unknown";
        break;
      }
        
    }
    return msg;
  }
}

export const plugin: TokenProgram = new TokenProgram();
