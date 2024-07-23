// {{{ Variable
const logo = document.querySelector("img");
const onClick = () => console.log("Click Event");
const onDoubleClick = () => console.log("Double Click Evens");// }}}
// {{{ messing around;
// const onDoubleClick = () => {
//     if (document.body.style.backgroundColor !== "purple") {
//         document.body.style.backgroundColor = "purple";
//         document.body.style.color = "white";;
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     };
// };// }}}
// {{{ Mouse Event
const onRightClick = () => console.log("right click event");
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
const onMouseWheel = () => console.log("mouse wheel event");
const onMouseOver = () => console.log("mouse over event");
const onMouseOut = () => console.log("mouse out event");
const onDragStart = () => console.log("drag start event"); // click and hold move It
const onDrag = () => console.log("drag event"); // click and hold move It, even though not moving still count increase the number
const onDragEnd = () => console.log("drag end event"); // after you drag When finish this will happen
// Event Listener;
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
logo.addEventListener("mousedown", onMouseDown);
logo.addEventListener("mouseup", onMouseUp);
logo.addEventListener("wheel", onMouseWheel);
logo.addEventListener("mouseover", onMouseOver);
logo.addEventListener("dragstart", onDragStart);
logo.addEventListener("drag", onDrag);
logo.addEventListener("dragend", onDragEnd); // }}}
