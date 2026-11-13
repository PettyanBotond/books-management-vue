const API_URL = "/api/books";
const getBooks = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

const createBook = async () => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.json();
}

const deleteBook = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
};

export { getBooks, createBook };
