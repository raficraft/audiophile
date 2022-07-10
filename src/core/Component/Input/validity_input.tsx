export const validity_input = (input: any) => {
  const type = input.getAttribute("type");

  switch (type) {
    case "radio":
      return "";

    default:
      console.log("yolo");

      const value = input.value;
      const pattern = input.getAttribute("pattern");
      const regex = new RegExp(pattern);

      if (input.value.length === 0) {
        return "require field";
      }

      if (!regex.test(value)) {
        const error: string = "wrong format";
        return error;
      }

      if (input.value.length < 3) {
        const error: string = "at least 3 characters";
        return error;
      }

      break;
  }

  return "";
};
