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
};
