import axios from 'axios';
import CadastroDTO from './SingupDTO';
import LoginDTO from './LoginDTO';

class AuthService {
  private baseURL: string;

  constructor() {
    this.baseURL = 'http://localhost:3000'; 
  }

  async cadastrar(data: CadastroDTO): Promise<void> {
    try {
      await axios.post(`${this.baseURL}/cadastro`, data);
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário');
    }
  }

  async logar(data: LoginDTO): Promise<void> {
    try {
      const response = await axios.post(`${this.baseURL}/login`, data);
      const { acessToken, user } = response.data; 
      localStorage.setItem('acessToken', acessToken); 
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      throw new Error('Credenciais inválidas');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}

export default new AuthService();
