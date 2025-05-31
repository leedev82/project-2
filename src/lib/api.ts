import axios from 'axios';

const API_BASE_URL = 'https://incube.zenvinnovations.com/combinedapiservice';

export interface MatchStudentsResponse {
  // Add the response type based on the actual API response
  [key: string]: any;
}

export const matchStudents = async (skills: string[]): Promise<MatchStudentsResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/match-students`, {
      skills,
    });
    return response.data;
  } catch (error) {
    console.error('Error matching students:', error);
    throw error;
  }
}; 