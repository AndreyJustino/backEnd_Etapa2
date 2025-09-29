import { Usuario } from '../repository/Conexao.js';

export default async function buscarPorId(id) {
    try {
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      return usuario;
    } catch (error) {
      throw error;
    }
  }

