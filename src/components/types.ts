export class Greeting {
    _id;
    greeting;
    user;
    image;
    likes;

    constructor(_id: string, greeting: string, user: string, image: string, likes: number) {
        this._id = _id;
        this.greeting = greeting;
        this.user = user;
        this.image = image;
        this.likes = likes;
    }
}
