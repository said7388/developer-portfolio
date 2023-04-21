import shopFake from '../assets/svg/projects/shop-fake.png'
import gerenciarLink from "../assets/svg/projects/gerenciar-link.png"
export const projectsData = [
    {
        id: 1,
        projectName: 'Fake Shopping Cart',
        projectDesc: 'Carrinho de compras',
        tags: ['React', 'JavaScript', 'MUI', 'Requisição API', 'Redux Toolkit', "React-toastify"],
        code: 'https://github.com/paulinha-19/fake-shopping-cart',
        demo: 'https://fake-store-on.netlify.app/',
        image: shopFake
    },
    {
        id: 2,
        projectName: 'Cadastro de pacientes',
        projectDesc: 'Solução web para consultar e cadastrar pacientes.',
        tags: ['React', 'MUI', 'React hooks', 'JavaScript'],
        code: 'https://github.com/paulinha-19/crud-pacientes',
        demo: '',
        image: 'https://paulinha-19.github.io/portfolio/assets/tela%20projetos/acme.png'
    },
    {
        id: 3,
        projectName: 'Sistema de livros',
        projectDesc: 'Solução para empréstimo e doação de livros',
        tags: ['React', 'MUI', 'Azure AD', 'Yup', 'TypeScript'],
        code: '',
        demo: '',
        image: 'https://paulinha-19.github.io/portfolio/assets/tela%20projetos/ava_resized.png'
    },
    {
        id: 4,
        projectName: 'Gerenciador de links',
        projectDesc: 'Sistema web para salvar, editar, listar e deletar links de artigos',
        tags: ['React', 'React-query', 'Node', 'Express', 'ORM Sequelize', 'MySql', 'WebCrawler'],
        code: 'https://github.com/paulinha-19/api-link',
        demo: '',
        image: gerenciarLink
    }
]


