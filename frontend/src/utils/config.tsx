import { ethers } from "ethers";

// Alchemy keys
// Mainnet: gXLumW8PNRWtrmcTIcMXSnMnQY_UnQpY
// Optimism: NAIFm3fALSbcksgIFr3P4Ku6_SqEeYQJ
// Polygon: DWAus_nU93LuWr4fefFJR4y1mjD588sf
// Arbitrum: J2mUvQdzX3p7EwBSoxAbwOMwqQWr4xcT

const providers: {
    [chainId: number]: ethers.providers.AlchemyProvider
} = {
    1: new ethers.providers.AlchemyProvider(1, "gXLumW8PNRWtrmcTIcMXSnMnQY_UnQpY"),
    10: new ethers.providers.AlchemyProvider(10, "NAIFm3fALSbcksgIFr3P4Ku6_SqEeYQJ"),
    137: new ethers.providers.AlchemyProvider(137, "DWAus_nU93LuWr4fefFJR4y1mjD588sf"),
    42161: new ethers.providers.AlchemyProvider(42161, "J2mUvQdzX3p7EwBSoxAbwOMwqQWr4xcT"),
}

const MULTICALL = "0xcA11bde05977b3631167028862bE2a173976CA11"

const MULTICALL_ABI = [{ "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes[]", "name": "returnData", "type": "bytes[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bool", "name": "allowFailure", "type": "bool" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call3[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate3", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bool", "name": "allowFailure", "type": "bool" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call3Value[]", "name": "calls", "type": "tuple[]" }], "name": "aggregate3Value", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "blockAndAggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }, { "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getBasefee", "outputs": [{ "internalType": "uint256", "name": "basefee", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getBlockHash", "outputs": [{ "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBlockNumber", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "chainid", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockCoinbase", "outputs": [{ "internalType": "address", "name": "coinbase", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockDifficulty", "outputs": [{ "internalType": "uint256", "name": "difficulty", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockGasLimit", "outputs": [{ "internalType": "uint256", "name": "gaslimit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentBlockTimestamp", "outputs": [{ "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getEthBalance", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getLastBlockHash", "outputs": [{ "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "requireSuccess", "type": "bool" }, { "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "tryAggregate", "outputs": [{ "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "requireSuccess", "type": "bool" }, { "components": [{ "internalType": "address", "name": "target", "type": "address" }, { "internalType": "bytes", "name": "callData", "type": "bytes" }], "internalType": "struct Multicall3.Call[]", "name": "calls", "type": "tuple[]" }], "name": "tryBlockAndAggregate", "outputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }, { "internalType": "bytes32", "name": "blockHash", "type": "bytes32" }, { "components": [{ "internalType": "bool", "name": "success", "type": "bool" }, { "internalType": "bytes", "name": "returnData", "type": "bytes" }], "internalType": "struct Multicall3.Result[]", "name": "returnData", "type": "tuple[]" }], "stateMutability": "payable", "type": "function" }]

const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint)",
]

export { providers, MULTICALL, MULTICALL_ABI, ERC20_ABI }