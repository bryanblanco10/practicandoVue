// Validamos que el nombre o apellidos contenta letras, espacios y acentos
export function ValidationNamesSurmanes(value){
	return(/^[a-zA-ZÀ-ÿ\s]/.test(value))? true:false
}