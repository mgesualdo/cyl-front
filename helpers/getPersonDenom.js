const getPersonDenom = (person) => {
  const { firstname, lastname, denomination, email, type } = person
  const isCompany = type === "Empresa"
  let denom = ""

  if (isCompany) {
    denom = denomination || email || "Sin denominación"
  } else {
    if (!firstname && !lastname && !email) {
      denom = "Persona sin identificar"
    }

    if (firstname || lastname) {
      denom = `${firstname ? " " + firstname : ""}${
        lastname ? " " + lastname : ""
      }`
    }
    if (email && !firstname && !lastname) {
      denom = email
    }
  }

  return denom
}

export default getPersonDenom
