<template>
    <div class="container">
       <div class="card">
        <div class="card-header bg-info text-white">
            Agregar Nuevo Usuario
        </div>
        <div class="card-body bg-light text-dark">
            <form v-on:submit.prevent="agregarRegistro">
                <div class="form-group">
                  <label for="Nombre">Nombre</label>
                  <input type="text"
                    class="form-control" required name="nombre" v-model="usuario.nombre" id="nombre" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el nombre del usuario</small>
                  <br><br>
                </div>
                <div class="form-group">
                  <label for="">Correo<i class="fas fa-chevron-square-down    "></i></label>
                  <input type="email"
                    class="form-control" required name="correo" v-model="usuario.correo" id="correo" aria-describedby="helpId" placeholder="">
                  <small id="helpId" class="form-text text-muted">Escribe el correo del usuario</small>
                  <br><br>
                </div>
                <div class="btn-group" role="group" aria-label="">
                    <button type="submit" class="btn btn-info text-white">Agregar</button>
                    <router-link :to="{name:'ListarUsuario'}" class="btn btn-secondary">Cancelar</router-link>
                </div>
            </form>
        </div>
        
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            usuario:{ }
        }
    },
    methods: {
    agregarRegistro() {
        console.log(this.usuario);

        var datosEnviar = { nombre: this.usuario.nombre, correo: this.usuario.correo };

        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(datosEnviar)
        })
        .then(respuesta => {
            if (!respuesta.ok) { // Verificar si la respuesta es exitosa
                throw new Error('Network response was not ok');
            }
            return respuesta.json();
        })
        .then(datosRespuesta => {
            console.log(datosRespuesta);          
            window.location.href = 'listar-usuario';
        })
        .catch(error => {
            console.error('Error: No se logro ejecutar el Fetch', error);
        });
    }
}

}
</script>
<style>
    .container{
  width: 50%;
  padding: 2px;
  margin: auto;  
  border-radius: 4px;
  font-family: 'verdana'; 
  box-shadow: 2px 10px 30px #323030; 
}
</style>