// use types and When we use It
// you can use whenever you  don't wahtn a particular value to cause typechecking errors;

// ANY

// let hero; // It will set to any, no complain for the return value
let hero: string; // wll complain if return a different type

function getHero() {
    return "foo"
}

hero = getHero();
