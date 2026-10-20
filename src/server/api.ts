const BASE = "http://localhost:3001";

export const getChat = async () => {
  const res = await fetch(`${BASE}/chat`);
  return res.json();
};

export const addChat = async (title: string) => {
  await fetch(`${BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
};

export const updateChat = async (id: number, title: string) => {
  await fetch(`${BASE}/chat/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
};

export const deleteChat = async (id: number) => {
  await fetch(`${BASE}/chat/${id}`, {
    method: "DELETE",
  });
};