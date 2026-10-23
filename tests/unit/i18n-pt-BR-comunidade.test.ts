import { describe, expect, it } from "vitest";

import { traduzir } from "@/lib/i18n/dicionario";

/**
 * Português (Comunidade) — variante de terminologia para organizações
 * religiosas e sem fins lucrativos.
 *
 * Esta variante reframe terminologia de vendas:
 * - cliente → benfeitor/membro
 * - lead → interessado
 * - venda → adesão/doação
 * - negócio → relacionamento
 * - produto → iniciativa
 *
 * O que NÃO tem tradução específica cai em pt-BR (a chave).
 */

describe("Português (Comunidade) — pt-BR-comunidade", () => {
  describe("frases mapeadas resolvem na variante", () => {
    const casos: Array<[string, string]> = [
      // cliente → benfeitor/membro/pessoa
      [
        "Para atendimento de clientes em volume, prefira uma chave de API da própria organização. Se configurada, ela pode servir como reserva quando a assinatura atingir limites ou falhar.",
        "Para atendimento de membros em volume, prefira uma chave de API da própria organização. Se configurada, ela pode servir como reserva quando a assinatura atingir limites ou falhar.",
      ],
      ["Testar como cliente", "Testar como pessoa"],
      ["Buscar cliente", "Buscar pessoa"],
      
      // lead → interessado
      ["Autorizar IA para leads deste formulário", "Autorizar IA para interessados deste formulário"],
      ["Envio de formulário de lead", "Envio de formulário de interessado"],

      // venda → adesão/doação
      ["Atendimento e vendas pelo WhatsApp, com agentes de inteligência artificial.", "Atendimento e relacionamento pelo WhatsApp, com agentes de inteligência artificial."],
      ["Venda (negócio ganho)", "Adesão (relacionamento concluído)"],
      ["Enviar vendas pelo canal da conversa", "Enviar adesões pelo canal da conversa"],

      // negócio → relacionamento
      ["Buscar por negócio", "Buscar por relacionamento"],
      ["Nome do negócio", "Nome do relacionamento"],
      ["Valor do negócio", "Valor da contribuição"],

      // conversão → adesão
      ["Nenhuma conversão aceita ainda", "Nenhuma adesão aceita ainda"],
      ["Categoria da conversão", "Categoria da adesão"],
      ["não envia conversão", "não envia adesão"],

      // funil → jornada
      [
        "reúne em um só lugar as conversas com os clientes, o funil de vendas, a agenda de atendimentos e agentes de inteligência artificial que respondem, qualificam o interesse e passam a conversa para uma pessoa quando é preciso.",
        "reúne em um só lugar as conversas com as pessoas, a jornada de relacionamento, a agenda de atendimentos e agentes de inteligência artificial que respondem, qualificam o interesse e passam a conversa para uma pessoa quando é preciso.",
      ],

      // proposta → convite
      ["Escolha o modelo da proposta antes de preencher campos.", "Escolha o modelo do convite antes de preencher campos."],
      
      // prospecção → captação
      ["Falha ao carregar a prospecção.", "Falha ao carregar a captação."],
    ];

    casos.forEach(([chave, esperado]) => {
      it(`"${chave.slice(0, 60)}..." → "${esperado.slice(0, 60)}..."`, () => {
        const resultado = traduzir(chave, "pt-BR-comunidade");
        expect(resultado).toBe(esperado);
      });
    });
  });

  describe("frases NÃO mapeadas caem em pt-BR (a chave)", () => {
    const frasesGenericas = [
      "Salvar",
      "Cancelar",
      "Excluir",
      "Adicionar",
      "Editar",
      "Confirmar",
      "Configurações",
      "Perfil",
      "Sair",
      "Atualizar",
      "Recarregar",
      "Não foi possível carregar os dados.",
      "Dados salvos com sucesso.",
      "Conexão perdida. Tentando reconectar...",
      "Este campo é obrigatório.",
      "Escolha uma opção antes de continuar.",
    ];

    frasesGenericas.forEach((frase) => {
      it(`"${frase}" permanece "${frase}" (fallback para pt-BR)`, () => {
        const resultado = traduzir(frase, "pt-BR-comunidade");
        expect(resultado).toBe(frase);
      });
    });
  });

  it("pt-BR continua devolvendo a chave sem tradução", () => {
    const chave = "Atendimento e vendas pelo WhatsApp, com agentes de inteligência artificial.";
    const ptBR = traduzir(chave, "pt-BR");
    expect(ptBR).toBe(chave); // pt-BR nunca traduz: devolve a chave
  });

  it("espanhol continua traduzindo como antes", () => {
    const chave = "Atendimento e vendas pelo WhatsApp, com agentes de inteligência artificial.";
    const es = traduzir(chave, "es");
    expect(es).toBe("Atención y ventas por WhatsApp, con agentes de inteligencia artificial.");
  });

  describe("contextos corretos de mapeamento", () => {
    it("'cliente' vira 'membro' em contexto de comunidade", () => {
      const entrada = "Para atendimento de clientes em volume, prefira uma chave de API da própria organização. Se configurada, ela pode servir como reserva quando a assinatura atingir limites ou falhar.";
      const resultado = traduzir(entrada, "pt-BR-comunidade");
      expect(resultado).toContain("membros");
      expect(resultado).not.toContain("clientes");
    });

    it("'cliente' vira 'pessoa' em contexto genérico", () => {
      const entrada = "Testar como cliente";
      const resultado = traduzir(entrada, "pt-BR-comunidade");
      expect(resultado).toContain("pessoa");
      expect(resultado).not.toContain("cliente");
    });

    it("'venda' vira 'adesão' em contexto de relacionamento", () => {
      const entrada = "Venda (negócio ganho)";
      const resultado = traduzir(entrada, "pt-BR-comunidade");
      expect(resultado).toContain("Adesão");
      expect(resultado).toContain("relacionamento concluído");
      expect(resultado).not.toContain("Venda");
      expect(resultado).not.toContain("negócio ganho");
    });

    it("'negócio' vira 'relacionamento' consistentemente", () => {
      // "Valor do negócio" vira "Valor da contribuição" (não relacionamento)
      expect(traduzir("Buscar por negócio", "pt-BR-comunidade")).toContain("relacionamento");
      expect(traduzir("Nome do negócio", "pt-BR-comunidade")).toContain("relacionamento");
      
      // Valor é contexto de doação, não negócio
      expect(traduzir("Valor do negócio", "pt-BR-comunidade")).toBe("Valor da contribuição");
    });
  });
});
