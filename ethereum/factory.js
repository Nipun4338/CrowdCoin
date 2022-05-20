import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9A9767F85a0947396FBADFC6Ab6f0d95826a6152"
);

export default instance;
