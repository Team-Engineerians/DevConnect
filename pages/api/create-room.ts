import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type CreateRoomRequest = {
  roomName: string;
};

type CreateRoomResponse = {
  message: string;
  data?: {
    roomId: string;
    roomName: string;
    createdAt: string;
    roomUrl: string;
  };
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateRoomResponse>
): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed.' });
  }

  const { roomName }: CreateRoomRequest = req.body;

  if (!roomName) {
    return res
      .status(400)
      .json({ message: 'Room name is required.' });
  }

  try {
    const API_URL = 'https://api.huddle01.com/api/v1/rooms';
    const API_KEY = process.env.HUDDLE_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({
        message: 'Huddle01 API key is not configured.',
      });
    }

    const response = await axios.post(
      API_URL,
      { title: roomName },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
      }
    );

    const { data } = response;

    return res.status(200).json({
      message: 'Room created successfully.',
      data: {
        roomId: data.data.roomId,
        roomName: data.data.title,
        createdAt: data.data.createdAt,
        roomUrl: data.data.roomUrl,
      },
    });
  } catch (error: any) {
    console.error('Error creating room:', error.message);

    return res.status(500).json({
      message: 'An error occurred while creating the room.',
      error: error.response?.data || error.message,
    });
  }
}
