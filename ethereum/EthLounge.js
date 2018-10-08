import EthLounge from './build/EthLounge'
import web3 from './web3';

const instance = new web3.eth.Contract(
    JSON.parse(EthLounge.interface),
    '0x05dF1f9e06C2818b0f9DD3384d61EbbD4b1Cab09');

//Last v: 0x38c06BE80F47e7d85A6306CF4cc1E3f6fde3B80a

export default instance;
