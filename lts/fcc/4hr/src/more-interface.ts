// interface TakePhoto {{{{ interface implement
//     cameramode: string;
//     filter: string;
//     burst: number;
// }

// interface Story {
//     createStory(): void;
// }

// // interface can only be implemented by any class
// class Instagram implements TakePhoto { 
//     constructor(
//         public cameramode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }

// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameramode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){}

//     createStory(): void {
//         console.log("Story was created");
//     }
// }

// const youtubeDanzor = new Youtube("landscape", "beards", 83, "#lifestyle")
// youtubeDanzor.createStory()
// const instagramDinda = new Youtube("potrait", "beautyPlus", 83, "#facial")
// console.log({ youtubeDanzor, instagramDinda })}}}
// property cameramode has no initializer (we need to put inside the constructor first){{{
// class TakePhoto { 
//     public cameraMode: string
// }}}}

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
    // abstract getSophia(): void;
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string,
    ){ // parameter declaration expected
        super(cameraMode, filter)
    }
}

// const joko = new TakePhoto("potrait", "smile")
// console.log({ joko })
