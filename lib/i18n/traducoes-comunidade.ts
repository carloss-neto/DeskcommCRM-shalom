/**
 * Traduções para a variante Português (Comunidade) — pt-BR-comunidade.
 *
 * Esta variante reframe terminologia de vendas para organizações religiosas
 * e sem fins lucrativos (especialmente Comunidade Católica Shalom):
 *
 * - cliente(s) → benfeitor(es) (contexto doação), membro(s) (contexto comunidade), pessoa(s) (genérico)
 * - lead(s) → interessado(s)
 * - negócio(s) → relacionamento(s)
 * - venda(s) → doação/adesão/relacionamento
 * - produto(s) → curso(s)/evento(s)/iniciativa(s)
 * - proposta(s) → convite(s)
 * - pipeline/funil de vendas → jornada/funil de relacionamento
 * - prospecção → captação
 * - receita/faturamento → doações/arrecadação
 * - conversão → adesão
 *
 * Só traduza chaves que contenham terminologia de vendas. Todo o resto
 * usa fallback para pt-BR (a própria chave).
 */

type TraducoesComunidade = Record<string, { "pt-BR-comunidade": string }>;

export const TEXTOS_COMUNIDADE: TraducoesComunidade = {
  // ─── Atendimento e relacionamento ────────────────────────────────────────
  "Para atendimento de clientes em volume, prefira uma chave de API da própria organização. Se configurada, ela pode servir como reserva quando a assinatura atingir limites ou falhar.": {
    "pt-BR-comunidade":
      "Para atendimento de membros em volume, prefira uma chave de API da própria organização. Se configurada, ela pode servir como reserva quando a assinatura atingir limites ou falhar.",
  },
  "Atendimento e vendas pelo WhatsApp, com agentes de inteligência artificial.": {
    "pt-BR-comunidade": "Atendimento e relacionamento pelo WhatsApp, com agentes de inteligência artificial.",
  },
  "Atendimento e vendas pelo WhatsApp, também no celular.": {
    "pt-BR-comunidade": "Atendimento e relacionamento pelo WhatsApp, também no celular.",
  },
  "reúne em um só lugar as conversas com os clientes, o funil de vendas, a agenda de atendimentos e agentes de inteligência artificial que respondem, qualificam o interesse e passam a conversa para uma pessoa quando é preciso.": {
    "pt-BR-comunidade":
      "reúne em um só lugar as conversas com as pessoas, a jornada de relacionamento, a agenda de atendimentos e agentes de inteligência artificial que respondem, qualificam o interesse e passam a conversa para uma pessoa quando é preciso.",
  },
  "mostra a ocupação da agenda e cria, altera e cancela os agendamentos pedidos pela própria pessoa. Quando conecta o Google Ads, devolve ao anúncio as vendas que ele trouxe. O uso dos dados do Google está descrito na": {
    "pt-BR-comunidade":
      "mostra a ocupação da agenda e cria, altera e cancela os agendamentos pedidos pela própria pessoa. Quando conecta o Google Ads, devolve ao anúncio as adesões que ele trouxe. O uso dos dados do Google está descrito na",
  },
  "enviar ao Google Ads as vendas que um anúncio trouxe, para que ele aprenda com elas, criar e listar ações de conversão e ler as métricas das campanhas da própria conta de anúncios.": {
    "pt-BR-comunidade":
      "enviar ao Google Ads as adesões que um anúncio trouxe, para que ele aprenda com elas, criar e listar ações de adesão e ler as métricas das campanhas da própria conta de anúncios.",
  },
  "Autorizar IA para leads deste formulário": {
    "pt-BR-comunidade": "Autorizar IA para interessados deste formulário",
  },
  "Lê a resposta que o assistente vai enviar e confere, nas evidências consultadas neste turno, se o que ele afirma sobre o negócio está escrito ali — ou se o material diz o contrário.": {
    "pt-BR-comunidade":
      "Lê a resposta que o assistente vai enviar e confere, nas evidências consultadas neste turno, se o que ele afirma sobre o relacionamento está escrito ali — ou se o material diz o contrário.",
  },
  "O agente diz ao cliente um horário, um preço ou um endereço que não está em nenhum material, e a pessoa vai até a loja ou à recepção por algo que não é verdade.": {
    "pt-BR-comunidade":
      "O agente diz à pessoa um horário, um valor ou um endereço que não está em nenhum material, e a pessoa vai até o local por algo que não é verdade.",
  },
  "O Jev foi perguntado se o que a resposta afirma sobre o negócio está escrito nas evidências consultadas neste turno.": {
    "pt-BR-comunidade":
      "O Jev foi perguntado se o que a resposta afirma sobre o relacionamento está escrito nas evidências consultadas neste turno.",
  },
  "Confere se o que o assistente afirma sobre o negócio (horário, preço, endereço) está no material que ele consultou para responder.": {
    "pt-BR-comunidade":
      "Confere se o que o assistente afirma sobre o relacionamento (horário, valor, endereço) está no material que ele consultou para responder.",
  },
  "Além da mensagem atual; inclui cliente e atendente.": {
    "pt-BR-comunidade": "Além da mensagem atual; inclui pessoa e atendente.",
  },
  "Empresas e pessoas (venda para empresas)": {
    "pt-BR-comunidade": "Empresas e pessoas (relacionamento com empresas)",
  },

  // ─── Métricas e rastreamento ─────────────────────────────────────────────
  "As contagens usam os registros ainda retidos no CRM. Cliques incluem acessos repetidos; contatos e negócios são distintos por link. Não representam pessoas únicas nem o total histórico após o expurgo.": {
    "pt-BR-comunidade":
      "As contagens usam os registros ainda retidos no CRM. Cliques incluem acessos repetidos; contatos e relacionamentos são distintos por link. Não representam pessoas únicas nem o total histórico após o expurgo.",
  },
  "Ative a codificação automática no Google Ads. O script preserva gclid, gbraid ou wbraid recebidos no site. UTMs sozinhas identificam a origem no CRM, mas não comprovam uma conversão no Google.": {
    "pt-BR-comunidade":
      "Ative a codificação automática no Google Ads. O script preserva gclid, gbraid ou wbraid recebidos no site. UTMs sozinhas identificam a origem no CRM, mas não comprovam uma adesão no Google.",
  },
  "Nenhuma conversão aceita ainda": {
    "pt-BR-comunidade": "Nenhuma adesão aceita ainda",
  },
  "Pode ser falta de negócios vindos de anúncio do Google, ou a captura do clique ainda não configurada no site.": {
    "pt-BR-comunidade":
      "Pode ser falta de relacionamentos vindos de anúncio do Google, ou a captura do clique ainda não configurada no site.",
  },
  "A venda está configurada. Etapas ligadas dão mais sinal ao Google antes da venda.": {
    "pt-BR-comunidade": "A adesão está configurada. Etapas ligadas dão mais sinal ao Google antes da adesão.",
  },
  "A venda (negócio ganho) não tem ação de conversão: é ela que ensina o Google a buscar quem compra.": {
    "pt-BR-comunidade": "A adesão (relacionamento concluído) não tem ação de adesão: é ela que ensina o Google a buscar quem adere.",
  },
  "Dê um nome à conversão antes de criar a ação no Google.": {
    "pt-BR-comunidade": "Dê um nome à adesão antes de criar a ação no Google.",
  },
  "Cria a ação de conversão na sua conta do Google Ads": {
    "pt-BR-comunidade": "Cria a ação de adesão na sua conta do Google Ads",
  },
  "Venda (negócio ganho)": {
    "pt-BR-comunidade": "Adesão (relacionamento concluído)",
  },
  "Ação de conversão da venda (ID)": {
    "pt-BR-comunidade": "Ação de adesão (ID)",
  },
  "Recebe a compra quando o negócio é marcado como ganho. Deixe vazio se você só quer enviar etapas do funil.": {
    "pt-BR-comunidade":
      "Recebe a adesão quando o relacionamento é marcado como concluído. Deixe vazio se você só quer enviar etapas da jornada.",
  },
  "Categoria da conversão": {
    "pt-BR-comunidade": "Categoria da adesão",
  },
  "Valor do negócio": {
    "pt-BR-comunidade": "Valor da contribuição",
  },
  "Com o valor, o Google pode otimizar por receita e não só por volume. Venda sem valor vai sem valor — nunca como zero.": {
    "pt-BR-comunidade":
      "Com o valor, o Google pode otimizar por doações e não só por volume. Adesão sem valor vai sem valor — nunca como zero.",
  },
  "Enviar vendas pelo canal da conversa": {
    "pt-BR-comunidade": "Enviar adesões pelo canal da conversa",
  },
  "Sem conexão direta com a Meta, a venda de quem veio de anúncio pode ir pelo canal intermediado do WhatsApp, quando ele já liga o seu conjunto de dados da Meta ao número. Saem para o provedor do canal o valor, a moeda, o telefone do cliente e a conversa. Vem desligado: ligue só se a sua política de privacidade cobre esse uso.": {
    "pt-BR-comunidade":
      "Sem conexão direta com a Meta, a adesão de quem veio de anúncio pode ir pelo canal intermediado do WhatsApp, quando ele já liga o seu conjunto de dados da Meta ao número. Saem para o provedor do canal o valor, a moeda, o telefone da pessoa e a conversa. Vem desligado: ligue só se a sua política de privacidade cobre esse uso.",
  },
  "O telefone vai em SHA-256, nunca em claro, e ajuda o Google a ligar a conversão a quem clicou no anúncio. É dado pessoal: só envie se a sua base de privacidade cobre isso.": {
    "pt-BR-comunidade":
      "O telefone vai em SHA-256, nunca em claro, e ajuda o Google a ligar a adesão a quem clicou no anúncio. É dado pessoal: só envie se a sua base de privacidade cobre isso.",
  },
  "Enviar a venda; o valor vai quando estiver preenchido": {
    "pt-BR-comunidade": "Enviar a adesão; o valor vai quando estiver preenchido",
  },
  "Só enviar venda com valor preenchido": {
    "pt-BR-comunidade": "Só enviar adesão com valor preenchido",
  },
  "Enviar a venda sempre sem valor": {
    "pt-BR-comunidade": "Enviar a adesão sempre sem valor",
  },

  // ─── Funil/Jornada e etapas ──────────────────────────────────────────────
  "Buscar por negócio": {
    "pt-BR-comunidade": "Buscar por relacionamento",
  },
  "Nome do negócio": {
    "pt-BR-comunidade": "Nome do relacionamento",
  },
  "Etapas recomendadas ligadas. Informe ou crie a ação de conversão de cada uma e salve.": {
    "pt-BR-comunidade": "Etapas recomendadas ligadas. Informe ou crie a ação de adesão de cada uma e salve.",
  },
  "Quanto mais cedo você avisa, mais dados a campanha tem para aprender — mas só a venda ensina o Google a buscar quem compra. Cada etapa ligada envia a sua ação de conversão uma vez por negócio, quando ele entra ali.": {
    "pt-BR-comunidade":
      "Quanto mais cedo você avisa, mais dados a campanha tem para aprender — mas só a adesão ensina o Google a buscar quem adere. Cada etapa ligada envia a sua ação de adesão uma vez por relacionamento, quando ele entra ali.",
  },
  "não envia conversão": {
    "pt-BR-comunidade": "não envia adesão",
  },
  "Enviar conversão nesta etapa": {
    "pt-BR-comunidade": "Enviar adesão nesta etapa",
  },
  "Nome da conversão": {
    "pt-BR-comunidade": "Nome da adesão",
  },
  "Ação de conversão (ID)": {
    "pt-BR-comunidade": "Ação de adesão (ID)",
  },
  "É como o Google agrupa a conversão nos relatórios e nos lances.": {
    "pt-BR-comunidade": "É como o Google agrupa a adesão nos relatórios e nos lances.",
  },
  "As conversões só saem quando o negócio muda de etapa — pela equipe, pela IA ou por automação — e só para quem veio de anúncio do Google. Movimentos anteriores a ligar a regra não são enviados.": {
    "pt-BR-comunidade":
      "As adesões só saem quando o relacionamento muda de etapa — pela equipe, pela IA ou por automação — e só para quem veio de anúncio do Google. Movimentos anteriores a ligar a regra não são enviados.",
  },
  "Toda etapa ligada precisa de um nome e do ID da ação de conversão.": {
    "pt-BR-comunidade": "Toda etapa ligada precisa de um nome e do ID da ação de adesão.",
  },
  "Envio de formulário de lead": {
    "pt-BR-comunidade": "Envio de formulário de interessado",
  },
  "Sem marca nenhuma este campo nunca é exigido — é o comportamento de sempre. Marcado, ele precisa estar preenchido para o negócio entrar na etapa escolhida ou ser fechado como ganho/perdido.": {
    "pt-BR-comunidade":
      "Sem marca nenhuma este campo nunca é exigido — é o comportamento de sempre. Marcado, ele precisa estar preenchido para o relacionamento entrar na etapa escolhida ou ser fechado como concluído/não concluído.",
  },
  "Este funil exige alguns dados antes de mover o negócio. Preencha o que falta para continuar.": {
    "pt-BR-comunidade": "Esta jornada exige alguns dados antes de mover o relacionamento. Preencha o que falta para continuar.",
  },
  "Negócio encerrado que volta abre um negócio novo": {
    "pt-BR-comunidade": "Relacionamento encerrado que volta abre um relacionamento novo",
  },
  "Desligado, arrastar um negócio perdido ou ganho para uma etapa aberta reabre o mesmo negócio. Ligado, o encerrado fica como está e o quadro oferece criar uma nova tentativa com o mesmo contato.": {
    "pt-BR-comunidade":
      "Desligado, arrastar um relacionamento não concluído ou concluído para uma etapa aberta reabre o mesmo relacionamento. Ligado, o encerrado fica como está e o quadro oferece criar uma nova tentativa com o mesmo contato.",
  },
  "Abrir comanda ao ganhar um negócio neste funil": {
    "pt-BR-comunidade": "Abrir comanda ao concluir um relacionamento nesta jornada",
  },
  "Desligado, ganhar não mexe no financeiro: loja com checkout, infoproduto e imobiliária não vivem de conta a receber. Ligado, o arrasto para a etapa de ganho e o botão Ganhar abrem uma comanda com o valor e o contato do negócio.": {
    "pt-BR-comunidade":
      "Desligado, concluir não mexe no financeiro: organizações com outras formas de arrecadação não vivem de conta a receber. Ligado, o arrasto para a etapa de conclusão e o botão Concluir abrem uma comanda com o valor e o contato do relacionamento.",
  },
  "Teste abrindo o site com os parâmetros de uma campanha, navegando para outra página e clicando no WhatsApp. Confira o código na mensagem e a origem no contato. UTMs identificam a campanha no CRM; não garantem atribuição de conversão pela Meta.": {
    "pt-BR-comunidade":
      "Teste abrindo o site com os parâmetros de uma campanha, navegando para outra página e clicando no WhatsApp. Confira o código na mensagem e a origem no contato. UTMs identificam a campanha no CRM; não garantem atribuição de adesão pela Meta.",
  },
  "Ao entrar na etapa escolhida, o negócio envia uma qualificação sem valor monetário. A compra continua sendo enviada ao ganhar o negócio com valor. Cada evento é contado uma vez por negócio.": {
    "pt-BR-comunidade":
      "Ao entrar na etapa escolhida, o relacionamento envia uma qualificação sem valor monetário. A contribuição continua sendo enviada ao concluir o relacionamento com valor. Cada evento é contado uma vez por relacionamento.",
  },
  "Ação de conversão de lead qualificado": {
    "pt-BR-comunidade": "Ação de adesão de interessado qualificado",
  },
  "Informe uma ação do Google diferente da compra. Configure a categoria de lead qualificado e o uso na otimização no Google Ads. Salvar não envia qualificações antigas.": {
    "pt-BR-comunidade":
      "Informe uma ação do Google diferente da contribuição. Configure a categoria de interessado qualificado e o uso na otimização no Google Ads. Salvar não envia qualificações antigas.",
  },
  "Nenhuma pendência. Ainda pode não haver vendas ou qualificações com origem em anúncio.": {
    "pt-BR-comunidade": "Nenhuma pendência. Ainda pode não haver adesões ou qualificações com origem em anúncio.",
  },
  "Evento recebido em modo de teste. Desative o teste antes de reportar a venda real.": {
    "pt-BR-comunidade": "Evento recebido em modo de teste. Desative o teste antes de reportar a adesão real.",
  },
  "A venda fechou sem valor preenchido. A plataforma exige valor e moeda em uma compra — preencha o valor do negócio e use o botão de reprocessamento.": {
    "pt-BR-comunidade":
      "A adesão fechou sem valor preenchido. A plataforma exige valor e moeda em uma contribuição — preencha o valor do relacionamento e use o botão de reprocessamento.",
  },

  // ─── Agentes de IA ───────────────────────────────────────────────────────
  "Testar como cliente": {
    "pt-BR-comunidade": "Testar como pessoa",
  },
  "Escreva como um cliente. O teste usa um rascunho pausado e consome créditos de IA, sem enviar mensagens aos seus contatos.": {
    "pt-BR-comunidade":
      "Escreva como uma pessoa. O teste usa um rascunho pausado e consome créditos de IA, sem enviar mensagens aos seus contatos.",
  },
  "Mensagem do cliente para o teste": {
    "pt-BR-comunidade": "Mensagem da pessoa para o teste",
  },
  "Permissões: consultar contatos e atualizar negócios no funil escolhido.": {
    "pt-BR-comunidade": "Permissões: consultar contatos e atualizar relacionamentos na jornada escolhida.",
  },
  "Permissões: consultar contatos e atualizar negócios neste funil.": {
    "pt-BR-comunidade": "Permissões: consultar contatos e atualizar relacionamentos nesta jornada.",
  },
  "Quero montar um agente para descobrir o problema do cliente e qualificar interessados.": {
    "pt-BR-comunidade": "Quero montar um agente para descobrir a necessidade da pessoa e qualificar interessados.",
  },
  "Quero que o agente entenda a necessidade e convide o cliente para uma conversa com a equipe.": {
    "pt-BR-comunidade": "Quero que o agente entenda a necessidade e convide a pessoa para uma conversa com a equipe.",
  },
  "Ao publicar, o agente poderá atender mensagens recebidas neste canal. A prospecção começa apenas quando você iniciar a campanha.": {
    "pt-BR-comunidade":
      "Ao publicar, o agente poderá atender mensagens recebidas neste canal. A captação começa apenas quando você iniciar a campanha.",
  },
  "Falha ao carregar a prospecção.": {
    "pt-BR-comunidade": "Falha ao carregar a captação.",
  },
  "Escolha o modelo da proposta antes de preencher campos.": {
    "pt-BR-comunidade": "Escolha o modelo do convite antes de preencher campos.",
  },
  "Esta proposta tem seções reescritas à mão. Confirme o descarte para trocar o modelo.": {
    "pt-BR-comunidade": "Este convite tem seções reescritas à mão. Confirme o descarte para trocar o modelo.",
  },
  "Quando considerar o cliente qualificado": {
    "pt-BR-comunidade": "Quando considerar a pessoa qualificada",
  },
  "Informe a referência real da avaliação que fundamenta esta prospecção. Isso não registra consentimento dos contatos.": {
    "pt-BR-comunidade":
      "Informe a referência real da avaliação que fundamenta esta captação. Isso não registra consentimento dos contatos.",
  },
  "E-mail do responsável do negócio": {
    "pt-BR-comunidade": "E-mail do responsável do relacionamento",
  },
  "As variáveis do WhatsApp valem aqui: {{nome}}, {{sobrenome}}, {{telefone}}, {{email}}, {{nome_negocio}}, {{valor_negocio}}, {{pipeline}}, {{etapa}}, {{responsavel}}.": {
    "pt-BR-comunidade":
      "As variáveis do WhatsApp valem aqui: {{nome}}, {{sobrenome}}, {{telefone}}, {{email}}, {{nome_relacionamento}}, {{valor_contribuicao}}, {{jornada}}, {{etapa}}, {{responsavel}}.",
  },
  "O negócio não tem responsável com e-mail cadastrado, então não havia endereço para onde enviar. Escolha outro destinatário na automação.": {
    "pt-BR-comunidade":
      "O relacionamento não tem responsável com e-mail cadastrado, então não havia endereço para onde enviar. Escolha outro destinatário na automação.",
  },
  "O responsável do negócio não faz mais parte da equipe, então o e-mail não foi enviado. Troque o responsável do negócio ou escolha outro destinatário na automação.": {
    "pt-BR-comunidade":
      "O responsável do relacionamento não faz mais parte da equipe, então o e-mail não foi enviado. Troque o responsável do relacionamento ou escolha outro destinatário na automação.",
  },
  "O agente lê a conversa, entende o histórico e responde ao cliente sem pedir que ele repita o que já disse.": {
    "pt-BR-comunidade": "O agente lê a conversa, entende o histórico e responde à pessoa sem pedir que ela repita o que já disse.",
  },
  "O agente registra a oportunidade, atualiza o negócio e move o cliente de etapa conforme a conversa avança.": {
    "pt-BR-comunidade":
      "O agente registra a oportunidade, atualiza o relacionamento e move a pessoa de etapa conforme a conversa avança.",
  },
  "Não perder o cliente": {
    "pt-BR-comunidade": "Não perder a pessoa",
  },
  "Ações propostas: precisam de autorização separada": {
    "pt-BR-comunidade": "Ações propostas: precisam de autorização separada",
  },
  "O prompt e o conhecimento serão preservados. Nenhuma permissão para alterar negócios ou agenda será adicionada.": {
    "pt-BR-comunidade":
      "O prompt e o conhecimento serão preservados. Nenhuma permissão para alterar relacionamentos ou agenda será adicionada.",
  },
  "Mesmo motor e conhecimento do agente; nenhuma alteração é aplicada ao cliente.": {
    "pt-BR-comunidade": "Mesmo motor e conhecimento do agente; nenhuma alteração é aplicada à pessoa.",
  },

  // ─── Atendimento e distribuição ──────────────────────────────────────────
  "Escolhendo uma pessoa, todo cliente novo deste número vai direto para ela, sem passar pela distribuição. Precisa estar disponível para receber.": {
    "pt-BR-comunidade":
      "Escolhendo uma pessoa, toda pessoa nova deste número vai direto para ela, sem passar pela distribuição. Precisa estar disponível para receber.",
  },
  "Ligado, a mensagem que vai ao cliente ganha o nome de quem fala em negrito, na linha de cima. O histórico do CRM guarda o texto como foi escrito. Campanhas, lembretes e integrações por token não assinam.": {
    "pt-BR-comunidade":
      "Ligado, a mensagem que vai à pessoa ganha o nome de quem fala em negrito, na linha de cima. O histórico do CRM guarda o texto como foi escrito. Campanhas, lembretes e integrações por token não assinam.",
  },
  "Põe o nome do atendente ou da IA em negrito na linha de cima da mensagem ao cliente.": {
    "pt-BR-comunidade": "Põe o nome do atendente ou da IA em negrito na linha de cima da mensagem à pessoa.",
  },
  "Solo inicia después de que el equipo confirme una ausencia. Si la cita se reprograma o se cancela, o si el cliente vuelve a responder, la recuperación se interrumpe. Si ya hay otro seguimiento activo, no se inicia.": {
    "pt-BR-comunidade":
      "Solo inicia después de que el equipo confirme una ausencia. Si la cita se reprograma o se cancela, o si la persona vuelve a responder, la recuperación se interrumpe. Si ya hay otro seguimiento activo, no se inicia.",
  },
  "Compromisso pessoal, sem cliente vinculado.": {
    "pt-BR-comunidade": "Compromisso pessoal, sem pessoa vinculada.",
  },
  "Não iniciada: o atendimento ou a resposta do cliente mudou.": {
    "pt-BR-comunidade": "Não iniciada: o atendimento ou a resposta da pessoa mudou.",
  },
  "Recuperação iniciada e interrompida porque o cliente respondeu.": {
    "pt-BR-comunidade": "Recuperação iniciada e interrompida porque a pessoa respondeu.",
  },
  "Mensagem do cliente usada como evidência (opcional)": {
    "pt-BR-comunidade": "Mensagem da pessoa usada como evidência (opcional)",
  },
  "Buscar cliente": {
    "pt-BR-comunidade": "Buscar pessoa",
  },
  "Compromisso pessoal, sem cliente": {
    "pt-BR-comunidade": "Compromisso pessoal, sem pessoa",
  },
  "Abrir negócio": {
    "pt-BR-comunidade": "Abrir relacionamento",
  },
  "Na evolução do assistente, confira as propostas disponíveis. Este aviso não identifica uma proposta específica.": {
    "pt-BR-comunidade":
      "Na evolução do assistente, confira os convites disponíveis. Este aviso não identifica um convite específico.",
  },
  "Confira os negócios do contato e escolha a qual deles pertence a próxima ação.": {
    "pt-BR-comunidade": "Confira os relacionamentos do contato e escolha a qual deles pertence a próxima ação.",
  },
  "Revise os negócios parados no Radar e defina o próximo passo.": {
    "pt-BR-comunidade": "Revise os relacionamentos parados no Radar e defina o próximo passo.",
  },
  "Revise no Radar se ainda cabe retomar os negócios indicados.": {
    "pt-BR-comunidade": "Revise no Radar se ainda cabe retomar os relacionamentos indicados.",
  },
  "A sugestão venceu. Se a informação ainda for relevante, confirme com o cliente antes de editar sua ficha.": {
    "pt-BR-comunidade": "A sugestão venceu. Se a informação ainda for relevante, confirme com a pessoa antes de editar sua ficha.",
  },
  "Encerrada pelo cliente": {
    "pt-BR-comunidade": "Encerrada pela pessoa",
  },
  "Abra o atendimento e diga o que fazer: responsável, anotação, mudança de etapa, reabertura ou resolução. A automação faz o que a regra pede. Sem decisão no prazo, o caso volta a ser oferecido.": {
    "pt-BR-comunidade":
      "Abra o atendimento e diga o que fazer: responsável, anotação, mudança de etapa, reabertura ou resolução. A automação faz o que a regra pede. Sem decisão no prazo, o caso volta a ser oferecido.",
  },
  "Abra o caso para responder. A IA continua atendendo o cliente enquanto isso.": {
    "pt-BR-comunidade": "Abra o caso para responder. A IA continua atendendo a pessoa enquanto isso.",
  },
  "Vale só para tipos de atendimento que pedem confirmação. Enquanto o pedido espera, o horário fica reservado e ninguém mais o pega; passado o prazo sem decisão, ele volta a ser oferecido. O cliente não é avisado, e o pedido continua na fila.": {
    "pt-BR-comunidade":
      "Vale só para tipos de atendimento que pedem confirmação. Enquanto o pedido espera, o horário fica reservado e ninguém mais o pega; passado o prazo sem decisão, ele volta a ser oferecido. A pessoa não é avisada, e o pedido continua na fila.",
  },

  // ─── Kanban e separação de pessoas ──────────────────────────────────────
  "Clientes": {
    "pt-BR-comunidade": "Membros",
  },
  'Para separar quem já é cliente, ligue "Clientes pela agenda" em Configurações › Tipos de agendamento. Enquanto estiver desligado, todo contato novo entra pelo funil padrão.': {
    "pt-BR-comunidade":
      'Para separar quem já é membro, ligue "Membros pela agenda" em Configurações › Tipos de agendamento. Enquanto estiver desligado, todo contato novo entra pela jornada padrão.',
  },
  'Para separar quem já é cliente, ligue “Clientes pela agenda” em Configurações › Tipos de agendamento. Enquanto estiver desligado, todo contato novo entra pelo funil padrão.': {
    "pt-BR-comunidade":
      'Para separar quem já é membro, ligue “Membros pela agenda” em Configurações › Tipos de agendamento. Enquanto estiver desligado, todo contato novo entra pela jornada padrão.',
  },

  // ─── Customer 360 e contatos ─────────────────────────────────────────────
  "Customer 360 — busque, filtre e gerencie contatos.": {
    "pt-BR-comunidade": "Visão 360 — busque, filtre e gerencie contatos.",
  },
  "Clique em Conectar com Google e informe o Customer ID da conta de anúncios.": {
    "pt-BR-comunidade": "Clique em Conectar com Google e informe o ID da conta de anúncios.",
  },
  "Conta de anúncios (Customer ID)": {
    "pt-BR-comunidade": "Conta de anúncios (ID)",
  },

  // ─── Settings e configurações ────────────────────────────────────────────
  "Quem recebe cada cliente novo, e o que cada atendente enxerga.": {
    "pt-BR-comunidade": "Quem recebe cada pessoa nova, e o que cada atendente enxerga.",
  },
  "Quem recebe cada cliente novo, e o que cada atendente enxerga. As duas decisões andam juntas: distribuir sem restringir deixa todo mundo vendo a carteira do colega; restringir sem distribuir deixa o funil de cada um vazio.": {
    "pt-BR-comunidade":
      "Quem recebe cada pessoa nova, e o que cada atendente enxerga. As duas decisões andam juntas: distribuir sem restringir deixa todo mundo vendo a carteira do colega; restringir sem distribuir deixa a jornada de cada um vazia.",
  },
  "Pedidos de exportação e exclusão de dados feitos por clientes.": {
    "pt-BR-comunidade": "Pedidos de exportação e exclusão de dados feitos por pessoas.",
  },
  "Modelos de proposta": {
    "pt-BR-comunidade": "Modelos de convite",
  },
  "As propostas estão desligadas para esta organização. Para editar os modelos, ligue as propostas em Configurações › Propostas e salve.": {
    "pt-BR-comunidade":
      "Os convites estão desligados para esta organização. Para editar os modelos, ligue os convites em Configurações › Convites e salve.",
  },
  "Ir para Configurações › Propostas": {
    "pt-BR-comunidade": "Ir para Configurações › Convites",
  },
  "Personalize os modelos da plataforma ou crie os da sua empresa, inclusive a partir de uma proposta que você já usa.": {
    "pt-BR-comunidade":
      "Personalize os modelos da plataforma ou crie os da sua organização, inclusive a partir de um convite que você já usa.",
  },
  "Devolver ao anúncio as vendas que ele trouxe, e marcar a origem de quem chega pelo site.": {
    "pt-BR-comunidade": "Devolver ao anúncio as adesões que ele trouxe, e marcar a origem de quem chega pelo site.",
  },
  "Devolve ao anúncio da Meta as vendas que ele trouxe.": {
    "pt-BR-comunidade": "Devolve ao anúncio da Meta as adesões que ele trouxe.",
  },

  // ─── Propostas comerciais ────────────────────────────────────────────────
  "Propostas comerciais": {
    "pt-BR-comunidade": "Convites",
  },
  "Propostas já enviadas continuam disponíveis em Propostas.": {
    "pt-BR-comunidade": "Convites já enviados continuam disponíveis em Convites.",
  },
  "continua em Propostas": {
    "pt-BR-comunidade": "continua em Convites",
  },
  "Propostas está desligada nesta organização: o rascunho automático de proposta fica guardado e volta a valer quando alguém ligar em Configurações › Propostas.": {
    "pt-BR-comunidade":
      "Convites está desligado nesta organização: o rascunho automático de convite fica guardado e volta a valer quando alguém ligar em Configurações › Convites.",
  },
  "Ligado, cada empresa pode ligar em Configurações › Propostas o módulo de proposta comercial: a IA levanta o que o cliente precisa, monta a proposta pelos modelos da empresa e o PDF sai pelo WhatsApp. Desligado, nenhuma empresa vê a tela, o menu nem as ferramentas do agente.": {
    "pt-BR-comunidade":
      "Ligado, cada organização pode ligar em Configurações › Convites o módulo de convite: a IA levanta o que a pessoa precisa, monta o convite pelos modelos da organização e o PDF sai pelo WhatsApp. Desligado, nenhuma organização vê a tela, o menu nem as ferramentas do agente.",
  },
  "Criar a partir da proposta que a empresa já usa": {
    "pt-BR-comunidade": "Criar a partir do convite que a organização já usa",
  },
  "Envie a proposta em PDF, Markdown (.md) ou texto (.txt).": {
    "pt-BR-comunidade": "Envie o convite em PDF, Markdown (.md) ou texto (.txt).",
  },
  "Não encontrei texto neste arquivo. Se for um PDF escaneado, exporte a proposta original como PDF com texto.": {
    "pt-BR-comunidade":
      "Não encontrei texto neste arquivo. Se for um PDF escaneado, exporte o convite original como PDF com texto.",
  },
  "Envie um PDF, .md ou .txt de até 5 MB. A IA divide em seções e troca os dados do cliente por campos; você revisa antes de salvar.": {
    "pt-BR-comunidade":
      "Envie um PDF, .md ou .txt de até 5 MB. A IA divide em seções e troca os dados da pessoa por campos; você revisa antes de salvar.",
  },
  "Envie um PDF, .md ou .txt de até 5 MB. A IA divide em seções, troca por campos o que muda de um cliente e de um projeto para outro, e você revisa antes de salvar.": {
    "pt-BR-comunidade":
      "Envie um PDF, .md ou .txt de até 5 MB. A IA divide em seções, troca por campos o que muda de uma pessoa e de um projeto para outro, e você revisa antes de salvar.",
  },
  "Arquivo da proposta": {
    "pt-BR-comunidade": "Arquivo do convite",
  },
  "Voltar ao modelo da plataforma? As mudanças da empresa deixam de valer nas próximas propostas.": {
    "pt-BR-comunidade": "Voltar ao modelo da plataforma? As mudanças da organização deixam de valer nos próximos convites.",
  },
  "Remover este modelo? As propostas já enviadas não mudam.": {
    "pt-BR-comunidade": "Remover este modelo? Os convites já enviados não mudam.",
  },
  "Este modelo vai pedir ao cliente:": {
    "pt-BR-comunidade": "Este modelo vai pedir à pessoa:",
  },
  "Este modelo quase não pede nada ao cliente: a IA não saberá o que perguntar. Troque por {{campo}} o que muda de um projeto para outro.": {
    "pt-BR-comunidade":
      "Este modelo quase não pede nada à pessoa: a IA não saberá o que perguntar. Troque por {{campo}} o que muda de um projeto para outro.",
  },
  "Escreva {{campo}} no texto; a proposta troca pelo valor de cada cliente.": {
    "pt-BR-comunidade": "Escreva {{campo}} no texto; o convite troca pelo valor de cada pessoa.",
  },
  "Não foi possível aplicar a proposta.": {
    "pt-BR-comunidade": "Não foi possível aplicar o convite.",
  },
  "Nenhuma proposta ainda": {
    "pt-BR-comunidade": "Nenhum convite ainda",
  },
  "Nenhuma proposta esperando você": {
    "pt-BR-comunidade": "Nenhum convite esperando você",
  },
  "Só é possível editar o documento de uma proposta em rascunho.": {
    "pt-BR-comunidade": "Só é possível editar o documento de um convite em rascunho.",
  },
  "Só é possível preencher o documento de uma proposta em rascunho.": {
    "pt-BR-comunidade": "Só é possível preencher o documento de um convite em rascunho.",
  },

  // ─── IA e agentes ────────────────────────────────────────────────────────
  "Os materiais que o agente consulta antes de responder sobre o seu negócio.": {
    "pt-BR-comunidade": "Os materiais que o agente consulta antes de responder sobre o relacionamento.",
  },
  "Ele consulta este material antes de responder sobre o seu negócio.": {
    "pt-BR-comunidade": "Ele consulta este material antes de responder sobre o relacionamento.",
  },
  "O dia a dia da venda": {
    "pt-BR-comunidade": "O dia a dia do relacionamento",
  },
  "Preparar a venda": {
    "pt-BR-comunidade": "Preparar o relacionamento",
  },
  "Onde a venda acontece — e o que você define uma vez para ela funcionar.": {
    "pt-BR-comunidade": "Onde o relacionamento acontece — e o que você define uma vez para ele funcionar.",
  },
  "Como o negócio foi no período — e o histórico para quando alguém perguntar por quê.": {
    "pt-BR-comunidade": "Como o relacionamento foi no período — e o histórico para quando alguém perguntar por quê.",
  },
  "Modelo da versão publicada — é o que atende o cliente.": {
    "pt-BR-comunidade": "Modelo da versão publicada — é o que atende a pessoa.",
  },
  "Conversa com o cliente": {
    "pt-BR-comunidade": "Conversa com a pessoa",
  },
  "Passar para uma pessoa quando o cliente falar de assunto jurídico (Procon, advogado, processo)": {
    "pt-BR-comunidade": "Passar para uma pessoa quando ela falar de assunto jurídico (Procon, advogado, processo)",
  },
  "Os fluxos abaixo só entram em ação para um cliente se este agente estiver publicado com follow-up habilitado.": {
    "pt-BR-comunidade":
      "Os fluxos abaixo só entram em ação para uma pessoa se este agente estiver publicado com follow-up habilitado.",
  },
  "Em que negócios ele pode mexer": {
    "pt-BR-comunidade": "Em que relacionamentos ele pode mexer",
  },
  "Marque os funis que este assistente cuida. Ele conversa com qualquer cliente, mas só move, edita ou encerra negócio dos funis marcados aqui.": {
    "pt-BR-comunidade":
      "Marque as jornadas que este assistente cuida. Ele conversa com qualquer pessoa, mas só move, edita ou encerra relacionamento das jornadas marcadas aqui.",
  },
  "Sem nenhum funil marcado, ele conversa com os clientes normalmente, mas não mexe em negócio nenhum — nem move, nem encerra, nem marca.": {
    "pt-BR-comunidade":
      "Sem nenhuma jornada marcada, ele conversa com as pessoas normalmente, mas não mexe em relacionamento nenhum — nem move, nem encerra, nem marca.",
  },
  ", mas ninguém disse ao assistente o que cada etapa desse funil significa — ele vai atender e deixar os negócios parados onde estão.": {
    "pt-BR-comunidade":
      ", mas ninguém disse ao assistente o que cada etapa dessa jornada significa — ele vai atender e deixar os relacionamentos parados onde estão.",
  },
  "funis em que ninguém disse ao assistente o que cada etapa significa — ele vai atender e deixar os negócios parados onde estão.": {
    "pt-BR-comunidade":
      "jornadas em que ninguém disse ao assistente o que cada etapa significa — ele vai atender e deixar os relacionamentos parados onde estão.",
  },
  "As conversas novas viram negócio em": {
    "pt-BR-comunidade": "As conversas novas viram relacionamento em",
  },
  ", que não está marcado. O assistente vai atender e os negócios vão se acumular ali sem que ele possa organizá-los.": {
    "pt-BR-comunidade":
      ", que não está marcada. O assistente vai atender e os relacionamentos vão se acumular ali sem que ele possa organizá-los.",
  },
  "Uma mensagem nova do cliente": {
    "pt-BR-comunidade": "Uma mensagem nova da pessoa",
  },
  "Um de cada vez por cliente": {
    "pt-BR-comunidade": "Um de cada vez por pessoa",
  },
  "Quando o cliente escrever fora do horário, esta mensagem é enviada na hora — uma vez por cliente por período fechado, e só se a IA não responder.": {
    "pt-BR-comunidade":
      "Quando a pessoa escrever fora do horário, esta mensagem é enviada na hora — uma vez por pessoa por período fechado, e só se a IA não responder.",
  },
  "promessas feitas ao cliente,": {
    "pt-BR-comunidade": "promessas feitas à pessoa,",
  },
  "Quem conversa com o cliente é uma coisa; quem mantém o sistema em dia é outra. Separar os dois evita que o assistente continue prometendo enquanto o agendamento está cheio.": {
    "pt-BR-comunidade":
      "Quem conversa com a pessoa é uma coisa; quem mantém o sistema em dia é outra. Separar os dois evita que o assistente continue prometendo enquanto o agendamento está cheio.",
  },
  "o assistente continua atendendo e o básico continua sendo registrado sozinho — a etapa do cliente, o retorno que ele prometeu, e o handoff quando dá errado.": {
    "pt-BR-comunidade":
      "o assistente continua atendendo e o básico continua sendo registrado sozinho — a etapa da pessoa, o retorno que ele prometeu, e o handoff quando dá errado.",
  },
  "Criar rascunho de proposta fica só com o assistente que conversa: ele segue o seu roteiro e sabe quando o cliente já explicou o que precisa.": {
    "pt-BR-comunidade":
      "Criar rascunho de convite fica só com o assistente que conversa: ele segue o seu roteiro e sabe quando a pessoa já explicou o que precisa.",
  },
  "Esta lista é só deste papel — nada aqui é usado enquanto ele conversa com o cliente. Ligue por jornada de trabalho.": {
    "pt-BR-comunidade":
      "Esta lista é só deste papel — nada aqui é usado enquanto ele conversa com a pessoa. Ligue por jornada de trabalho.",
  },
  "Sem nada marcado, ele ainda avisa você quando o assistente prometer algo a um cliente e ninguém cumprir — mas não consegue registrar nem mover nada sozinho.": {
    "pt-BR-comunidade":
      "Sem nada marcado, ele ainda avisa você quando o assistente prometer algo a uma pessoa e ninguém cumprir — mas não consegue registrar nem mover nada sozinho.",
  },
  "Esta resposta usa palavras que o cliente não deveria ver.": {
    "pt-BR-comunidade": "Esta resposta usa palavras que a pessoa não deveria ver.",
  },
  "Mensagem do cliente (sample)": {
    "pt-BR-comunidade": "Mensagem da pessoa (sample)",
  },
  "Data de um campo do negócio": {
    "pt-BR-comunidade": "Data de um campo do relacionamento",
  },
  "Só começar se a equipe já respondeu a última mensagem do cliente": {
    "pt-BR-comunidade": "Só começar se a equipe já respondeu a última mensagem da pessoa",
  },
  "Campo do negócio com a data": {
    "pt-BR-comunidade": "Campo do relacionamento com a data",
  },
  "Depois de 24 horas sem resposta do cliente, só um modelo aprovado no WhatsApp chega até ele.": {
    "pt-BR-comunidade": "Depois de 24 horas sem resposta da pessoa, só um modelo aprovado no WhatsApp chega até ela.",
  },
  "Outro campo do negócio": {
    "pt-BR-comunidade": "Outro campo do relacionamento",
  },
  "Chave do campo do negócio": {
    "pt-BR-comunidade": "Chave do campo do relacionamento",
  },
  "Tempo sem o cliente falar": {
    "pt-BR-comunidade": "Tempo sem a pessoa falar",
  },
  "Da última mensagem do cliente": {
    "pt-BR-comunidade": "Da última mensagem da pessoa",
  },
  "Contar a pausa a partir do último envio deste fluxo (e não da última mensagem do cliente)": {
    "pt-BR-comunidade": "Contar a pausa a partir do último envio deste fluxo (e não da última mensagem da pessoa)",
  },
  "Com um máximo, o fluxo só começa enquanto o silêncio for recente — por exemplo, entre 10 e 60 minutos depois da última mensagem do cliente. Sem máximo, ele pode começar dias depois.": {
    "pt-BR-comunidade":
      "Com um máximo, o fluxo só começa enquanto o silêncio for recente — por exemplo, entre 10 e 60 minutos depois da última mensagem da pessoa. Sem máximo, ele pode começar dias depois.",
  },
  "Vale para quem já passou por este fluxo e respondeu ou chegou ao fim: ele só recomeça depois deste tempo sem o cliente escrever.": {
    "pt-BR-comunidade":
      "Vale para quem já passou por este fluxo e respondeu ou chegou ao fim: ele só recomeça depois deste tempo sem a pessoa escrever.",
  },
  "Quando o cliente manda a localização pelo WhatsApp, o sistema consulta o Google e o agente lê a rua e a cidade aproximadas. Sempre peça para ela mandar; nunca peça o endereço por texto.": {
    "pt-BR-comunidade":
      "Quando a pessoa manda a localização pelo WhatsApp, o sistema consulta o Google e o agente lê a rua e a cidade aproximadas. Sempre peça para ela mandar; nunca peça o endereço por texto.",
  },
  "Vocabulário do tenant para 'lead' (ex: cliente)": {
    "pt-BR-comunidade": "Vocabulário da organização para 'lead' (ex: interessado)",
  },

  // ─── Atendimento e interações ────────────────────────────────────────────
  "Abra o atendimento e diga o que fazer: concluir, pedir informação ao cliente ou passar para uma pessoa.": {
    "pt-BR-comunidade": "Abra o atendimento e diga o que fazer: concluir, pedir informação à pessoa ou passar para alguém.",
  },
  "Onde o dinheiro fica, como o cliente paga e como cada lançamento é classificado.": {
    "pt-BR-comunidade": "Onde o dinheiro fica, como a pessoa contribui e como cada lançamento é classificado.",
  },
  "Como o cliente paga. A conta escolhida aqui é onde esse dinheiro entra quando a comanda é fechada.": {
    "pt-BR-comunidade": "Como a pessoa contribui. A conta escolhida aqui é onde esse dinheiro entra quando a comanda é fechada.",
  },
  "Automático pausado para este cliente": {
    "pt-BR-comunidade": "Automático pausado para esta pessoa",
  },
  "Responder à nova mensagem do cliente": {
    "pt-BR-comunidade": "Responder à nova mensagem da pessoa",
  },
  "Atender o cliente": {
    "pt-BR-comunidade": "Atender a pessoa",
  },
  "Escrever o que o cliente lê e agir no funil durante a conversa.": {
    "pt-BR-comunidade": "Escrever o que a pessoa lê e agir na jornada durante a conversa.",
  },

  // ─── Campos e dados ──────────────────────────────────────────────────────
  "DADOS DO NEGÓCIO": {
    "pt-BR-comunidade": "DADOS DO RELACIONAMENTO",
  },

  // ─── IA e aprendizado ────────────────────────────────────────────────────
  "O padrão recomendado para conversar com o cliente: é o que melhor segue instruções longas e usa as ferramentas do CRM.": {
    "pt-BR-comunidade":
      "O padrão recomendado para conversar com a pessoa: é o que melhor segue instruções longas e usa as ferramentas do CRM.",
  },
  "Não conversa com o cliente: toma decisões rápidas e baratas — como perceber se o cliente está irritado — geralmente em menos de um segundo.": {
    "pt-BR-comunidade":
      "Não conversa com a pessoa: toma decisões rápidas e baratas — como perceber se a pessoa está irritada — geralmente em menos de um segundo.",
  },
  "O Jev não conversa com o cliente — falta a chave da sua IA principal.": {
    "pt-BR-comunidade": "O Jev não conversa com a pessoa — falta a chave da sua IA principal.",
  },
  "O que o cliente precisa": {
    "pt-BR-comunidade": "O que a pessoa precisa",
  },
  "Aguardando o cliente responder — a IA avisa você quando tiver a informação.": {
    "pt-BR-comunidade": "Aguardando a pessoa responder — a IA avisa você quando tiver a informação.",
  },
  "A IA avisa o cliente e encerra o assunto.": {
    "pt-BR-comunidade": "A IA avisa a pessoa e encerra o assunto.",
  },
  "Preciso de info do cliente": {
    "pt-BR-comunidade": "Preciso de info da pessoa",
  },
  "A IA pergunta ao cliente e o caso volta pra você quando ele responder.": {
    "pt-BR-comunidade": "A IA pergunta à pessoa e o caso volta pra você quando ela responder.",
  },
  "A IA perguntou ao cliente": {
    "pt-BR-comunidade": "A IA perguntou à pessoa",
  },
  "O cliente respondeu": {
    "pt-BR-comunidade": "A pessoa respondeu",
  },
  "O cliente não respondeu a tempo": {
    "pt-BR-comunidade": "A pessoa não respondeu a tempo",
  },
  "Você pediu uma informação ao cliente": {
    "pt-BR-comunidade": "Você pediu uma informação à pessoa",
  },
  "Quando a IA não tem certeza do que o cliente quer, ela chama este agente em vez de travar a conversa.": {
    "pt-BR-comunidade": "Quando a IA não tem certeza do que a pessoa quer, ela chama este agente em vez de travar a conversa.",
  },
  "Cada intenção descreve uma situação e diz qual agente deve assumir a conversa quando o cliente quer aquilo.": {
    "pt-BR-comunidade":
      "Cada intenção descreve uma situação e diz qual agente deve assumir a conversa quando a pessoa quer aquilo.",
  },
  "Escreva como explicaria para um atendente novo: em que situação o cliente cai aqui.": {
    "pt-BR-comunidade": "Escreva como explicaria para um atendente novo: em que situação a pessoa cai aqui.",
  },
  "Mandar ao cliente": {
    "pt-BR-comunidade": "Mandar à pessoa",
  },
  "Mandar de novo os dados deste compromisso para o cliente?": {
    "pt-BR-comunidade": "Mandar de novo os dados deste compromisso para a pessoa?",
  },
  "Mandar de novo o link desta reunião para o cliente?": {
    "pt-BR-comunidade": "Mandar de novo o link desta reunião para a pessoa?",
  },
  "Este cliente está sendo atendido neste instante. Espere alguns segundos e tente de novo.": {
    "pt-BR-comunidade": "Esta pessoa está sendo atendida neste instante. Espere alguns segundos e tente de novo.",
  },
  "Ex.: Nunca prometa desconto sem confirmar com um humano. Horário de atendimento: 9h–18h, seg-sex. Sempre chame o cliente pelo primeiro nome.": {
    "pt-BR-comunidade":
      "Ex.: Nunca prometa desconto sem confirmar com um humano. Horário de atendimento: 9h–18h, seg-sex. Sempre chame a pessoa pelo primeiro nome.",
  },
  "O que os clientes mais quiseram, segundo o que o roteador entendeu de cada conversa.": {
    "pt-BR-comunidade": "O que as pessoas mais quiseram, segundo o que o roteador entendeu de cada conversa.",
  },
  "Quantas vezes o sistema leu o que o cliente queria e escolheu qual atendimento devia responder.": {
    "pt-BR-comunidade": "Quantas vezes o sistema leu o que a pessoa queria e escolheu qual atendimento devia responder.",
  },
  "Seu agente ainda não aprendeu nada neste período. Ele aprende de três jeitos: você publica uma regra na Memória da IA, aprova uma sugestão de melhoria na aba Propostas do agente, ou instala uma habilidade em Skills da IA.": {
    "pt-BR-comunidade":
      "Seu agente ainda não aprendeu nada neste período. Ele aprende de três jeitos: você publica uma regra na Memória da IA, aprova uma sugestão de melhoria na aba Sugestões do agente, ou instala uma habilidade em Skills da IA.",
  },
  "A tela de Propostas para de sugerir melhorias, e o agente estaciona no desempenho atual.": {
    "pt-BR-comunidade": "A tela de Sugestões para de sugerir melhorias, e o agente estaciona no desempenho atual.",
  },
  "Você ainda não cadastrou a chave da sua IA principal, a que conversa com os clientes.": {
    "pt-BR-comunidade": "Você ainda não cadastrou a chave da sua IA principal, a que conversa com as pessoas.",
  },
  "O que aconteceu com os seus negócios neste período. Para saber se melhorou, mude as datas acima e compare com o mês anterior.": {
    "pt-BR-comunidade":
      "O que aconteceu com os seus relacionamentos neste período. Para saber se melhorou, mude as datas acima e compare com o mês anterior.",
  },
  "Clientes que o agente marcou como fechados. Negócio que a sua equipe fechou na mão, movendo o cartão no quadro, não entra aqui.": {
    "pt-BR-comunidade":
      "Pessoas que o agente marcou como concluídas. Relacionamento que a sua equipe fechou na mão, movendo o cartão no quadro, não entra aqui.",
  },
  "Quantas vezes o agente registrou que um cliente mudou de passo no atendimento — o sinal de que a conversa andou, e não só o agente respondeu.": {
    "pt-BR-comunidade":
      "Quantas vezes o agente registrou que uma pessoa mudou de passo no atendimento — o sinal de que a conversa andou, e não só o agente respondeu.",
  },
  "Conversas que o agente passou para um atendente humano, a cada 100 mensagens recebidas. Leia como estimativa: no geral o handoff acontece bem depois da primeira mensagem — a taxa real pode ser menor.": {
    "pt-BR-comunidade":
      "Conversas que o agente passou para um atendente humano, a cada 100 mensagens recebidas. Leia como estimativa: no geral o handoff acontece bem depois da primeira mensagem — a taxa real pode ser menor.",
  },

  // ─── Prospecção e captação ───────────────────────────────────────────────
  "Prospecção": {
    "pt-BR-comunidade": "Captação",
  },
  "Propostas": {
    "pt-BR-comunidade": "Convites",
  },
  "Disparos em massa, prospecção e mensagens que retomam conversa parada só saem nesta janela. Fora dela, o envio fica agendado para a próxima abertura — você vê o motivo na conversa.": {
    "pt-BR-comunidade":
      "Disparos em massa, captação e mensagens que retomam conversa parada só saem nesta janela. Fora dela, o envio fica agendado para a próxima abertura — você vê o motivo na conversa.",
  },
  "Ligado por padrão: quem escreve no domingo espera resposta no domingo. Desligue se você faz prospecção ativa e prefere não incomodar no fim de semana.": {
    "pt-BR-comunidade":
      "Ligado por padrão: quem escreve no domingo espera resposta no domingo. Desligue se você faz captação ativa e prefere não incomodar no fim de semana.",
  },
  "Disparos em massa e mensagens que retomam conversa parada só saem nesta janela. A prospecção usa estas horas nos dias próprios abaixo. Fora da janela, o envio fica agendado para a próxima abertura — você vê o motivo na conversa.": {
    "pt-BR-comunidade":
      "Disparos em massa e mensagens que retomam conversa parada só saem nesta janela. A captação usa estas horas nos dias próprios abaixo. Fora da janela, o envio fica agendado para a próxima abertura — você vê o motivo na conversa.",
  },
  "Dias da prospecção": {
    "pt-BR-comunidade": "Dias da captação",
  },
  "A primeira abordagem da prospecção só sai nestes dias, dentro da janela de disparo acima. Responder a quem escreveu segue a regra própria — desligar o domingo aqui não cala a resposta de domingo.": {
    "pt-BR-comunidade":
      "A primeira abordagem da captação só sai nestes dias, dentro da janela de disparo acima. Responder a quem escreveu segue a regra própria — desligar o domingo aqui não cala a resposta de domingo.",
  },
  "Marque pelo menos um dia: sem dia marcado a prospecção não aborda ninguém.": {
    "pt-BR-comunidade": "Marque pelo menos um dia: sem dia marcado a captação não aborda ninguém.",
  },
  "Ligado por padrão: quem escreve no domingo espera resposta no domingo. Desligar cala a resposta e os disparos em massa no domingo — a prospecção segue os dias próprios acima.": {
    "pt-BR-comunidade":
      "Ligado por padrão: quem escreve no domingo espera resposta no domingo. Desligar cala a resposta e os disparos em massa no domingo — a captação segue os dias próprios acima.",
  },
  "Tratar o token como administrador: as permissões marcadas agem com poder de administrador (junto de AGIR no CRM, cria agentes de IA e rascunhos e configura, busca e pausa a prospecção)": {
    "pt-BR-comunidade":
      "Tratar o token como administrador: as permissões marcadas agem com poder de administrador (junto de AGIR no CRM, cria agentes de IA e rascunhos e configura, busca e pausa a captação)",
  },
  "Não há base legal (LGPD) para o primeiro contato de prospecção com este lead. O time precisa regularizar o cadastro antes de abordar.": {
    "pt-BR-comunidade":
      "Não há base legal (LGPD) para o primeiro contato de captação com este interessado. O time precisa regularizar o cadastro antes de abordar.",
  },
  "Contato anonimizado a pedido não recebe mensagem, e prospecção sem base legal não sai.": {
    "pt-BR-comunidade": "Contato anonimizado a pedido não recebe mensagem, e captação sem base legal não sai.",
  },
};
