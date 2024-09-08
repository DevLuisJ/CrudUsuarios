<template>
    <div class="container">
        <a name="btn_crear" id="btn_crear" class="btn btn-info text-white" href="/crear-usuario" role="button">Agregar Usuario</a>
        <br> <br>
        <div class="card">
            <div class="card-header">
                Usuarios
            </div>
            <div class="card-body">
                <table class="table table-striped table-responsive ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                           
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{ usuario.id}}</td>
                            <td>{{ usuario.nombre}}</td>
                            <td>{{ usuario.correo}}</td>
                            <td>

                                <div class="btn-group" role="group" aria-label="">

                                <router-link :to="{name:'EditarUsuario', params:{id:usuario.id}}" class="btn btn-primary">Editar</router-link>
                                    
                                    <button v-on:click="borrarUsuario(usuario.id)" type="button" class="btn btn-danger">Borrar</button>                                    
                                </div>
                                
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
        </div>      
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuarios: []
        };
    },
    created() {
        this.consultarUsuarios();
    },
    methods: {
    consultarUsuarios() {
        fetch('http://localhost:3000/usuarios')
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.usuarios = [];
                if (typeof datosRespuesta[0].success === 'undefined') {
                    this.usuarios = datosRespuesta;
                }
            })
            .catch(console.log);
    },
    borrarUsuario(id) {
        fetch('http://localhost:3000/usuarios/' + id, {
            method: 'DELETE'
        })
            .then(respuesta => {
                if (respuesta.ok) {
                    return respuesta.text(); 
                } else {
                    throw new Error('Error al borrar el usuario');
                }
            })
            .then((datosRespuesta) => {
                console.log(datosRespuesta); 
                window.location.href = 'listar-usuario';
            })
            .catch(error => console.log(error));
    }
}

}
</script>
