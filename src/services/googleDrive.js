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

  // We only need the file ID and name to construct the direct access URL.
  const url = `${BASE_URL}?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name)`;

  try {
    const response = await axios.get(url);
    const files = response.data.files || [];

    // Transform the file data to a more usable format
    const imageList = files.map(file => {
      // Use a direct link to the image content instead of thumbnailLink for reliability
      const imageUrl = `https://lh3.googleusercontent.com/d/${file.id}=w1600`;

      // Extract category from filename (e.g., "Category_ImageName.jpg")
      const fileNameParts = file.name.split('_');
      const category = fileNameParts.length > 1 ? fileNameParts[0] : 'General';
      
      // Clean up the display name
      const displayName = (fileNameParts.length > 1 
        ? fileNameParts.slice(1).join('_') 
        : file.name)
        .replace(/\.(jpg|jpeg|png|gif)$/i, '');

      return {
        id: file.id,
        name: displayName,
        url: imageUrl,
        category: category,
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
