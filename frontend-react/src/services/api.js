const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
};