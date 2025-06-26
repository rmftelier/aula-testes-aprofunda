//Estamos fazendo os testes no estilo TDD, então não criamos ainda o arquivo
//que estamos testando como uma forma
import { CreateUser } from "../../core/usecases/CreateUser";


describe('Criar usuário', () => {
  it('Deve criar um novo usuário com ID gerado', () => {

    const createUser = new CreateUser();

    const user = createUser.execute({
      name: "Dandara da Silva",
      login: "dandara1995",
      email: "dandara@example.com",
      password: "123456"
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe("Dandara da Silva");
    expect(user.email).toBe("dandara@example.com");
  });
})