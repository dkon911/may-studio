import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;

const BASE_URL = 'https://www.googleapis.com/drive/v3/files';

/**
 * Fetches a list of image files from a specific Google Drive folder.
 * The folder must be shared publicly ("Anyone with the link").
 *
 * @returns {Promise<Array<{id: string, name: string, url: string}>>} A promise that resolves to an array of image objects.
 */
export const getImagesFromDrive = async () => {
  if (!API_KEY || !FOLDER_ID) {
    console.error('Google Drive API Key or Folder ID is not defined in .env file.');
    return [];
  }

  // Updated fields to include thumbnailLink for a reliable image source
  const url = `${BASE_URL}?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,thumbnailLink)`;

  try {
    const response = await axios.get(url);
    const files = response.data.files || [];

    // Transform the file data to a more usable format
    const imageList = files.map(file => {
      // The thumbnailLink is a reliable source for the image.
      // We can remove the size parameter (=s220) to get a larger version.
      const imageUrl = file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+$/, "=s1600") : '';
      return {
        id: file.id,
        name: file.name,
        url: imageUrl,
      };
    });

    return imageList;
  } catch (error) {
    console.error('Error fetching images from Google Drive:', error.response ? error.response.data : error.message);
    // Handle specific API errors, e.g., API key invalid, folder not found, etc.
    if (error.response && error.response.data.error) {
      const apiError = error.response.data.error;
      console.error(`API Error (${apiError.code}): ${apiError.message}`);
      // You could show a specific message to the user here
    }
    return [];
  }
};
