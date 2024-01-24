import AppleImg from "../images/apple.png";
import AmazonImg from "../images/amazon.png";
import FacebookImg from "../images/facebook.png";
import GoogleImg from "../images/google.png";
import MicrosoftImg from "../images/microsoft.png";
import TeslaImg from "../images/tesla.png";
import AttentionImg from "../images/attention.png";

export const tickersInfo = (tickersName: string) => {
  switch (tickersName) {
    case "AAPL":
      return {
        description:
          "Apple is an American technology company based in Cupertino, California, that designs and develops consumer electronics, software, and online services.",
        imgUrl: AppleImg,
      };
    case "AMZN":
      return {
        description:
          "Amazon is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.",
        imgUrl: AmazonImg,
      };
    case "FB":
      return {
        description:
          "Facebook is a social media and social networking service owned by American technology conglomerate Meta Platforms.",
        imgUrl: FacebookImg,
      };
    case "GOOGL":
      return {
        description:
          "Google is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
        imgUrl: GoogleImg,
      };
    case "MSFT":
      return {
        description:
          "Microsoft is an American publicly traded multinational corporation, one of the world's largest developers of proprietary software for various kinds of computing equipment - personal computers, game consoles, PDAs, cell phones, and more.",
        imgUrl: MicrosoftImg,
      };
    case "TSLA":
      return {
        description:
          "Tesla is an American multinational automotive and clean energy company headquartered in Austin, Texas, which designs and manufactures electric vehicles (cars and trucks), stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
        imgUrl: TeslaImg,
      };
    default:
      return {
        description: "Sorry, we don't have any information about this company!",
        imgUrl: AttentionImg,
      };
  }
};
