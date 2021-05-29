declare type TodoObject = {
    [index: string]: any;
};
/**
 * Layout for a public key
 */
export declare const publicKey: (property?: string) => TodoObject;
/**
 * Layout for a 64bit unsigned value
 */
export declare const uint64: (property?: string) => TodoObject;
/**
 * Layout for a Rust String type
 */
/**
 * Layout for an Authorized object
 */
export declare const authorized: (property?: string) => any;
/**
 * Layout for a Lockup object
 */
export declare const lockup: (property?: string) => any;
export {};
