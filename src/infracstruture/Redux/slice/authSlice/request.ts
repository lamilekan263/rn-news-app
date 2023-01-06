import { deviceStorage } from '../../../../services/deviceStorage';

const baserUrl = 'https://news-api-ixxq.vercel.app/api/v1';

type loginDetailsType = {
  email: string;
  password: string;
};

async function getToken() {
  return await deviceStorage.getItem('token');
}

export async function login(loginDetails: loginDetailsType) {
  try {
    const response = await fetch(`${baserUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    });
    const json = await response.json();
    console.log(json);
    return {
      response,
      json,
    };
  } catch (error: Error) {
    console.log(error.message);
  }
}

export async function register(registerDetails) {
  const response = await fetch(`${baserUrl}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(registerDetails),
  });
  const json = await response.json();
  console.log(json);
  return {
    response,
    json,
  };
}

export async function fetcUserDetailsRequest() {
  const token = await getToken();
  const response = await fetch(`${baserUrl}/user/profile`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  console.log(json);
  return {
    response,
    json,
  };
}
