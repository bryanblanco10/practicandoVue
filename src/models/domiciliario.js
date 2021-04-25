class Domiciliario{
	constructor(names,surnames,gender,birth_date,phone,cell_phone,andress,neighborhood,type_identification,identification,photo,email,password, password_confirmation){
		this.names = names;
		this.surnames = surnames;
		this.gender = gender;
		this.birth_date = birth_date;
		this.phone = phone;
		this.cell_phone = cell_phone;
		this.andress = andress;
		this.neighborhood = neighborhood;
		this.type_identification = type_identification;
		this.identification = identification;
		this.photo = photo;
		this.email = email;
		this.password = password;
		this.password_confirmation = password_confirmation;
	}
}

export default Domiciliario;