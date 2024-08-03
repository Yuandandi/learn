// import 'ListItem' class from 'ListItem.ts' file
import ListItem from "./ListItem.ts"

// create "list" interface
interface List {
    list: ListItem[], // property list.list with ListItem[] interface
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

// export class 'FullList' that Using 'list' interface
export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return 

            const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)
    }

    // save the list to 'localStorage'
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
    };

}
