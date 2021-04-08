export class Post {
  constructor(obj = {}) {
    this.title = obj.title || ''
    this.preview = obj.preview || ''
    this.description = obj.description || ''
    this.id = obj.id ||Date.now()
  }
}

