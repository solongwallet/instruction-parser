import { IParserPlugin, Message } from 'src/iparserPlugin';
import { TransactionInstruction,
        SystemInstruction,} from '@solana/web3.js';

export class SystemProgram implements IParserPlugin {
  programID: string = '11111111111111111111111111111111';
  parseInstruction(instruction: TransactionInstruction): Message {
    let msg = new Message();
    let it = SystemInstruction.decodeInstructionType(instruction);
    msg.program = this.programID;
    msg.type = "instruction";
    switch (it) {
        case 'AdvanceNonceAccount':{
            msg.name = "AdvanceNonceAccount";
            let param = SystemInstruction.decodeNonceAdvance(instruction)
            msg.inputs.set("authorizedPubkey",param.authorizedPubkey.toBase58());
            msg.inputs.set("noncePubkey",param.noncePubkey.toBase58());
            break;
        }
        case 'Allocate': {
            msg.name = "Allocate"
            let param = SystemInstruction.decodeAllocate(instruction)
            msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
            msg.inputs.set("space",param.space.toString());
            break;
        }
        case 'AllocateWithSeed': {
            msg.name = "AllocateWithSeed"
            let param = SystemInstruction.decodeAllocateWithSeed(instruction)
            msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
            msg.inputs.set("basePubkey", param.basePubkey.toBase58());
            msg.inputs.set("seed", param.seed);
            msg.inputs.set("space",param.space.toString());
            msg.inputs.set("programId",param.programId.toString());
            break;
        }
        case 'Assign': {
            msg.name = "Assign"
            let param = SystemInstruction.decodeAssign(instruction)
            msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
            msg.inputs.set("programId",param.programId.toBase58());
            break;
        }
        case 'AssignWithSeed': {
            msg.name = "AssignWithSeed"
            let param = SystemInstruction.decodeAssignWithSeed(instruction)
            msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
            msg.inputs.set("basePubkey", param.basePubkey.toBase58());
            msg.inputs.set("seed", param.seed);
            msg.inputs.set("programId",param.programId.toBase58());
            break;
        }
        case 'AuthorizeNonceAccount': {
            msg.name = "AuthorizeNonceAccount"
            let param = SystemInstruction.decodeNonceAuthorize(instruction)
            msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
            msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
            msg.inputs.set("newAuthorizedPubkey",param.newAuthorizedPubkey.toBase58());
            break;
        }
        case 'Create': {
            msg.name = "Create"
            let param = SystemInstruction.decodeCreateAccount(instruction)
            msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
            msg.inputs.set("newAccountPubkey", param.newAccountPubkey.toBase58());
            msg.inputs.set("lamports",param.lamports.toString());
            msg.inputs.set("space",param.space.toString());
            msg.inputs.set("programId",param.programId.toBase58());
            break;
        }
        case 'CreateWithSeed': {
            msg.name = "CreateWithSeed"
            let param = SystemInstruction.decodeCreateWithSeed(instruction)
            msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
            msg.inputs.set("newAccountPubkey", param.newAccountPubkey.toBase58());
            msg.inputs.set("basePubkey", param.basePubkey.toBase58());
            msg.inputs.set("seed", param.seed);
            msg.inputs.set("lamports",param.lamports.toString());
            msg.inputs.set("space",param.space.toString());
            msg.inputs.set("programId",param.programId.toBase58());
            break;
        }
        case 'InitializeNonceAccount': {
            msg.name = "InitializeNonceAccount"
            let param = SystemInstruction.decodeNonceInitialize(instruction)
            msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
            msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
            break;
        }
        case 'Transfer': {
            msg.name = "Transfer"
            let param = SystemInstruction.decodeTransfer(instruction)
            msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
            msg.inputs.set("toPubkey", param.toPubkey.toBase58());
            msg.inputs.set("lamports", param.lamports.toString());
            break;
        }
        case 'TransferWithSeed': {
            msg.name = "TransferWithSeed"
            let param = SystemInstruction.decodeTransferWithSeed(instruction)
            msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
            msg.inputs.set("basePubkey", param.basePubkey.toBase58());
            msg.inputs.set("toPubkey", param.toPubkey.toBase58());
            msg.inputs.set("lamports", param.lamports.toString());
            msg.inputs.set("seed", param.seed);
            msg.inputs.set("programId", param.programId.toBase58());
            break;
        }
        case 'WithdrawNonceAccount': {
            msg.name = "WithdrawNonceAccount"
            let param = SystemInstruction.decodeNonceWithdraw(instruction)
            msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
            msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
            msg.inputs.set("toPubkey", param.toPubkey.toBase58());
            msg.inputs.set("lamports", param.lamports.toString());
            break;
        }
        default :{
            msg.name = "UNKNOWN"
            break;
        }
    }
    return msg;
  }
}

export const plugin: SystemProgram = new SystemProgram();
