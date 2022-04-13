# Especificações do Projeto

Afim de facilitar a vida de quem gosta de jogar futebol amador, consolidamos algumas informações com pessoas que possuem experiência neste meio e que tenham passado por frustrações na hora de organizar suas partidas. Os detalhes foram analisados com afinco para proporcionar a melhor experiência possível à estas pessoas: organização, informações de contato, locais disponíveis, valor de locação e ter uma lista de jogadores preferidos.

## Personas

![](img/personas/1_leandro.png)

1- Leandro tem 26 anos, trabalha como estagiário em um escritório de advocacia na parte da manhã e faz faculdade de Direito na parte da noite. Procura sempre aprender novas demandas do seu estágio e pretente passar em um concurso público ao final da faculdade. Gosta de jogar futebol amador mas, como seu horário nem sempre encaixa com o de seus amigos, fica frustrado e à procura de um time para jogar no tempo livre.

![](img/personas/2_natalia.png)

2- Natália tem 23 anos, acabou de se graduar em Administração e pretende gerenciar um comércio e para aprender mais sobre, começou a trabalhar em uma loja de roupas no centro de sua cidade. Trabalha em horário comercial nos dias da semana e possui o final de semana livre para realizar as atividades que gosta, sendo uma delas, jogar futebol com suas amigas e amigos. Natália prefere jogar com times de futebol feminino, mas nem sempre encontra jogadoras suficientes para fechar uma quadra.

![](img/personas/3_joao.png)

3- João tem 45 anos e atualmente administra 2 quadras de futebol no bairro onde mora. Ele pretende abrir mais uma quadra fora do bairro para expandir seus negócios e garantir mais uma fonte de renda. Geralmente, encontra problemas no agendamento de horário de suas quadras por falta de organização e acaba marcando jogos diferentes para o mesmo dia e horário.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                            | PARA ... `MOTIVO/VALOR`                                              |
| -------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Leandro, Natália     | visualizar perfis de jogadores(as) com informações de contato                                 | convidar para um jogo amador                                         |
| Leandro, Natália     | realizar um cadastro de um perfil próprio para registrar informações de contato               | ser convidado por outros jogadores para um jogo amador               |
| Leandro, Natália     | visualizar informações de quadras, clubes, etc.                                               | agendar uma partida amadora de forma online                          |
| João                 | realizar um cadastro de um perfil próprio para registrar informações de quadras, clubes, etc. | receber reservas dos locais de forma online para realização de jogos |
| João                 | visualizar perfis de jogadores(as) com informações de contato                                 | convidar para realizar jogos amadores                                |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

| ID     | Descrição do Requisito                                                                                                                 | Prioridade |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | O site deve possuir uma área de login e cadastro                                                                                       | ALTA       |
| RF-002 | O site deve permitir usuários com perfil de Jogador, registrar suas informações de contato como: e-mail e telefone                     | MÉDIA      |
| RF-003 | O site deve permitir usuários com perfil de Proprietário, registrar informações de locais como: endereço, preço/hora e disponibilidade | MÉDIA      |
| RF-004 | O site deve permitir uma funcionalidade de filtro/pesquisa para permitir que qualquer usuário busque um ou mais jogadores              | MÉDIA      |
| RF-005 | O site deve permitir salvar perfis de jogadores ou locais preferidos                                                                   | BAIXA      |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

| ID      | Descrição do Requisito                                                               | Prioridade |
| ------- | ------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | O site deve ser publicado em um ambiente acessível publicamente na Internet (Heroku) | ALTA       |
| RNF-002 | O site deverá ser responsivo permitindo a visualização em qualquer tamanho de tela   | ALTA       |
| RNF-003 | O site deve ter bom nível de contraste entre os elementos da tela                    | MÉDIA      |
| RNF-004 | O site deve ser compatível com os principais navegadores do mercado                  | ALTA       |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

| ID     | Restrição                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------- |
| RE-001 | O projeto deverá ser entregue no final do semestre letivo, não podendo ultrapassar a data de 14/07/2022 |
| RE-002 | A aplicação deve se restringir às tecnologias básicas da Web no Front-end (HTML, CSS e JavaScript)      |
