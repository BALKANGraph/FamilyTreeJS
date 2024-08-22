
declare class FamilyTree {
    constructor(element: HTMLElement | string, options?: FamilyTree.Options);
}



declare module FamilyTree {
    interface Options {
        mode?: string;
        focusTemplate?: string;
        primaryTemplate?: string;
        secondaryTemplate?: string;
    }
}export default FamilyTree