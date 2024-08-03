// Utility Type
// {{{ Partial 

// type assignment;
interface Assignment {
    studentId: string, 
    title: string,
    grade: number,
    verified?: boolean,
}

// partial utility type to pass an Object that just have 1 property of assignment;
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate } // spread operator, this allowed us to not passing all of the props, but declare It They are the props of assignment
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 })); // { studentId: 'compsci123', title: 'Final Project', grade: 95 }
// console.log(updateAssignment(assign1, { title: "getto"})) // { studentId: 'compsci123', title: 'getto', grade: 0 }

// }}};

// {{{ Required and Readonly

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc
    return assign
};

// read-only property {spread operator, create new Object 'verified'};
const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// assignVerified.grade = 88 // E: cannot assign to "grade" because It is  a read-only proprty
console.log(assignVerified) 
//{
// studentId: 'compsci123',
// title: 'Final Project',
// grade: 95,
// verified: true
// }

recordAssignment({...assignGraded, verified: true});

// // }}};

// {{{ Record

const hexCoorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U",
}

interface Grades {
    assign1: number,
    assign2: number,
};

// Students as a key, and Grades as a value of an Object
const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 80 },
    Kelly: { assign1: 76, assign2: 70 },
}

console.log(gradeData);

// // }}}

// {{{ Pick and Omit

// Pick ; Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// in the Assignment interface pick only "studentId" and "grade";
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
};

console.log(score); // { studentId: 'k123', grade: 85 }

// Omit ; Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.
// from the "Assignment" interface omit / mengecualikan "grade" & "verified" type
type AssignmentPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignmentPreview = {
    studentId: "123",
    title: "Final Project",
};

console.log(preview); // { studentId: '123', title: 'Final Project' }

// // }}};

// {{{ Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// }}};

// {{{ NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined ;

type NamesOnly = NonNullable<AllPossibleGrades>;
// NamesOnly refers onto "Dave" and "John" only;

// }}}; // Object

// {{{ ReturnType

// type NewAssign = { title: string, points: number };

const createNewAssign = ( title: string, points: number ) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>;

let tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign); // { title: 'Utility Types', points: 100 }
console.log(typeof tsAssign) // Object

// }}};

// {{{ Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArags: AssignParams = ["Generics", 100];
console.log(assignArags) // ["Generics", 100] ; Object

const tsAssign2: NewAssign = createNewAssign(...assignArags);
console.log(tsAssign2)

// }}}

// {{{ Awaited ; helsp us with the return type of a promise

// user interface
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

// 'fetchUsers' function
// return type 'Promise' an array of "User"
// fetch data from 'jsonplaceholder'
// use "thenable" to return the data
// or "catch" an error, if error log the error message
const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/users" // links you want to fetch
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err)
    })
return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));

// }}}
