<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h1>Domiciliarios</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4">
				<button 
					type="button" 
					class="btn btn-success btn-lg"
					@click="newModal"
				>
					Nuevo Domiciliario
				</button>
			</div>
		</div>
		<CreateEditComponent :editModal="editModal"/>
	</div>
</template>
<script>
	export default{
		name: 'Domiciliario',
		data(){
			return{
				editModal: false
			}
		},
		components:{
			CreateEditComponent: () => 
				import(/* webpackChunkName: "CreateEditComponent" */ "./createEdit/CreateEditComponent.vue")
		},
		methods:{
			newModal(){
				this.editModal = false
				this.$bvModal.show('create-edit')
			},
			// editModal(){}
		}
	}
</script>