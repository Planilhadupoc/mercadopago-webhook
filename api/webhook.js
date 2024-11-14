// api/webhook.js - Função para Vercel

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    // Recebe os dados da notificação do Mercado Pago
    const paymentData = req.body;
    console.log('Notificação de pagamento recebida:', paymentData);

    // Aqui você pode verificar os dados e processar o pagamento
    if (paymentData.status === 'approved') {
      // Lógica para liberar conteúdo ou enviar mensagem no Telegram
      console.log('Pagamento aprovado!', paymentData);
      // Você pode chamar a API do Telegram ou outra lógica aqui.
    }

    // Resposta para o Mercado Pago
    res.status(200).send('Pagamento processado com sucesso!');
  } else {
    res.status(405).send('Método não permitido');
  }
};
