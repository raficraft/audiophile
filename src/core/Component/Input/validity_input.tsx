export const validity_input = (input: any) => {
  const currentItem = input.current;
  const pattern = currentItem.getAttribute("pattern");
  const value = currentItem.value;
  const regex = new RegExp(pattern);

  if (value.length < 3) {
    const error: string = "at least 3 characters";
    return error;
  }

  if (!regex.test(value)) {
    const error: string = "wrong format";
    return error;
  }

  return "";
};
