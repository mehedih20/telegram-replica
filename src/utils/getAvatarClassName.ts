import { alphabetGradients } from "../constants/alphabetGradients";

export const getAvatarClassName = (str: string) => {
  const result = alphabetGradients.find((item) => item.alphabet === str[0]);

  return result?.alphaGradient;
};
