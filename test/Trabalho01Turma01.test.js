const GerenciadorDeTarefas = require('../src/Trabalho01Turma01');

describe('Testes unitários - Classe Trabalho01Turma01', () => {
    let gerenciador;

    beforeEach(() => {
        gerenciador = new GerenciadorDeTarefas();
    });


    test('Deve adicionar uma tarefa válida', () => {
        const tarefa = {
            id: 1, descricao: 'Estudar para aula de Automação de testes', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);

        expect(gerenciador.contarTarefas()).toBe(1);
        expect(gerenciador.buscarTarefaPorId(1)).toEqual(tarefa);
    });


    test('Não deve adicionar tarefa com descrição inválida', () => {
        const tarefa = {
            id: 2, descricao: 'JS', concluida: false
        };

        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });


    test('Deve remover uma tarefa existente', () => {
        const tarefa = {
            id: 3, descricao: 'Estudar para o trabalho de automação de testes', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTarefa(3);

        expect(gerenciador.buscarTarefaPorId(3)).toBeUndefined();
    });


    test('Deve buscar uma tarefa pelo ID', () => {
        const tarefa = {
            id: 4, descricao: 'Ir para a SATC', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);

        const tarefaEncontrada = gerenciador.buscarTarefaPorId(4);
        expect(tarefaEncontrada).toEqual(tarefa);
    });


    test('Deve listar apenas tarefas pendentes', () => {
        const tarefa1 = {
            id: 5, descricao: 'Estudar os testes unitários em jest', concluida: false
        };

        const tarefa2 = {
            id: 6, descricao: 'Fazer exercícios físicos', concluida: true
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefasPendentes = gerenciador.listarTarefasPendentes();
        expect(tarefasPendentes).toEqual([tarefa1]);
    });


    test('Deve marcar uma tarefa como concluída', () => {
        const tarefa = {
            id: 7, descricao: 'Estudar Node.js', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.marcarTarefaComoConcluida(7);

        expect(gerenciador.buscarTarefaPorId(7).concluida).toBe(true);
    });


    test('Deve atualizar uma tarefa', () => {
        const tarefa = {
            id: 8, descricao: 'Estudar testes de componentes', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.atualizarTarefa(8, { descricao: "Estudar testes de componentes" });

        expect(gerenciador.buscarTarefaPorId(8).descricao).toBe("Estudar testes de componentes");
    });


    test('Deve contar o número de tarefas', () => {
        const tarefa1 = {
            id: 9, descricao: 'Tarefa 1', concluida: false
        };

        const tarefa2 = {
            id: 10, descricao: 'Tarefa 2', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        expect(gerenciador.contarTarefas()).toBe(2);
    });


    test('Deve buscar tarefas por descrição', () => {
        const tarefa1 = {
            id: 11, descricao: 'Estudar para a prova', concluida: false
        };

        const tarefa2 = {
            id: 12, descricao: 'Estudar programação', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const resultadoBusca = gerenciador.buscarTarefaPorDescricao("Estudar para a prova");
        expect(resultadoBusca).toEqual([tarefa1]);
    });


    test('Deve listar apenas tarefas concluídas', () => {
        const tarefa1 = {
            id: 13, descricao: 'Fazer exercícios de UX Design', concluida: true
        };

        const tarefa2 = {
            id: 14, descricao: 'Estudar JavaScript', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefasConcluidas = gerenciador.listarTarefasConcluidas();
        expect(tarefasConcluidas).toEqual([tarefa1]);
    });


    test('Não deve adicionar tarefa com descrição vazia', () => {
        const tarefa = { id: 15, descricao: '', concluida: false };

        expect(() => gerenciador.adicionarTarefa(tarefa)).toThrow('Erro ao cadastrar tarefa');
    });


    test('Não deve atualizar tarefa inexistente', () => {
        gerenciador.atualizarTarefa(999, { descricao: 'Tarefa não existente' });
        expect(gerenciador.buscarTarefaPorId(999)).toBeUndefined();
    });


    test('Não deve remover tarefa inexistente', () => {
        gerenciador.removerTarefa(999);
        expect(gerenciador.contarTarefas()).toBe(0);
    });


    test('Deve adicionar uma tag a uma tarefa', () => {
        const tarefa = {
            id: 16, descricao: 'Estudar Jest', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.adicionarTagATarefa(16, 'estudo');

        expect(gerenciador.buscarTarefaPorId(16).tags).toContain('estudo');
    });


    test('Deve atualizar a prioridade de uma tarefa', () => {
        const tarefa = {
            id: 28, descricao: 'Ler livro de testes', concluida: false, prioridade: 1
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.atualizarPrioridade(28, 3);

        expect(gerenciador.buscarTarefaPorId(28).prioridade).toBe(3);
    });


    test('Deve listar as tarefas por prioridade', () => {
        const tarefa1 = {
            id: 29, descricao: 'Aprender Jest', concluida: false, prioridade: 2
        };

        const tarefa2 = {
            id: 30, descricao: 'Estudar Node.js', concluida: false, prioridade: 1
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        const tarefasPrioridade2 = gerenciador.listarTarefasPorPrioridade(2);
        expect(tarefasPrioridade2).toEqual([tarefa1]);
    });


    test('Deve remover todas as tarefas concluídas', () => {
        const tarefaConcluida = {
            id: 19, descricao: 'Concluir projeto', concluida: true
        };

        const tarefaPendente = {
            id: 20, descricao: 'Estudar para exame', concluida: false
        };

        gerenciador.adicionarTarefa(tarefaConcluida);
        gerenciador.adicionarTarefa(tarefaPendente);

        gerenciador.removerTarefasConcluidas();

        expect(gerenciador.contarTarefas()).toBe(1);
        expect(gerenciador.buscarTarefaPorId(20)).toEqual(tarefaPendente);
    });


    test('Deve marcar todas as tarefas como concluídas', () => {
        const tarefa1 = {
            id: 21, descricao: 'Ler livro', concluida: false
        };

        const tarefa2 = {
            id: 22, descricao: 'Escrever código', concluida: false
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        gerenciador.marcarTodasComoConcluidas();

        const tarefas = gerenciador.listarTarefas();

        tarefas.forEach(tarefa => {
            expect(tarefa.concluida).toBe(true);
        });
    });


    test('Deve listar tarefas por data', () => {
        const tarefa = {
            id: 18, descricao: 'Revisar código', concluida: false, data: '2024-09-02'
        };

        gerenciador.adicionarTarefa(tarefa);

        const tarefasPorData = gerenciador.buscarTarefasPorData('2024-09-02');
        expect(tarefasPorData).toEqual([tarefa]);
    });


    test('Deve remover uma tag de uma tarefa', () => {
        const tarefa = { id: 17, descricao: 'Estudar Node', concluida: false, tags: ['backend'] };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.removerTagDaTarefa(17, 'backend');

        expect(gerenciador.buscarTarefaPorId(17).tags).not.toContain('backend');
    });


    test('Deve reabrir uma tarefa concluída', () => {
        const tarefa = {
            id: 23, descricao: 'Estudar React', concluida: true
        };

        gerenciador.adicionarTarefa(tarefa);
        gerenciador.reabrirTarefa(23);

        expect(gerenciador.buscarTarefaPorId(23).concluida).toBe(false);
    });


    test('Deve ordenar as tarefas por data', () => {
        const tarefa1 = {
            id: 24, descricao: 'Estudar para prova', concluida: false, data: '2024-09-01'
        };

        const tarefa2 = {
            id: 25, descricao: 'Fazer exercício', concluida: false, data: '2024-08-30'
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        gerenciador.ordenarTarefasPorData();

        const tarefasOrdenadas = gerenciador.listarTarefas();

        expect(tarefasOrdenadas[0].id).toBe(25);
        expect(tarefasOrdenadas[1].id).toBe(24);
    });


    test('Deve ordenar as tarefas por prioridade', () => {
        const tarefa1 = {
            id: 26, descricao: 'Comprar alimentos', concluida: false, prioridade: 2
        };

        const tarefa2 = {
            id: 27, descricao: 'Estudar Node.js', concluida: false, prioridade: 1
        };

        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);

        gerenciador.ordenarTarefasPorPrioridade();

        const tarefasOrdenadas = gerenciador.listarTarefas();

        expect(tarefasOrdenadas[0].id).toBe(27);
        expect(tarefasOrdenadas[1].id).toBe(26);
    });


    afterEach(() => {
        console.log = jest.fn();
    });
});
