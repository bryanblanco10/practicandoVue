<template src="./CreateEditComponent.html"></template>
<script>
import Domiciliario from '@/models/domiciliario'
import { required,email,alpha,minLength,maxLength,sameAs } from 'vuelidate/lib/validators'
import { hasNumber,hasLowercaseLetter,hasCapitalcaseLetter,hasSpecialCharacter} from '@/validators/password'
import { ValidationNamesSurmanes } from '@/validators/namesSurnames'
// import axios from 'axios'
	export default{
		name: 'CreateEditComponent',
		props: ['editModal'],
		data(){
      return{
          photo: '',
          domiciliario: new Domiciliario('','','','','','','','','','',null,'','','',''),
          submitted: false,
          datos: [],
          caracteristicas1:[{
            talla: ''
          }],
          caracteristicas2:[{
            color: ''
          }]
      }
    },
    computed:{
      // identificationError(){
      //   const errors = []
      //   if(!this.$v.domiciliario.identification.$dirty) return errors
      //     !this.$v.domiciliario.identification.required && errors.push("Debe llenar este campo.")
      //     return errors
      // },
      // namesError(){
      //   const errors = []
      //   if(!this.$v.domiciliario.names.$dirty) return errors
      //     !this.$v.domiciliario.names.required && errors.push("Debe llenar este campo.")
      //     !this.$v.domiciliario.names.ValidationNamesSurmanes && errors.push("Los nombres no deben tener números ni caracteres especiales.")
      //     return errors
      // },
      // surnamesError(){
      //   const errors = []
      //   if(!this.$v.domiciliario.surnames.$dirty) return errors
      //     !this.$v.domiciliario.surnames.required && errors.push("Debe llenar este campo.")
      //     !this.$v.domiciliario.surnames.ValidationNamesSurmanes && errors.push("Los apellidos no deben tener números ni caracteres especiales.")
      //     return errors
      // }
    },
    validations:{
    	domiciliario:{
    		type_identification:{
    			required
    		},
    		identification:{
    			required
    		},
    		names:{
    			required,
          alpha,
          ValidationNamesSurmanes
    		},
    		surnames:{
    			required,
          alpha,
          ValidationNamesSurmanes
    		},
    		phone:{
          required,
          minLength: minLength(7),
          maxLength: maxLength(10)
    		},
    		cell_phone:{
    			required,
          minLength: minLength(10),
          maxLength: maxLength(15)
    		},
    		email:{
    			required,
          email
    		},
    		password:{
    			required,
          minLength: minLength(8),
          hasNumber,
          hasLowercaseLetter,
          hasCapitalcaseLetter,
          hasSpecialCharacter
    		},
        repeatPassword:{
          sameAsPassword: sameAs('password')
        },
    		neighborhood:{
    			required
    		},
    		andress:{
    			required
    		},
    		gender:{
    			required
    		}
    	}
    },
    methods: {
      NewTalla(){
        this.caracteristicas1.push({
          talla: ''
        })
      },
      DeleteTalla(counter){
        this.caracteristicas1.splice(counter,1)
      },
      fileChange(e){
          //Recoger el fichero
          // this.photo = this.$refs.fileInput.files[0];
          // console.log(this.photo);
          var files = e.target.files || e.dataTransfer.files;
          this.photo = files;
          // console.log(this.photo);
            if (!files.length)
              return;
            this.createImage(files[0]);
      },
      createImage(file) {
        // var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      RemovePhoto()
      {
        this.photo='';
      },
      identificationErrors(){
      	this.updateStyles(this.$v.domiciliario.identification, 'identification')
      },
      namesErrors(){
      	this.updateStyles(this.$v.domiciliario.names, 'names')
      },
      surnamesErrors(){
        this.updateStyles(this.$v.domiciliario.surnames, 'surnames')
      },
      cell_phoneErrors(){
        this.updateStyles(this.$v.domiciliario.cell_phone, 'cell_phone')
      },
      phoneErrors(){
        this.updateStyles(this.$v.domiciliario.phone, 'phone')
      },
      emailErrors(){
        this.updateStyles(this.$v.domiciliario.email, 'email')
      },
      passwordErrors(){
        this.updateStyles(this.$v.domiciliario.password, 'password')
      },
      repeatPasswordErrors(){
        this.updateStylesRepeatPassword(this.$v.domiciliario.password_confirmation,this.$v.domiciliario.password, 'repeat_password')
      },
      neighborhoodErrors(){
        this.updateStyles(this.$v.domiciliario.neighborhood, 'neighborhood')
      },
      andressErrors(){
        this.updateStyles(this.$v.domiciliario.andress, 'andress')
      },
      updateStyles(validacion,campo1){
      	if(validacion.$dirty){
      		document.getElementById(`grupo_${campo1}`).classList.remove('correcto');
      		document.getElementById(`grupo_${campo1}`).classList.add('incorrecto');
          document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.remove('fa-check-circle');
          document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.add('fa-times-circle');
      	}
      	if(!validacion.$invalid){
      		document.getElementById(`grupo_${campo1}`).classList.remove('incorrecto');
      		document.getElementById(`grupo_${campo1}`).classList.add('correcto');
      		document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.remove('fa-times-circle');
      		document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.add('fa-check-circle');
      	}
      },
      updateStylesRepeatPassword(validacion1,validacion2,campo1){
        if(validacion1.$dirty){
          document.getElementById(`grupo_${campo1}`).classList.remove('correcto');
          document.getElementById(`grupo_${campo1}`).classList.add('incorrecto');
          document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.remove('fa-check-circle');
          document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.add('fa-times-circle');
        }
        // if(validacion2.$model === validacion1.$model){
        //   document.getElementById(`grupo_${campo1}`).classList.remove('incorrecto');
        //   document.getElementById(`grupo_${campo1}`).classList.add('correcto');
        //   document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.remove('fa-times-circle');
        //   document.querySelector(`#grupo_${campo1} .formulario__validacion--estado`).classList.add('fa-check-circle');
        // }
      },
      saveDomiciliario(){
      	this.submitted = true
      	// Metodo de libreria vuelidate
      	this.$v.$touch();
        if(this.$v.$invalid){
          this.submitted = false
        }
        else{
          this.datos = this.domiciliario
          console.log(this.datos)
          // axios.post('http://127.0.0.1:8000/api/' + 'employees', this.domiciliario)
        }
      }
    }
	}
</script>
<style>
	.profile__photo__edit
  {
    border: 1px solid #808080;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }

  .photo__preview img
  {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .icono__camera{
    position: relative;
    top: 26px;
    color: #808080;
    font-size: 35px;
  }

  .btn__delete--photo
  {
    background-color: var(--second-color);
    color: var(--white-color);
    font-size: 13px;
    padding: 3px 8px 3px 8px;
    border-radius: 50%;
    font-family: var(--fuente-source-sans-pro);
    letter-spacing: 0.5px;
    position: relative;
    top: -20px;
  }
</style>