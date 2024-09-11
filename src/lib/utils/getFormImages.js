import cloudinary from '@/lib/utils/cloudinary';
import DataURIParser from 'datauri/parser';
import path from 'path';

export default async function getFormImages(formData) {
  const parser = new DataURIParser();

  try {
    async function uploadImage(image) {
      return cloudinary.uploader
        .upload(
          parser.format(
            path.extname(image.name).toString(),
            await image.arrayBuffer(image)
          ).content,
          {
            folder: 'portfolio',
          }
        )
        .then((result) => result);
    }
    return {
      uploadedImage: await uploadImage(image),
    };
  } catch (error) {
    throw new Error('Please upload all the images!');
  }
}
