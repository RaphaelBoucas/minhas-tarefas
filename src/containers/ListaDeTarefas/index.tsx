import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver aula',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar conta',
    descricao: 'Baixar fatura',
    prioridade: 'importante',
    status: 'concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    {tarefas.map((t) => (
      <li key={t.titulo}>
        <Tarefa
          descricao={t.descricao}
          titulo={t.titulo}
          status={t.status}
          prioridade={t.prioridade}
        />
      </li>
    ))}
  </Container>
)

export default ListaDeTarefas
