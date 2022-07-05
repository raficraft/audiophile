import { MockProduct } from "../../redux/slice/caddySlice";
export function controlCaddy(currentCaddy: any): {
  error: boolean;
  message: string;
} {
  console.log("when push button and error has been detected", currentCaddy);

  const totalByArticle = [];

  for (const key in currentCaddy.caddy) {
    if (Object.prototype.hasOwnProperty.call(currentCaddy.caddy, key)) {
      const element = currentCaddy.caddy[key];
      totalByArticle.push(Number(element.price) * Number(element.qty));
    }
  }

  const totalCaddy = totalByArticle.reduce((prev, curr) => prev + curr, 0);

  if (totalCaddy > 50000) {
    return {
      error: true,
      message:
        "Votre panier exède la limite autorisé de 50 000 dollars de commande",
    };
  } else {
    return {
      error: false,
      message: "",
    };
  }
}
