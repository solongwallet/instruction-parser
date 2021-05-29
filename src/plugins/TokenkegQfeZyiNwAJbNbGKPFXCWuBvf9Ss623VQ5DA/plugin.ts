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
    }
    return msg;
  }
}

export const plugin: TokenProgram = new TokenProgram();
