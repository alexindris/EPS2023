export default function (plop) {
  // plop generator code
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/component/Component.spec.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/component/types.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
      {
        type: 'input',
        name: 'route',
        message: 'What is your route name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{kebabCase route}}/route.tsx',
        templateFile: 'plop-templates/page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/app/{{kebabCase route}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'plop-templates/page/Page.spec.tsx.hbs',
      },
    ],
  });
}
