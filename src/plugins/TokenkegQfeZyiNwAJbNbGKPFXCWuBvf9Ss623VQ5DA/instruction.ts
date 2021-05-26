
import * as BufferLayout from 'buffer-layout'
import * as Layout from "./layout";


export const TOKEN_INSTRUCTION_LAYOUTS = Object.freeze({
    InitMint: {
      index: 0,
      layout: BufferLayout.struct([
        BufferLayout.u8('instruction'),
        BufferLayout.u8('decimals'),
        Layout.publicKey('mintAuthority'),
        BufferLayout.u8('option'),
        Layout.publicKey('freezeAuthority')
      ]),
    },
    InitAccount: {
        index: 1,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction')
        ]),
    },
    Transfer: {
        index: 3,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
        ]),
    },
    Approve: {
        index: 4,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
        ]),
    },
    Revoke: {
        index: 5,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
        ]),
    },
    SetAuthority: {
        index: 6,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            BufferLayout.u8('authorityType'),
            BufferLayout.u8('option'),
            Layout.publicKey('newAuthority'),
        ]),
    },
    MintTo: {
        index: 7,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
        ]),
    },
    Burn: {
        index: 8,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
        ]),
    },
    CloseAccount: {
        index: 9,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction')
        ]),
    },
    FreezeAccount: {
        index: 10,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction')
        ]),
    },
    ThawAccount: {
        index: 11,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction')
        ]),
    },
    TransferChecked: {
        index: 12,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
            BufferLayout.u8('decimals')
        ]),
    },
    ApproveChecked: {
        index: 13,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
            BufferLayout.u8('decimals'),
        ]),
    },
    MintToChecked: {
        index: 14,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
            BufferLayout.u8('decimals')
        ]),
    },
    BurnChecked: {
        index: 15,
        layout: BufferLayout.struct([
            BufferLayout.u8('instruction'),
            Layout.uint64('amount'),
            BufferLayout.u8('decimals')
        ]),
    }
    
});