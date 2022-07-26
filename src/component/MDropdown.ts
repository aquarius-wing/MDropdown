import {MDropdownState} from "./MDropdownState";


export class MDropdown{
    _dropdownState: MDropdownState


    constructor(dropdownState: MDropdownState) {
        this._dropdownState = dropdownState;
        console.log('Hello')
    }
}
