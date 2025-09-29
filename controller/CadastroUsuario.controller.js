import cadastrar from '../service/CadastroUsuario.service.js';

export default async function cadastroUsuarioController(req, res) {
    try {
      const { nome, email } = req.body;

      // Validar campos obrigatórios
      if (!nome || !email) {
        return res.status(400).json({
          erro: 'Nome e email são obrigatórios'
        });
      }

      const usuario = await cadastrar({ nome, email });

      return res.status(201).json({
        mensagem: 'Usuário cadastrado com sucesso',
        usuario
      });
    } catch (error) {
      if (error.message === 'Email já cadastrado' || error.message === 'Email inválido') {
        return res.status(400).json({
          erro: error.message
        });
      }

      return res.status(500).json({
        erro: 'Erro ao cadastrar usuário',
        detalhes: error.message
      });
    }
  }

