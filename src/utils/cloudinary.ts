import { v2 as cloudinary } from 'cloudinary'
import { env } from '@/env'

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
})

export async function uploadImage(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'image',
          folder: 'portfolio',
        },
        (error, result) => {
          if (error) {
            reject(error)
          } else if (result?.secure_url) {
            resolve(result.secure_url)
          } else {
            reject(new Error('Upload failed: no URL returned'))
          }
        }
      )
      .end(buffer)
  })
}

export async function deleteImage(imageUrl: string): Promise<void> {
  // Extrair o public_id da URL
  const publicId = imageUrl.split('/').slice(-2).join('/').replace(/\.[^/.]+$/, '')
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

