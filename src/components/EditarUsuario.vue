<template>
    <div class="container">
        <div class="card">
            <div class="card-header bg-primary text-white">
                Editar Usuario
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="form-group">
                        <label for="Nombre">Nombre</label>
                        <input type="text"
                            class="form-control" required name="nombre" v-model="usuario.nombre" id="nombre" aria-describedby="helpId" placeholder="">
                        <small id="helpId" class="form-text text-muted">Edita el nombre del usuario</small>
                        <br><br>
                    </div>
                    <div class="form-group">
                        <label for="">Correo<i class="fas fa-chevron-square-down"></i></label>
                        <input type="email"
                            class="form-control" required name="correo" v-model="usuario.correo" id="correo" aria-describedby="helpId" placeholder="">
                        <small id="helpId" class="form-text text-muted">Edita el correo del usuario</small>
                        <br>
                    </div>
                    <br>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-primary text-white">Editar</button>
                        <router-link :to="{ name: 'ListarUsuario' }" class="btn btn-secondary">Cancelar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {}
        };
    },
    created() {
        this.obtenerId();
    },
    methods: {
        obtenerId() {
            fetch(`http://localhost:3000/usuarios/${this.$route.params.id}`)
                .then(respuesta => respuesta.json())
                .then((datosRespuesta) => {
                    console.log(datosRespuesta);
                    this.usuario = datosRespuesta;
                })
                .catch(console.log);
        },
        actualizarRegistro() {
            const datosEnviar = {
                nombre: this.usuario.nombre,
                correo: this.usuario.correo
            };

            fetch(`http://localhost:3000/usuarios/${this.$route.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosEnviar)
            })
            .then(respuesta => {
                if (!respuesta.ok) {
                    return respuesta.text().then(text => {
                        throw new Error(`Network response was not ok: ${text}`);
                    });
                }
                // Para el caso de respuestas vacías (204 No Content)
                return respuesta.text().then(text => {
                    if (text) {
                        return JSON.parse(text);
                    }
                    return {}; // Retornar un objeto vacío si la respuesta está vacía
                });
            })
            .then(datosRespuesta => {
                console.log(datosRespuesta);
                this.$router.push({ name: 'ListarUsuario' }); // Redirige a la lista de usuarios
            })
            .catch(error => {
                console.error('Error: No se logró ejecutar el Fetch', error);
            });
        }
    }
}
</script>

