import axiosInstance from "../axiosConfig";


class BadgesService {
    async getAllBadges ()  {
    try {

      const response = await axiosInstance.get('/badges');

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os emblemas:', error);
      throw error;
    }
  };
  
  
  async getUserBadges  (userId: string)  {
    try {
      const response = await axiosInstance.get(`/badges/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar os emblemas do usuário com ID ${userId}:`, error);
      throw error;
    }
  };
  
  async addRandomBadges (userId: string) {
    try {
      const response = await axiosInstance.post(`/badges/assign-random/${userId}`);

      return response.data;
    } catch (error) {
      console.error(`Erro ao adicionar emblema aleatório ao usuário:`, error);
      throw error;
    }
  }
};

export default new BadgesService();