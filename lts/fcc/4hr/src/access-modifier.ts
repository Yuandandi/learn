class Pembeli {
    private _courseCount = 1;

    readonly city: string = "danzor"
    constructor(
        public email: string,
        public name: string,
    ){}

    private deleteToken(){
        console.log("Token deleted")
    }
    
    get getAppleEmail(): string{
        return `apple ${this.email}`
    }
    
    get courseCount(): number {
        return this._courseCount
    }
}

const dika = new Pembeli("danzor@foo.com", "danzor");
console.log(danzor);
