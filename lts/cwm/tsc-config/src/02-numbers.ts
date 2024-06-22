let sales: number = 123_456_789; // separate will _ for more readable 
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

// you can not giving the type of any variables since typescript autodetect the type, but you loose the meaning of Using
// typescript, since It avoid you to reassigned into another type

function render(document: any) {
    console.log(document);
};
