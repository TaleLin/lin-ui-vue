import del from 'del'

export const clean = (dirs: any) => {
  return function CleanDirectories() {
    return del(dirs)
  }
}
