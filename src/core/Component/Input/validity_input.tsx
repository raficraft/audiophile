export const validity_input = (input: any) => {
  const type = input.getAttribute("type");

  switch (type) {
    case "radio":
      return "";

    default:
      const value = input.value;
      const pattern = input.getAttribute("pattern");
      const regex = new RegExp(pattern);

      if (input.value.length === 0) {
        return "require field";
      }

      if (!regex.test(value)) {
        return "wrong format";
      }

      if (input.value.length < 3) {
        return "at least 3 characters";
      }

      break;
  }

  return "";
};
