# Aula 2 - Resumo

## 1. Instalação do Bootstrap Icons
- Instalado o pacote `bootstrap-icons` para utilizar ícones do Bootstrap no projeto:
  ```sh
  npm i bootstrap-icons
  ```

## 2. Criação do Componente ListarCliente
- Criado o componente `listar-cliente` para gerenciar uma lista de clientes
- Estrutura de arquivos criada:
  - `listar-cliente.ts`: Lógica do componente
  - `listar-cliente.html`: Template HTML
  - `listar-cliente.css`: Estilos específicos
  - `listar-cliente.spec.ts`: Testes unitários

## 3. Implementação de Funcionalidades no ListarCliente

### 3.1. Interface de Listagem
- Criada interface com:
  - Campo de pesquisa
  - Botões "Pesquisar" e "Novo" com ícones do Bootstrap Icons
  - Tabela para exibir dados dos clientes
  - Uso de classes Bootstrap para estilização

### 3.2. Integração com NgBootstrap Modal
- Implementado sistema de modal para adicionar/editar clientes
- Utilização do serviço `NgbModal` injetado via `inject()`
- Método `open()` para abrir o modal
- Template de modal com:
  - Header com título e botão fechar
  - Body com formulário
  - Footer com botão de salvar

### 3.3. Componentes NgBootstrap Utilizados
- Modal (`NgbModal`)
- Integração com Bootstrap Icons

## 4. Configuração do Módulo
- Registrado o componente `ListarCliente` no `AppModule`
- Importações necessárias:
  - `NgbModule`
  - `NgbCarouselModule`

## 5. Atualização do App Principal
- Adicionado o componente `<app-listar-cliente></app-listar-cliente>` no template principal (`app.html`)
- O componente é exibido junto com os outros componentes existentes

## 6. Estrutura Final do Projeto
- Container principal com:
  - Menu superior
  - Seção de destaque
  - Seção de notícias
  - Router outlet (para futuras rotas)
  - Listagem de clientes
---

*Este resumo documenta as principais atividades realizadas na Aula 2, focando na criação de componentes com funcionalidades avançadas usando NgBootstrap e Bootstrap Icons.*
