import { MockProduct } from "../../redux/slice/caddySlice";
export function controlCaddy(
  currentCaddy: any,
  addPrice: number = 0
): {
  error: boolean;
  message: string;
} {
  console.log("when push button and error has been detected", currentCaddy);

  const paiementMax = 50000;
  const totalByArticle = [];

  for (const key in currentCaddy.caddy) {
    if (Object.prototype.hasOwnProperty.call(currentCaddy.caddy, key)) {
      const element = currentCaddy.caddy[key];
      totalByArticle.push(Number(element.price) * Number(element.qty));
    }
  }

  const totalCaddy =
    totalByArticle.reduce((prev, curr) => prev + curr, 0) + addPrice;

  if (totalCaddy > paiementMax) {
    return {
      error: true,
      message: `Votre panier exède la limite autorisé de 50 000 dollars de commande qui est actuellment de ${
        totalCaddy - addPrice
      } $`,
    };
  } else {
    return {
      error: false,
      message: "",
    };
  }
}
