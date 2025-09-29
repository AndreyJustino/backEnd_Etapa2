import { Usuario } from '../repository/Conexao.js';

export default async function cadastrar(dados) {
    try {
      // Validar se o email é válido
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(dados.email)) {
        throw new Error('Email inválido');
      }

      // Verificar se o email já existe
      const usuarioExistente = await Usuario.findOne({
        where: { email: dados.email }
      });

      if (usuarioExistente) {
        throw new Error('Email já cadastrado');
      }

      // Criar o usuário
      const usuario = await Usuario.create({
        nome: dados.nome,
        email: dados.email
      });

      return usuario;
    } catch (error) {
      throw error;
    }
  }
