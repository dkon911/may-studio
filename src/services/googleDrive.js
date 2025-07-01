import { GoogleAuth } from 'google-auth-library';

class GoogleDriveService {
  constructor() {
    this.auth = null;
    this.drive = null;
  }

  async initialize() {
    try {
      // Khởi tạo Google Auth với service account
      this.auth = new GoogleAuth({
        keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      });

      const { google } = await import('googleapis');
      this.drive = google.drive({ version: 'v3', auth: this.auth });
    } catch (error) {
      console.error('Lỗi khởi tạo Google Drive:', error);
    }
  }

  async getImageUrls(folderId) {
    try {
      if (!this.drive) await this.initialize();

      const response = await this.drive.files.list({
        q: `'${folderId}' in parents and mimeType contains 'image/'`,
        fields: 'files(id, name, webViewLink, webContentLink)',
      });

      return response.data.files.map(file => ({
        id: file.id,
        name: file.name,
        url: `https://drive.google.com/uc?id=${file.id}`,
        viewLink: file.webViewLink
      }));
    } catch (error) {
      console.error('Lỗi lấy danh sách ảnh từ Google Drive:', error);
      return [];
    }
  }

  // Tạo URL public cho ảnh
  getPublicImageUrl(fileId) {
    return `https://drive.google.com/uc?id=${fileId}`;
  }
}

export default new GoogleDriveService();
