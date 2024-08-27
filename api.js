export const getCommentsByEvent = async (eventId) => {
  const response = await axios.get(`${API_URL}/comments/${eventId}`);
  return response.data;
};

export const addComment = async (commentData) => {
  const response = await axios.post(`${API_URL}/comments`, commentData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};
