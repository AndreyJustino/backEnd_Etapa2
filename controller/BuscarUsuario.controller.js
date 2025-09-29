import buscarPorId from '../service/BuscarUsuario.service.js';

export default async function buscarUsuarioController(req, res) {
    try {
      const { id } = req.params;

      const usuario = await buscarPorId(id);

      return res.status(200).json({
        usuario
      });
    } catch (error) {
      if (error.message === 'Usuário não encontrado') {
        return res.status(404).json({
          erro: error.message
        });
      }

      return res.status(500).json({
        erro: 'Erro ao buscar usuário',
        detalhes: error.message
      });
    }
  }
