# Aula 4 - Resumo

## 1. Implementação da Calculadora Funcional

### 1.1. Estrutura do Componente Calculadora
- Desenvolvida calculadora completa com operações matemáticas básicas
- **Propriedades implementadas:**
  ```typescript
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  ```

### 1.2. Métodos de Cálculo
- **Operações implementadas:**
  ```typescript
  somar(): void { this.resultado = this.num1 + this.num2; }
  subtrair(): void { this.resultado = this.num1 - this.num2; }
  multiplicar(): void { this.resultado = this.num1 * this.num2; }
  dividir(): void { this.resultado = this.num1 / this.num2; }
  ```

### 1.3. Interface de Usuário
- Formulário com Bootstrap para entrada de dados
- Campos de input para os dois números
- Botões para cada operação matemática
- Campo readonly para exibição do resultado

## 2. Data Binding - Conceitos Fundamentais

### 2.1. Importação do FormsModule
- Adicionado `FormsModule` ao `AppModule` para suporte ao Two-Way Data Binding
- Necessário para uso de `[(ngModel)]`

### 2.2. Two-Way Data Binding
- Implementado `[(ngModel)]` nos campos de entrada:
  ```html
  <input type="number" [(ngModel)]="num1">
  <input type="number" [(ngModel)]="num2">
  ```
- Sincronização automática entre template e componente

### 2.3. Property Binding
- Aplicado no campo de resultado:
  ```html
  <input [ngModel]="resultado" readonly>
  ```

### 2.4. Event Binding
- Eventos de click nos botões:
  ```html
  <button (click)="somar()">Somar</button>
  <button (click)="subtrair()">Subtrair</button>
  <button (click)="multiplicar()">Multiplicar</button>
  <button (click)="dividir()">Dividir</button>
  ```

## 3. Componente NoticiaDetalhe - Exemplos Práticos de Data Binding

### 3.1. Interpolação (String Interpolation)
- Exibição de dados do componente no template:
  ```html
  <p>Id: {{id}}</p>
  <p>Você digitou: {{texto}}</p>
  ```

### 3.2. Property Binding
- Binding de propriedades de elementos HTML:
  ```html
  <img [src]="urlImagem">
  ```

### 3.3. Event Binding
- Manipulação de eventos:
  ```html
  <button (click)="exibirMensagem()">Mensagem</button>
  ```

### 3.4. Two-Way Data Binding
- Exemplo prático de sincronização:
  ```html
  <input [(ngModel)]="texto" />
  <p>Você digitou: {{texto}}</p>
  ```

## 4. Roteamento Avançado

### 4.1. Rota com Parâmetros
- Implementada rota com parâmetro dinâmico:
  ```typescript
  { path: 'noticia-detalhe/:id', component: NoticiaDetalhe }
  ```

### 4.2. Captura de Parâmetros da Rota
- Uso do `ActivatedRoute` para obter parâmetros:
  ```typescript
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }
  ```

### 4.3. Implementação do OnInit
- Interface `OnInit` para execução de código na inicialização
- Método `ngOnInit()` executado automaticamente

## 5. Rotas Aninhadas (Nested Routes)

### 5.1. Estrutura Pai-Filho
- Criado componente `TelaPai` como container
- Componentes filhos: `TelaFilho1` e `TelaFilho2`

### 5.2. Configuração de Rotas Filhas
```typescript
{
  path: 'tela-pai', 
  component: TelaPai, 
  children: [
    { path: 'tela-filho1', component: TelaFilho1 },
    { path: 'tela-filho2', component: TelaFilho2 }
  ]
}
```

### 5.3. Router Outlet Aninhado
- Template do TelaPai com navegação lateral:
  ```html
  <div class="col-md-3">
    <ul>
      <li><a routerLink="tela-filho1">Tela Filho 1</a></li>
      <li><a routerLink="tela-filho2">Tela Filho 2</a></li>
    </ul>
  </div>
  <div class="col-md-9">
    <router-outlet></router-outlet>
  </div>
  ```

## 6. Atualizações na Navegação
- Adicionado novo item no menu principal para "Tela Pai"
- Links funcionais para navegação entre rotas aninhadas

## 7. Novos Componentes Criados
- `NoticiaDetalhe` - Demonstração de data binding
- `TelaPai` - Container para rotas aninhadas
- `TelaFilho1` - Componente filho 1
- `TelaFilho2` - Componente filho 2

## 8. Conceitos Angular Abordados

### 8.1. Lifecycle Hooks
- `OnInit` interface e método `ngOnInit()`

### 8.2. Dependency Injection
- Injeção do `ActivatedRoute` via constructor

### 8.3. Data Binding (4 tipos)
- **Interpolação:** `{{propriedade}}`
- **Property Binding:** `[propriedade]="valor"`
- **Event Binding:** `(evento)="metodo()"`
- **Two-Way Binding:** `[(ngModel)]="propriedade"`

---

*Este resumo documenta a implementação prática dos conceitos fundamentais de Data Binding no Angular, criação de calculadora funcional e introdução a roteamento avançado com parâmetros e rotas aninhadas.*
