import cloudinary from '@/lib/utils/cloudinary';
import DataURIParser from 'datauri/parser';
import path from 'path';

export default async function getFormImages(formData) {
  // console.log(formData);

  // const bgImage = formData.get('bgImage');
  const image = formData.get('image');
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
            folder: 'pabst',
          }
        )
        .then((result) => result);
    }
    return {
      // uploadedBgImage: await uploadImage(bgImage),
      uploadedImage: await uploadImage(image),
    };
  } catch (error) {
    throw new Error('Please upload all the images!');
  }
}
