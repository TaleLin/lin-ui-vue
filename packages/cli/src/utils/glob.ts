import glob from 'glob'

export default function(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, (error, files) => {
      if (error) {
        reject(error)
      } else {
        resolve(files)
      }
    })
  })
}
