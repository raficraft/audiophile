export const validity_input = (input: any) => {
  const type = input.getAttribute("type");

  switch (type) {
    case "radio":
      console.log("radio");
      console.log(input.getAttribute("name"));

      const groupName = input.getAttribute("name");

      console.log(document.querySelectorAll(`[name="${groupName}"]`));

      break;

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

  // const inputType = input.getAttribute("type");

  // const input = input.current;
  // const value = input.value ? input.value : "";
  // const pattern = input.getAttribute("pattern");
  // const regex = new RegExp(pattern);

  // if (value.length < 3) {
  //   const error: string = "at least 3 characters";
  //   return error;
  // }

  // if (!regex.test(value)) {
  //   const error: string = "wrong format";
  //   return error;
  // }

  return "";
};
