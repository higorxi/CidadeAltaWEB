import axiosInstance from "../axiosConfig";

export const updateProfile = async (profileData: ProfileData, userId: string): Promise<boolean> => {
  try {

    console.log("enviado", profileData)

    const response = await axiosInstance.put(`/users/${userId}`, profileData); 

    console.log('Dados do perfil enviados:', response.data);

    if (response.status === 200) {
      const userDataString = localStorage.getItem('user');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        userData.name = response.data.user.name;
        userData.email = response.data.user.email;
        userData.profileImageUrl = response.data.user.profileImageUrl
        localStorage.setItem('user', JSON.stringify(userData));
      }
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Erro ao enviar dados do perfil:', error);
    return false; 
  }
};
