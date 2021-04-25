// Validamos si la contraseña tiene un numero
export function hasNumber(value){
	return(/\d/.test(value)) ? true:false
}

// Validamos si tiene una letra minuscula
export function hasLowercaseLetter(value){
	return(/[a-z]/.test(value))? true:false
}

// Validamos si tiene una letra mayuscula
export function hasCapitalcaseLetter(value){
	return(/[A-Z]/.test(value))? true:false
}

// Validamos si tiene una caracter especial
export function hasSpecialCharacter(value){
	return(/[\^\$.[\]{}()!@#%&\/\\,<>':;|_~`]/.test(value))? true:false
}