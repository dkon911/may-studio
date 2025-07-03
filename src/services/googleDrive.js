import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;

const BASE_URL = 'https://www.googleapis.com/drive/v3/files';

// Simple in-memory cache to store the full list of images
let allImagesCache = null;

/**
 * Fetches ALL image files from a specific Google Drive folder by automatically 
 * handling pagination behind the scenes.
 * The folder must be shared publicly ("Anyone with the link").
 *
 * @returns {Promise<Array<{id: string, name: string, url: string, category: string}>>} 
 *          A promise that resolves to a single array containing all image objects.
 */
export const getAllImagesFromDrive = async () => {
  // If we have cached data, return it immediately to avoid re-fetching
  if (allImagesCache) {
    return allImagesCache;
  }

  if (!API_KEY || !FOLDER_ID) {
    console.error('Google Drive API Key or Folder ID is not defined in .env file.');
    return [];
  }

  let allFiles = [];
  let pageToken = null;

  try {
    do {
      const url = `${BASE_URL}?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name),nextPageToken&pageSize=100&orderBy=createdTime desc` + (pageToken ? `&pageToken=${pageToken}` : '');
      
      const response = await axios.get(url);
      const { files, nextPageToken } = response.data;

      if (files) {
        allFiles.push(...files);
      }

      pageToken = nextPageToken;

    } while (pageToken);

    const imageList = allFiles.map(file => {
      const imageUrl = `https://lh3.googleusercontent.com/d/${file.id}=w1600`;
      const fileNameParts = file.name.split('_');
      const category = fileNameParts.length > 1 ? fileNameParts[0] : 'General';
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

    // Cache the final list
    allImagesCache = imageList;
    return imageList;

  } catch (error) {
    console.error('Error fetching all images from Google Drive:', error.response ? error.response.data : error.message);
    if (error.response && error.response.data.error) {
      const apiError = error.response.data.error;
      console.error(`API Error (${apiError.code}): ${apiError.message}`);
    }
    return []; // Return empty array on error
  }
};
