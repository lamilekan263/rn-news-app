import { BookmarkType } from '.';
import { deviceStorage } from '../../../../services/deviceStorage';

const baserUrl = 'https://news-api-ixxq.vercel.app/api/v1';

async function getToken() {
  return await deviceStorage.getItem('token');
}

export const fetchBookmarksRequest = async () => {
  const token = await getToken();
  const response = await fetch(`${baserUrl}/bookmark`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();

  return {
    response,
    json,
  };
};

export const addNewBookMarkRequest = async (body: BookmarkType) => {
  const token = await getToken();
  const response = await fetch(`${baserUrl}/bookmark`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  return {
    response,
    json,
  };
};

export const deletBookmarkRequest = async (id: string) => {
  const token = await getToken();
  const response = await fetch(`${baserUrl}/bookmark/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return {
    json,
    response,
  };
};
