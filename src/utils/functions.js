const numberize = val => {
  const parsedVal = parseInt(val)
  return isNaN(parsedVal) ? 0 : parsedVal
}

export const addSub = (a, b, addition = true) =>
  addition ? numberize(a) + numberize(b) : numberize(a) - numberize(b)
