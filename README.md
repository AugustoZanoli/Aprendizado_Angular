# CursoAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Aprendizado

Esse repositório visa demonstrar e registrar meu apredizado com o framework Angular. Nesse repositório irei guardar informações importantes sobre o framework, além de deixar claro como as coisas funcionam para futuras pesquisas e ajudar quem está começando agora.

## Criação do projeto

Para criarmos nosso projeto Angular, primeiro devemos abri a pasta que desejamos, e no terminal rodamos o seguinte código:
```
ng new <nome_do_projeto>
```

Após isso, no nosso diretório será adicionado as pastas e dependencias necessárias no projeto. Para que possamos de fato visualizar o código rodando, basta rodar:

```
ng serve
```

## Componentização

Componentização é uma ferramenta do Angular que pode ser resumida em criar componentes para reutiliza-los, ou seja, poupar trabalho e garantir um padrão.

Um exemplo disso pode ser uma navbar, onde ao invés de toda página você ter que colocar o código completo, basta você criar um componente "navBar", programar ela conforme seu gosto, e após isso apenas adicionar seu componente ao código principal ou outras páginas.

Como criar um componente?
```
ng generate component <nome_do_componente>
```

Vale ressaltar que por questões de organização e boas práticas, é sempre bom ter um diretório próprio para os componentes.

```
ng generate component components/<nome_do_componente>
```

## Interpolação

Interpolação é um exemplo claro de quando queremos imprimir valores de váriaveis na tela, sem precisar definir valores diretos nas tags.

**Exemplo:**

typescript:

```
export class FirstComponentComponent {
  name: string = 'Augusto';
  
  constructor() {}

  ngOnInit(): void{
    
  }
}
```

html:

```
<div>
    <h2>Utilizando interpolação</h2>
    <p>Nome: {{name}}</p>
</div>
```

