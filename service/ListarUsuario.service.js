import { Usuario } from '../repository/Conexao.js';

export default async function listar() {
    try {
      const usuarios = await Usuario.findAll({
        order: [['data_criacao', 'DESC']]
      });

      return usuarios;
    } catch (error) {
      throw error;
    }
  }

