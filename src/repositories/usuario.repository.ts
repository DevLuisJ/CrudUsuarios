import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UsuariosDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.usuarios') dataSource: UsuariosDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
