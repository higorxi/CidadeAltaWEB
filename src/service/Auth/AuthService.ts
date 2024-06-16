import axios from 'axios';
import CadastroDTO from './SignupDTO';
import LoginDTO from './LoginDTO';

class AuthService {
  private baseURL: string;

  constructor() {
    this.baseURL = 'http://localhost:3000';
  }

  async cadastrar(data: CadastroDTO): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseURL}/users/create`, data);
      return response.status === 201;
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário');
    }
  }

  async logar(data: LoginDTO): Promise<{ accessToken: string; user: any } | null> {
    try {
      const response = await axios.post(`${this.baseURL}/auth/login`, data);
      const { accessToken, user } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      return { accessToken, user };
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
