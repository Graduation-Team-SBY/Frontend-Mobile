export const age = (dateOfBirth) => {
  const year = Number(new Date(dateOfBirth).getFullYear())
  const thisYear = Number(new Date().getFullYear())

  return thisYear - year
}

