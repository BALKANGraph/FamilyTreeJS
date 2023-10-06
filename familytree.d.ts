

declare class FamilyTree extends FamilyTreeBase {
    nodes: { [key in any]: FamilyTree.node };
    isVisible: boolean;
    visibleNodeIds: Array<number | string>;

    /**
     * @param element HTML element or string selector for example '#tree'
     * @param options configuration options
     */
    constructor(element: HTMLElement | string, options?: FamilyTree.options);


    /**
     * Updates the node data
     * @param newData node data
     */
    update(newData: object): FamilyTree;

    /**
     * Removes specified node from nodes collection
     * @param id identification number of the node
     */
    remove(id: string | number): FamilyTree;
    /**
     * Adds new node to the nodes collection
     * @param data node data
     */
    add(data: object): FamilyTree;
    /**
     * Gets node data.
     * @param id identification number of the node
     */
    get(id: string | number): FamilyTree.node;
    /**
     * If specified node has assistant/s or partner/s as children will return false.
     * @param id identification number of the node
     */
    canRemove(id: string | number): boolean;
    /**
     * Expands specified nodes.
     * @param id  the id of the node that will not move during the animation 
     * @param ids node ids that will be expanded
     * @param callback called after the animation completes
     */
    expand(id: string | number, ids: Array<string | number>, callback?: () => void): void;
    /**
     * Collapses specified nodes.
     * @param id  the id of the node that will not move
     * @param ids node ids that will be collapsed
     * @param callback called after the animation completes
     */
    collapse(id: string | number, ids: Array<string | number>, callback?: () => void): void;
    /**
     * Expand/Collapse lists of nodes.
     * @param id the id of the node that will not move
     * @param expandIds expand all nodes with ids
     * @param collapseIds collpase all nodes with ids
     * @param callback called after the animation completes
     */
    expandCollapse(id: string | number, expandIds: Array<string | number>, collapseIds: Array<string | number>, callback?: () => void): void;
    /**
     * Changes roots order.
     * @param id id of a node that will not change is position, can be null
     * @param roots roots id array in the required order
     * @param callback called after the roots are changed and animation completes
     */
    changeRoots(id: string | number, roots: Array<string | number>, callback?: () => void): void;
    /**
     * Maximize the node. Without parameters maximize all nodes.
     * @param id the id of the node, if id is null, undefined ot empty string will maximize all nodes
     * @param horizontalCenter center horizontally 
     * @param verticalCenter center vertically 
     * @param callback called when the animation completes
     */
    maximize(id?: string | number, horizontalCenter?: boolean, verticalCenter?: boolean, callback?: () => void): void;
    /**
     * Minimize the node. Without parameters minimize all nodes.
     * @param id the id of the node, if id is null, undefined ot empty string will minimize all nodes
     * @param callback called when the animation completes
     */
    minimize(id?: string | number, callback?: () => void): void;
    /**
     * Load nodes data.
     * @param data node data array
     * @param callback function called after the load
     */
    load(data: Array<object>, callback?: () => void): FamilyTree;

    /**
     * Updates the node data, redraws the family and fires update event.
     * @param data node data
     * @param callback function called when the animation completes
     * @param fireEvent if it set to true the update event is called
     */
    updateNode(data: object, callback?: () => void, fireEvent?: boolean): void;

    /**
     * Loads nodes from xml.
     * @param xml Xml with node structure
     * @param callback function called after the load
     */
    loadXML(xml: string, callback?: () => void): FamilyTree;
    /**
     * Gets nodes as xml.
     */
    getXML(): string;
    /**
     * Draws the family.
     * @param action Action for example FamilyTree.action.centerNode, default is FamilyTree.action.update
     * @param actionParams parameters for the action
     * @param callback called when the animation completes
     */
    draw(action?: FamilyTree.action, actionParams?: any, callback?: () => void): void;
    /**
     * Gets the width of the container.
     */
    width(): number;
    /**
     * Gets the height of the container.
     */
    height(): number;
    /**
     * Gets the view box attribute of the svg html element.
     */
    getViewBox(): Array<number>;
    /**
     * Sets the view box attribute of the svg html element.
     * @param viewBox 
     */
    setViewBox(viewBox: Array<number>): void;
    /**
     * Gets the current scale of the family.
     * @param viewBox 
     */
    getScale(viewBox?: Array<number>): number;
    /**
     * Animates specified node with ripple animation - highlight the node.
     * @param id the id of the node
     * @param clientX x value of the ripple center in the node
     * @param clientY y value of the ripple center in the node
     */
    ripple(id: string | number, clientX?: number, clientY?: number): void;
    /**
     * Centers specified node on the screen.
     * @param nodeId the id of the node
     * @param options parentState: FamilyTree.COLLAPSE_PARENT_NEIGHBORS, childrenState: FamilyTree.COLLAPSE_SUB_CHILDRENS, rippleId: rippleId, vertical: false, horizontal: false
     * @param callback called when the animation completes
     */
    center(nodeId: string | number, options?: {
        parentState: any,
        childrenState: any,
        rippleId: string | number,
        vertical: boolean,
        horizontal: boolean
    } | null, callback?: () => void): void;
    /**
     * Fits the content to the visible area.
     * @param callback called when the animation completes
     */
    fit(callback?: () => void): void;
    /**
     * Toggles full screen mode.
     */
    toggleFullScreen(): void;
    /**
     * Gets the node as {@link FamilyTree.node} object.
     * @param nodeId 
     */
    getNode(nodeId: string | number): FamilyTree.node;
    /**
     * Sets layout.
     * @param layout layout type
     * @param lcn lyout config name for the specified sub tree
     */

    /**
     * Adds new node to the nodes collection, redraws the family and fires remove event
     * @param data node data
     * @param callback called at the end of animation
     * @param fireEvent indicates if the add event will be called or not
     */
    addNode(data: object, callback?: () => void, fireEvent?: boolean): void;  

    setLayout(layout: FamilyTree.layout | number, lcn?: string): void;
    /**
     * Sets orientation.
     * @param orientation  orientation type
     * @param lcn lyout config name for the specified sub tree
     */
    setOrientation(orientation: FamilyTree.orientation, lcn?: string): void;
    /**
     * Search in the family.
     * @param value search for value
     * @param searchInFields search in field names
     * @param retrieveFields retrive data for fields
     * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}            
     */
    search(value: string, searchInFields?: Array<string>, retrieveFields?: Array<string>): Array<{
        id: number | string,
        name: string,
        __score: number,
        __searchField: string,
        __searchMarks: string
    }>;
    /**
     * Gets collpased node ids of the specifeid node
     * @param node 
     */
    getCollapsedIds(node: FamilyTree.node): Array<string | number>;
    /**
     * State to url.
     * {@link https://balkan.app/FamilyTreeJS/Docs/State | See doc...}  
     */
    stateToUrl(): string;
    /**
     * Genereates unique identification number that can be used for new nodes
     */
    generateId(): string;
    /**
     * Destroys the object.
     */
    destroy(): void;
    /**
     * Adds curved link.
     * @param from from node with id
     * @param to to node with id
     * @param label link label
     * @param template link template, for example 'orange'
     */
    addClink(from: string | number, to: string | number, label?: string, template?: string): FamilyTree;
    /**
     * Removes curved link.
     * @param from from node with id
     * @param to to node with id
     */
    removeClink(from: string | number, to: string | number): FamilyTree;
    /**
     * Adds second link.
     * @param from from node with id
     * @param to to node with id
     * @param label link label
     * @param template link template, for example 'orange'
     */    
    addSlink(from: string | number, to: string | number, label?: string, template?: string): FamilyTree;
    /**
     * Removes second link.
     * @param from from node with id
     * @param to to node with id
     */    
    removeSlink(from: string | number, to: string | number): FamilyTree;
    /**
     * Gets svg html element
     */
    getSvg(): SVGAElement;
    /**
     * Gets node html element
     * @param id node id
     */
    getNodeElement(id: string | number): HTMLElement;
    /**
     * Gets menu button html element
     */
    getMenuButton(): HTMLElement;
    /**
     * Exports the details form to PDF.
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}        
     */
    exportPDFProfile(options: FamilyTree.exportOptions, callback?: () => void): void;
    exportPDFPreview(options: FamilyTree.exportOptions): void;
    /**
     * Exports the details form to PDF.
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}        
     */
    exportPNGProfile(options: FamilyTree.exportOptions, callback?: () => void): void;
    /**
     * Exports to CSV
     * @param filename The name of the exported file
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}            
     */
    exportCSV(filename: string | FamilyTree.exportCSVXMLJSONOptions): void;
    /**
     * Exports to XML   
     * @param filename The name of the exported file
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}            
     */
    exportXML(filename: string | FamilyTree.exportCSVXMLJSONOptions): void;
    /**
     * Exports to JSON   
     * @param filename The name of the exported file
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}            
     */
     exportJSON(filename: string | FamilyTree.exportCSVXMLJSONOptions ): void;

    /**
     * Shares node data, uses build-in  device sharing functionallity.
     * @param id node id 
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}            
     */
    shareProfile(id: string | number): void;
    /**
     * Exports to PDF document
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}       
     */
    exportPDF(options?: FamilyTree.exportOptions, callback?: () => void): void;    
    /**
     * Exports to PNG document
     * @param options export options 
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}       
     */
    exportPNG(options?: FamilyTree.exportOptions, callback?: () => void): void;
    /**
     * Exports to SVG document
     * @param options export options 
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}       
     */    
    exportSVG(options?: FamilyTree.exportOptions, callback?: () => void): void;
    /**
     * Imports CSV file.
     * {@link https://balkan.app/FamilyTreeJS/Docs/Importing | See doc...}       
     */
    importCSV(): void;
    /**
     * Imports XML file.
     * {@link https://balkan.app/FamilyTreeJS/Docs/Importing | See doc...}       
     */    
    importXML(): void;

    /**
     * Imports JSON file.
     * {@link https://balkan.app/FamilyTreeJS/Docs/Importing | See doc...}       
     */    
    importJSON(): void;

    /**
     * Zoom out or zoom in the family.
     * @param delta true for zoom in, false for zoom out or scale number, if scale is > 1 it will zoom in and scale < 1 zoom out.
     * @param center array [x, y], where x is x percantege from the width and y is y percentage from the height.
     * @param shouldAnimate should animate 
     * @param callback called when the animation completes
     */
    zoom(delta: boolean | number, center?: Array<number>, shouldAnimate?: boolean, callback?: () => void): void;
    
    /**
     * Magnify(Zoom in) specific node in the family.
     * @param id id of the node
     * @param scale scale to magnify
     * @param front show on front or back 
     * @param anim animation type
     */
     magnify(id: string | number, scale: number, front?: boolean, anim?: FamilyTree.anim | null, callback?: () => void): void;     

    /**
     * Starts the move 
     * @param movePosition move position
     * @param tick callback function in each step
     * @param func the name of the animation function, for example FamilyTree.anim.inSin
     * @param duration duration before going to 100 percent speed
     */
    moveStart(movePosition: FamilyTree.move, tick?: () => void, func?: FamilyTree.anim, duration?: number): void;
    
    /**
     * Ends the move
     */
    moveEnd(): void;

    /**
     * The onField() method of the FamilyTree class sets up a function that will be called whenever the specified event is delivered to the target.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onField((args) => {
     *      //return false; to cancel
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onField(listener: (this: FamilyTree, args: { 
        /**
         * the node
         */
        node: FamilyTree.node, 
        /**
         * node data json object
         */
        data: object, 
        /**
         * value of the filed, can be changed in the event
         */
        value: any, 
        /**
         * svg or html element of the filed, can be changed in the event
         */
        element: string, 
        /**
         * name of the field
         */
        name: string         
        /**
         * field template name
         */
        field: string 
    }) => void | boolean): FamilyTree;

    /**
     * Occurs when the nodes in FamilyTree has been created and loaded to the DOM.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onInit(() => {
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onInit(listener: (this: FamilyTree) => void): FamilyTree;
    


    /**
     * The onRedraw event occurs when the family is redrawed.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onRedraw(() => {
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */        
    onRedraw(listener: (this: FamilyTree) => void): FamilyTree;

    /**
     * The onExpandCollpaseButtonClick event occurs when the family is redrawed.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onExpandCollpaseButtonClick(() => {
     *  //return false; to cancel the operation
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExpandCollpaseButtonClick(listener: (this: FamilyTree, args: {
        /**
         * Indicates id the operation is collaps or expand
         */
        collapsing: boolean,
        /**
         * the id of the clicked node
         */
        id: number | string,
        /**
         *  node ids that will be expanded or collapsed
         */
        ids: Array<number | string>
    }) => void): FamilyTree;
    /**
     * Occurs in the beginning of the export. Extra css styles can be added to the exported document using this event listener or show loading image.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onExportStart(() => {
     *  args.styles += '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
     *  //return false; to cancel the operation
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */             
    onExportStart(listener: (this: FamilyTree, args: 
        {
        /**
         * the content to be exported
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        content: string,
        /**
         * export options
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        options: FamilyTree.exportOptions,
        /**
         * add extra styles
         * 
         * this property is initialized only for PDF/PNG/SVG exports
         */
        styles: string,
        /**
         * an object that discribes pages to be exported
         * 
         * this property is initialized only for PDF/PNG exports
         */
        pages: any,
        /**
         * extension
         * 
         * this property is initialized only for CSV/XML
         */
        ext: string,
        /**
         * filename, you can change the filename here
         * 
         * this property is initialized only for CSV/XML exports
         */
        filename: string,
        /**
         * array of node objects
         * 
         * this property is initialized only for CSV/XML exports
         */
        nodes: Array<object>
    }) => void): FamilyTree;
    /**
     * Occurs in the beginning of the export. Use this event listener to hide loading image or upload exported document to your server using ArrayBuffer argument.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onExportEnd(() => {
     *  //return false; to cancel the operation for example id you prefer the exported document to not download
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExportEnd(listener: (this: FamilyTree, args: 
        /**
         * for PDF/PNG
         */
    {
        /**
         * the array buffer is the exported document, you can save it on a server or send it via email
         * 
         * this property is initialized only for PDF/PNG exports
         */
        ArrayBuffer: ArrayBuffer
        /**
         * extension
         * 
         * this property is initialized only for CSV/XML exports
         */
        ext: string,
        /**
         * filename, you can change the filename here
         * 
         * this property is initialized only for CSV/XML exports
         */
        filename: string,
        /**
         * an array of node objects
         * 
         * this property is initialized only for CSV/XML exports
         */
        nodes: Array<object>,
        /**
         * csv ot xml string
         * 
         * this property is initialized only for CSV/XML/SVG exports
         */
        content: string
        /**
         * export options
         * 
         * this property is initialized only for SVG exports
         */
        options: FamilyTree.exportOptions,
        /**
         * add extra styles
         * 
         * this property is initialized only for SVG exports
         */
        styles: string,        
    }) => void): FamilyTree;
    /**
     * On node click event listener.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onNodeClick(() => {
     *  //return false; to cancel the operation      
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */   
    onNodeClick(listener: (this: FamilyTree, args: {
        /**
         * node JSON object
         */
        node: FamilyTree.node,
        /**
         * the browser event
         */
        event: any
    }) => void): FamilyTree;
    /**
     * On node double click event listener.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onNodeDoubleClick(() => {
     *  //return false; to cancel the operation 
     * });
     * family.load(nodes);
     * ```
     * @category Event Listeners
     * @param listener 
     */       
    onNodeDoubleClick(listener: (this: FamilyTree, args: {
        /**
         * clicked node data
         */
        data: object
    }) => void): FamilyTree;

    element: HTMLElement;

    editUI: FamilyTree.editUI;
    searchUI: FamilyTree.searchUI;
    nodeMenuUI: FamilyTree.menuUI;
    filterUI: FamilyTree.filterUI;
    nodeCircleMenuUI: FamilyTree.circleMenuUI;
    nodeContextMenuUI: FamilyTree.menuUI;
    menuUI: FamilyTree.menuUI;
    toolbarUI: FamilyTree.toolbarUI;    
    config: FamilyTree.options

    static fileUploadDialog(scallback: (file: any) => void): void;
    static isMobile(): boolean;
    /**
     * Checks if the used libraris is licnsed or not
     */
    static isTrial(): boolean;
    /**
     * Count all children nodes of the specified id.
     * @param family FamilyTree instance
     * @param node 
     * @param count 
     */
    static childrenCount(family: FamilyTree, node: FamilyTree.node): number;
    static childrenTotalCount(family: FamilyTree, node: FamilyTree.node): number;
    static collapsedChildrenCount(family: FamilyTree, node: FamilyTree.node): number;
    static collapsedChildrenTotalCount(family: FamilyTree, node: FamilyTree.node): number;
    static getRootOf(node: FamilyTree.node): FamilyTree.node;

    /**
     * is null, empty or undefined
     * @param val 
     */
    static isNEU(val: any): boolean;
    static gradientCircleForDefs(id: string | number, colors: Array<string> | string, r: number, strokeWidth: number): string;
    static convertCsvToNodes(text: string) : Array<Object>;
    static convertNodesToCsv(nodes: Array<Object>) : string;
    static wrapText(text: string, field: Object): string;
    /**
     * Shows/hides lloading image. Usefull when export large data to pdf. You can override and show your own loading image.
     */
    static loading: {
        show: (family: FamilyTree) => void,
        hide: (family: FamilyTree) => void
    }

    static clinkTemplates: {
        [key: string]: FamilyTree.linkTemplate
    }

    static slinkTemplates: {
        [key: string]: FamilyTree.linkTemplate
    }


    static templates :{ [key: string]: FamilyTree.template} ;


    static scroll: {
        visible?: boolean,
        smooth?: number,
        speed?: number,
        safari?: { smooth?: number; speed?: number; },
        edge?: { smooth?: number; speed?: number; },
        chrome?: { smooth?: number; speed?: number; },
        firefox?: { smooth?: number; speed?: number; },
        opera?: { smooth?: number; speed?: number; }
    };
    

    static events: {
        /**
         * node-created and layout event listeners are obsolete use node-initialized or node-layout instead
         * @param type 
         * @param listener 
         */
        on(type: "node-created" | "layout", listener: (args: any, args1: any, args2: any) => void): void
    };
    static state: { clear(stateName: string): void };

    static animate(element: Object, attrStart?: Object, attrEnd?: Object, duration?: number, func?: FamilyTree.anim, callback?: Function, tick?: boolean): void;

    static VERSION: string;
    /**
    * @ignore
    */
    static TEXT_THRESHOLD: number;
    /**
    * @ignore
    */
    static IMAGES_THRESHOLD: number;
    /**
    * @ignore
    */
    static LINKS_THRESHOLD: number;
    /**
    * @ignore
    */
    static BUTTONS_THRESHOLD: number;
    /**
    * @ignore
    */
    static ANIM_THRESHOLD: number;

    /**
    * @ignore
    */
    static IT_IS_LONELY_HERE: string;
    /**
    * @ignore
    */
    static RES: {
        /**
        * @ignore
        */
        IT_IS_LONELY_HERE_LINK: string
    };
    /**
    * @ignore
    */
    static FIRE_DRAG_NOT_CLICK_IF_MOVE: number;
    /**
    * @ignore
    */
    static STRING_TAGS: boolean;
    /**
     * Search placeholder
     */
    static SEARCH_PLACEHOLDER: string;
    /**
     * Search help symbol. 
     */
    static SEARCH_HELP_SYMBOL: string;

    /**
     * Close search result list by click outside list and clean search input 
     */
    static SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE: boolean;
    /**
    * @ignore
    */
    static IMPORT_MESSAGE: string;
    /**
    * @ignore
    */
    static FIXED_POSITION_ON_CLICK: boolean;
    /**
    * @ignore
    */
    static RENDER_LINKS_BEFORE_NODES: boolean;
    /**
    * @ignore
    */
    static MIXED_LAYOUT_ALL_NODES: boolean;
    /**
    * @ignore
    */
    static MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN: boolean;
    /**
    * Use mixed layout for example tree or treeLeftOffset if number of children is more then specified value
    */
    static MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN: boolean;
    /**
    * @ignore
    */
    static LINK_ROUNDED_CORNERS: number;
    /**
    * @ignore
    */
    static MOVE_STEP: number;
    /**
    * @ignore
    */
    static CLINK_CURVE: number;
    /**
    * @ignore
    */
    static SEARCH_RESULT_LIMIT: number;
    /**
    * @ignore
    */
    static MAX_DEPTH: number;
    /**
    * @ignore
    */
    static SCALE_FACTOR: number;
    /**
    * @ignore
    */
    static LAZY_LOADING_FACTOR: number;
    /**
     * Can be used to instruct the browser to defer loading of FamilyTree that are off-screen until the user scrolls near them.
     * The init event listener will be called as soon as the FamilyTree become visible.
     */
    static LAZY_LOADING: boolean;
   
    /**
     * Hides the Edit Form when the family is moved with pan
     */
    static HIDE_EDIT_FORM_ON_PAN: boolean;
    static ARRAY_FIELDS: Array<string>;

    /**
     * Csv import and export delimiter/separator
     */
    static CSV_DELIMITER: string;

    /**
     * 
     */
    static EDITFORM_CLOSE_BTN: string;
    /**
     * Escape HTML to prevent Cross-site scripting (also known as XSS) attacks 
     */
    static ESCAPE_HTML: boolean;

    /**
     * Align children of assistant vertically 
     */
    static VERTICAL_CHILDREN_ASSISTANT: boolean;

    /**
    * @ignore
    */

    static randomId(): any;
    static searchUI: any;
    static editUI: any;
    static pdfPrevUI: any;
    // static menuUI: any;
    static attr: any;
    static toolbarUI: any;
    static elements: any;

    static expcollOpenTag: any;
    static upOpenTag: any;
    static grCloseTag: any;
}

declare namespace FamilyTree {    
    /**
     * deprecated
     * @ignore
     */
    const none: number;

    /**
     * @ignore
     */    
    const COLLAPSE_PARENT_NEIGHBORS: number;
    
    /**
     * @ignore
     */
    const COLLAPSE_SUB_CHILDRENS: number;


    var template: object;

    interface node {
        /**
         * the same id you provided in the source node
         */
        id?: string | number,
        /**
         *  partner parent id, it is the partner parent node id of the partner node, it is the same ppid you provided in the source node, the default value is undefined.
         */
        ppid?: string | number,
        /**
         * a reference to the parent node, default value is null, if the nodes is collapse this proprty is not initalized and can be null even if pid is not null
         */
        parent?: node,
        /**
         * ub tree parent id, it is the parent node id of the root node of the sub tree, it is the same stpid you provided in the source node, the default value is null if not provided or if node with the same id does not exist.
         */
        stpid?: string | number,
        /**
         * - a reference to the parent node of a sub tree, default value is null, if the parent node is minimized this proprty is not initalized and can be null even if we have stpid
         */
        stParent?: node,
        isPartner?: boolean,
        partnerSeparation?: number,
        /**
         * array of ids, always initialized
         */
        childrenIds?: Array<string | number>,
        /**
         * array of children nodes, initialized on demand if all children are collpased it will be empty array
         */
        children?: Array<node>,
        /**
         * array of sub tree children root node ids, always initialized
         */
        stChildrenIds?: Array<string | number>,
        /**
         * array of sub tree children root nodes, initialized on demand if the node is minimized it will be empty array
         */
        stChildren?: Array<node>,
        /**
         * array of string values, the same array you provided in the source node
         */
        tags?: Array<string>,
        /**
         * template name, you can specify multiple templates with tags in one family
         */
        templateName?: string,
        /**
         * a reference to the left node neighbor, the default value is undefined
         */
        leftNeighbor?: node | undefined,
        /**
         *  a reference to the right node neighbor, the default value is undefined
         */
        rightNeighbor?: node | undefined,
        /**
         * x position, default value undefined
         */
        x?: number | undefined,
        /**
         *  y position, default value undefined
         */
        y?: number | undefined,
        /**
         * width of the node, default value undefined
         */
        w?: number | undefined,
        /**
         * height of the node, default value undefined
         */
        h?: number | undefined,
        /**
         * if the node is assistant is true if not false if the node is not initialized is undefined
         */
        isAssistant?: boolean | undefined,
        /**
         * sub tree container nodes array, property only for the root node, default value undefined
         */
        stContainerNodes?: Array<node> | undefined,
        /**
         * it is set only if you define order option, default value undefined
         */
        order?: number | undefined,
        /**
         * true if the node is collpased, false if it is not and undefined if not initalized
         */
        collapsed?: boolean | undefined,
        /**
         * a level of the node starting from zero
         */
        level?: number,
        /**
         * true if the node is minimized, default value undefined
         */
        min?: boolean | undefined,
        /**
         * sub levels, default value undefined
         */
        subLevels?: number | undefined,
        /**
         * set only if the node contains sub trees and padding is defined in the template, default value undefined
         */
        padding?: number | undefined,
        /**
         * layout configuration name, default value undefined
         */
        lcn?: string | undefined,
        /**
         * for assistant nodes and mixed layout we create dynamic nodes called splits, default value undefined
         */
        isSplit?: boolean | undefined,
        /**
         * indicates if the node is child of partner node
         */
        isChildOfPartner?: boolean
    }


    interface template  
         {
            defs?: string,
            size?: Array<number>,
            expandCollapseSize?: number,
            linkAdjuster?: {
                fromX?: number,
                fromY?: number,
                toX?: number,
                toY?: number
            },
            ripple?: {
                radius?: number,
                color?: string,
                rect?: Array<number>
            },
            assistanseLink?: string,
            svg?: string,
            link?: string,
            pointer?: string,
            node?: string,
            plus?: string,
            minus?: string,
            nodeMenuButton?: string,
            menuButton?: string,
            img_0?: string,
            link_field_0?: string,
            editFormHeaderColor?: string,
            nodeCircleMenuButton?: object,
            min?: template,
            [name: string]: any
        }

    interface editUI {
        /**
         * Inits edit ui
         * @param obj 
         */
        init(obj: FamilyTree): void;
        /**
         * The on() method of the editUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */
        on(type: "show" | "save" | "cancel" | "element-btn-click" | "button-click" | "hide", listener: (sender: editUI, args: any, args1: any, args2: any) => void | boolean): editUI;
        /**
         * Shows the edit form for the specified node id
         * @param id node id
         * @param detailsMode If true the edit form is in read only mode
         * @param dontAnim 
         */
        show(id: string | number, detailsMode?: boolean, dontAnim?: boolean): void;
        /**
         * Hides the edit form
         */
        hide(): void;
        content(id: string | number, detailsMode: boolean, dontAnim: boolean, width: string, dontRenderButtons: boolean): string;
        /**
         * Sets the avatar of the edit form
         * @param avatarUrl avatar url
         */
        setAvatar(avatarUrl?: string): void;
        // static renderHeaderContent(title: string, photo: string, node: FamilyTree.node, data: object): string;        
    }

    interface searchUI {
        init(obj: FamilyTree): void;
        /**
         * The on() method of the searchUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "searchclick", listener: (sender: FamilyTree, args: any, args1: any, args2: any) => void | boolean): searchUI;
        /**
         * Hides the search grid
         */
        hide(): void;
        /**
         * Finds filed data by specified value
         * @param value search for value
         */
        find(value: string): void;
        createItem(img: string, id: string | number, first: string, second: string): string;
        helpView(): string;
        addMatchTag(id: string | number) : boolean;
        input: HTMLElement;
        searchTableWrapper: HTMLElement; 
        lastSearch: Array<object>;        
    }

    
    interface filterUI {
        init(instance: FamilyTree): void;   
        update(): void;
        /**
         * Opens filter Tab 
         * @param filterTabName the name of the filter tab
         */
        show(filterTabName: string): void;
        /**
         * Hides the filter tabs
         */
        hide(): void;
        addFilterTag(data: object): boolean;
        filterBy?: any;
    }


    interface menuUI  {
        init(obj: FamilyTree, menu: { [key: string]: menu }): void;
        /**
         * The on() method of the menuUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "show", listener: (sender: menuUI, args: any, args1: any, args2: any) => void | boolean): menuUI;
        /**
         * Shows menu next to html element
         * @param stickToElement 
         * @param firstNodeId 
         * @param secondNodeId 
         * @param menu 
         */
        showStickIn(stickToElement: HTMLElement, firstNodeId: string | number, secondNodeId: string | number, menu: { [key: string]: menu }): void;
        /**
         * Returns true if the menu is visible
         */
        isVisible(): boolean;

        /**
         * Hieds the menu
         */
        hide(): void;
        /**
         * Shows menu by x,y position
         * @param x 
         * @param y 
         * @param firstNodeId 
         * @param secondNodeId 
         * @param menu 
         */
        show(x: number | HTMLElement, y?: number, firstNodeId?: string | number, secondNodeId?: string | number, menu?: { [key: string]: menu }): void;
    }

    interface circleMenuUI {
        /**
         * Inits circle menu instance
         * @param obj 
         * @param menu 
         */
        init(obj: FamilyTree, menu: { [key: string]: menu }): void;
        /**
         * Shows circle menu 
         * @param nodeId 
         * @param menu 
         */
        show(nodeId: string | number, menu?: { [key: string]: menu }): void;
        /**
         * Hides circle menu 
         */
        hide(): void;
        /**
         * The on() method of the circleMenuUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "click" | "show" | "drag" | "drop" | "mouseenter" | "mouseout", listener: (sender: circleMenuUI, args: any, args1: any, args2: any) => void | boolean): circleMenuUI;
    }

    interface keyNavigation {
        /**
         * Set focus to specified id on initial load
         */
        focusId: number | string
    }

    interface toolbarUI {
        init(obj: FamilyTree, toolbar: toolbar): void;
        showLayout(): void;
        hideLayout(): void;


        expandAllIcon?: string;
        fitIcon?: string;
        openFullScreenIcon?: string;
        closeFullScreenIcon?: string;
        zoomInIcon?: string;
        zoomOutIcon?: string;
        layoutIcon?: string;
    }



    interface toolbar  {
        layout?: boolean,
        zoom?: boolean,
        fit?: boolean,
        expandAll?: boolean,
        fullScreen?: boolean
    }

    interface miniMap  {
        colors?: Array<string>,
        selectorBackgroundColor?: string,
        backgroundColor?: string,
        focusStroke?: string,
        opacity?: Number,
        border?: string,
        width?: Number,
        height?: Number,
        padding?: Number,
        position?: FamilyTree.position,
        draggable?: boolean
    }

    interface position  {
        top?: string,
        left?: string,
        right?: string,
        bottom?: string
    }

    interface exportOptions  {
        margin?: Array<number>,
        padding?: number,
        landscape?: boolean,
        filename?: string,
        scale?: "fit" | number,
        format?: "A1" | "A2" | "A3" | "A4" | "A5" | "A4" | "Letter" | "Legal",
        header?: string,
        footer?: string,
        openInNewTab?: boolean,
        expandChildren?: boolean,
        min?: boolean,
        nodeId? : number | string
    }

    interface exportCSVXMLJSONOptions  {
        filename?: string,
        expandChildren?: boolean,
        min?: boolean,
        nodeId? : number | string
    }

    interface linkTemplate {
        defs?: string,
        link?: string,
        label?: string,
        labelPosition?: string
    }
    interface menu  {
        [key: string]: {
            text: string,
            icon?: string,
            onClick?: Function
        }
    }
    interface circleMenu  {
        [key: string]: {
            text: string,
            icon?: string,
            color?: string,
            draggable?: boolean
        }
    }
    interface editFormElement {
        type?: string,
        label?: string,
        binding?: string,
        options?: Array<any>,
        btn?: string,
        vlidators?: { required?: string, email?: string }
    }
    interface link {
        from?: string | number,
        to?: string | number,
        template?: string,
        label?: string
    }
    interface dottedLine {
        from?: string | number,
        to?: string | number,
        tags?: Array<string>
    }
    interface orderBy {
        field?: string,
        desc?: boolean
    }
    interface move {
        left?: boolean,
        right?: boolean,
        up?: boolean,
        down?: boolean,
    }

    enum orientation {
        top,
        bottom,
        right,
        left,
        top_left,
        bottom_left,
        right_top,
        left_top
    }
    enum layout {
        normal,
        mixed,
        tree,
        treeLeftOffset,
        treeRightOffset,
        treeLeft,
        treeRight
    }

    enum align {
        center,
        orientation
    }
    enum anim {
        inPow,
        outPow,
        inOutPow,
        inSin,
        outSin,
        inOutSin,
        inExp,
        outExp,
        inOutExp,
        inCirc,
        outCirc,
        inOutCirc,
        rebound,
        inBack,
        outBack,
        inOutBack,
        impulse,
        expPulse
    }
    enum match {
        height,
        width,
        boundary
    }


    enum action {
        update,
        expand,
        collapse,
        exporting,
        init,
        centerNode,
        insert,
        maximize,
        minimize,
        edit,
        details,
        expandCollapse,
        pan,
        zoom,
        ctrlZoom,
        xScroll,
        yScroll,        
        scroll,
        none
    }

    

    interface options  {
        /**
         * Enables or disables the browser events handlers like click, pan, zoom, pinch, etc. Default value - *true*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      interactive: false
         * });
         * ```
         */
        interactive?: boolean,

        /**
         * Color mode. Default value - *light*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      mode: "dark"
         * });
         * ```
         */
        mode?: "dark" | "light",
        /**
         * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need. Default value - *true*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      lazyLoading: false
         * });
         * ```
         */
        lazyLoading?: boolean,

 

        /**
         * Enables advanced search. Default value is true.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      enableSearch: false
         * });
         * ```
         */
        enableSearch?: boolean,
        
        /**
         * You can disable family pan. Default value - *true*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      enablePan: false
         * });
         * ```
         */
        enablePan?: boolean,

        /**
         * Enable touch instead of mouse for particular devices with touchscreen/touchpad/trackpad. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      enableTouch: true
         * });
         * ```
         */
        
        enableTouch?: boolean,
        /**
         * Enable keyboard navigation. Use "f" for find, arrows and space to navigate in the family. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      keyNavigation: true
         * });
         * var family = new FamilyTree('#tree', {
         *      keyNavigation: { focusId: 5 }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/KeyNavigation | See doc...}
         */
         keyNavigation?: boolean | FamilyTree.keyNavigation,
        /**
         * Shows mini map over the expanded tree. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      miniMap: true
         * });
         * ```
         */
        miniMap?: boolean,
        /**
         * Enables edit, add, remove and other node operations. Also you can define your own node operation.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      nodeMenu:{
         *          details: {text:"Details"},
         *       	edit: {text:"Edit"},
         *          add: {text:"Add"},
         *    	    remove: {text:"Remove"},
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Menus | See doc...}
         */
        nodeMenu?: FamilyTree.menu;
        /**
         * With node circle menu you can add, edit, remove node or create clink/slink with drga and drop. Before setting this option make sure that you defined nodeCircleMenuButton in the ysed template.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *       nodeCircleMenu: {
         *           editNode: {
         *               icon: FamilyTree.icon.edit(24, 24, '#aeaeae'),
         *               text: "Edit node",
         *               color: "white"
         *           }, 
         *           addClink: {
         *               icon: FamilyTree.icon.link(24, 24, '#aeaeae'), 
         *               text: "Add C link",
         *               color: '#fff',
         *               draggable: true
         *           }
         *       }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Menus | See doc...}
         */
        nodeCircleMenu?: FamilyTree.circleMenu,
        /**
         * Customizable context menu. Also you can define your own node operation.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      nodeContextMenu:{
         *          details: {text:"Details"},
         *       	edit: {text:"Edit"},
         *          add: {text:"Add"},
         *          remove: {text:"Remove"}
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Menus | See doc...}
         */
        nodeContextMenu?: FamilyTree.menu,
        /**
         * Enables export to excel, export to svg and other FamilyTree operations. Also you can define your own FamilyTree operation.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      menu:{
         *          svg: { text: "Export SVG" },
         *          csv: { text: "Export CSV" }
         *          myMenuItem: {text:"My node menu Item", onClick: function {}}
         *      }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Menus | See doc...}
         */
        menu?: FamilyTree.menu,
        /**
         * With the toolbar enabled allows you to change the layout, zoom in/out, expand all nodes, etc.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      toolbar: {
         *          layout: true,
         *          zoom: true,
         *          fit: true,
         *          expandAll: false,
         *          fullScreen: true
         *      },
         * });
         * ```
         */
        toolbar?: FamilyTree.toolbar,
        /**
         * Stops the family locking to the top of the screen once you move it.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      sticky: false
         * });
         * ```
         */
        sticky?: boolean,
        /**
         * nodeMouseClick can accept the following values:
         * - FamilyTree.action.edit - will open the edit view for the clicked node on the right hand side
         * - FamilyTree.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
         * - FamilyTree.action.expandCollapse - will expand or collapse the children nodes
         * - FamilyTree.action.none - do nothing on node click event
         * - FamilyTree.action.pan - allows you to move the family in any direction
         * 
         * Default value - *FamilyTree.action.details*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      nodeMouseClick: FamilyTree.action.edit
         * });
         * ```
         */
        nodeMouseClick?: FamilyTree.action,
        /**
         * nodeMouseDbClick can accept the following values:
         * - FamilyTree.action.edit - will open the edit view for the clicked node on the right hand side
         * - FamilyTree.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only
         * - FamilyTree.action.expandCollapse - will expand or collapse the children nodes
         * - FamilyTree.action.none - do nothing on node click event
         * 
         * Default value - *FamilyTree.action.none*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      nodeMouseDbClick: FamilyTree.action.edit
         * });
         * ```
         */
        nodeMouseDbClick?: FamilyTree.action,
        /**
         * mouseScrool can accept the following values:
         * - FamilyTree.action.zoom - will zoom in/out on mouse scroll
         * - FamilyTree.action.ctrlZoom - will zoom in/out on mouse scroll and ctrl button is pressed
         * - FamilyTree.action.xScroll - left/right move of the family on mouse scroll
         * - FamilyTree.action.yScroll - up/down move of the family on mouse scroll
         * - FamilyTree.action.none - do nothing on mouse scroll
         * 
         * Default value - *FamilyTree.action.zoom*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      mouseScrool: FamilyTree.action.ctrlZoom
         * });
         * ```
         */
        mouseScrool?: FamilyTree.action,
        /**
         * Shows horizontal scrollbar. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      showXScroll: true
         * });
         * ```
         */
        showXScroll?: boolean ,
        /**
         * Shows vertical scrollbar. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      showYScroll: true
         * });
         * ```
         */
        showYScroll?: boolean ,
        /**
         * Set template if you want to change the appearance of the family. Family Tree JS comes with number of build-in templates:
         * - ana
         * - ula
         * - olivia
         * - belinda
         * - rony
         * - mery
         * - polina
         * - mila
         * - diva
         * - base
         * - isla
         * - deborah
         * 
         * Default value - *ana*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      template: 'olivia'
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/PredefinedTemplates | See doc...}
         */
        template?: "ana" | "ula" | "olivia" | "belinda" | "rony" | "mery" | "polina" | "mila" | "diva" | "luba" | "isla" | "deborah" | "base" | "group" | "invisibleGroup" | string,
        /**
         * With tags option you can:
         * - Set a specific template for tagged node/s {@link https://balkan.app/FamilyTreeJS/Docs/MultipleTemplates | See doc...}
         * - Set node as assistant {@link https://balkan.app/FamilyTreeJS/Docs/Assistant | See doc...}
         * - Change node menu, circle menu and context menu items for tagged node/s {@link https://balkan.app/FamilyTreeJS/Docs/Menus | See doc...}
         * - Set the node level {@link https://balkan.app/FamilyTreeJS/Demos/SubLevels | See demo...}
         * - Set specific options for sub trees like layout templates etc {@link https://balkan.app/FamilyTreeJS/Docs/SubTrees | See doc...}          
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      tags: {
         *          myTag: {template: 'olivia'}
         *      },
         *      nodes: [{id: 1}, {id: 2, tags: ['myTag']}]
         * });
         * ```
         */
        tags?: {
            [key: string]: {
                template?: "ana" | "ula" | "olivia" | "belinda" | "rony" | "mery" | "polina" | "mila" | "diva" | "luba" | "isla" | "deborah" | "base" | "group" | "invisibleGroup" | string,
                subLevels?: number,
                nodeMenu?: FamilyTree.menu,
                nodeCircleMenu?: FamilyTree.circleMenu,
                nodeContextMenu?: FamilyTree.menu,
                subTreeConfig?: {
                    orientation?: FamilyTree.orientation,
                    levelSeparation?: number,
                    mixedHierarchyNodesSeparation?: number,
                    subtreeSeparation?: number,
                    siblingSeparation?: number,
                    layout?: FamilyTree.layout | number,
                    columns?: number,
                    collapse?: {
                        level?: number,
                        allChildren?: boolean
                    }
                }
            };
        },
        /**
         * Minimize/Maximize node. The template has to have min defined. Default value - *false*.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *      min: true
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/MinMax | See doc...}
         */
        min?: boolean,
        /**
         * Node binding in Family Tree JS maps node data to node template parameters.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   nodeBinding: {
         *       field_0: "name"
         *   },
         *   nodes: [
         *       { id: 1, name: "Amber McKenzie" }
         *   ]
         * });
         * ```
         */
        nodeBinding?: { [key: string]: string },
        /**
         * Link binding in Family Tree JS maps node data to link template parameters.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   linkBinding: {
         *       link_field_0: "createdAt"
         *   },
         *   nodes: [
         *       { id: "1", name: "Amber McKenzie"  },
         *       { id: "2", pid: "1", createdAt: "Since 08/08/2018" },
         *       { id: "3", pid: "1", createdAt: "Since 05/04/2018" }
         *   ]
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Link | See doc...}
         */
        linkBinding?: { [key: string]: string },
        /**
         * Search by the fields defined in searchFields.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   searchFields: ["name", "title", etc...]
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
        searchFields?: Array<string>,
        /**
         * Displays a field in the search result.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   searchDisplayField: "name"
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
        searchDisplayField?: string,
        /**
         * Search by weight of the fields.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   searchFieldsWeight: {
         *       "Name": 100, //percent
         *       "Title": 20 //percent
         *   }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
        searchFieldsWeight?: { [key: string]: number },
    	/**
         * Search in field with abbreviation.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   searchFieldsAbbreviation: {
         *       "n": "name", 
         *       "a": "My Address" 
         *   }
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
         searchFieldsAbbreviation?: { [key: string]: string },
        /**
         * Array of node data JSON objects. nodes option is the data source of the family. Node JSON objects could have unlimited number of properties, id, pid, ppid, stpid and tags are reserved node properties.
         * - id - unique identifier, it clould be integer or string
         * - pid - is the parent id
         * - stpid - subtree parent id
         * - ppid - parent partner id
         * - tags - array of strings
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   nodes: [
         *       { id: 1 },
         *       { id: 2, pid: 1, tags: ["Sales"] },
         *       { id: 3, stpid: 2  }
         *   ]
         * });
         * ```
         */
         nodes?: Array<Object>,
        /**
         * Adds curved link.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   clinks: [
         *       from: 4, to: 0, label: 'text'}, 
         *       {from: 4, to: 5, template: 'blue', label: '4 reports to 3' },
         *       {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' }
         *   ]
         * });
         * ```
         */
        clinks?: Array<FamilyTree.link>,
        /**
         * Adds second link.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   slinks: [
         *       from: 4, to: 0, label: 'text'}, 
         *       {from: 4, to: 5, template: 'blue', label: '4 reports to 3' },
         *       {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' }
         *   ]
         * });
         * ```
         */
        slinks?: Array<FamilyTree.link>,

         /**
         * Adds dotted line.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   dottedLines: [
         *       {from: 6, to: 1 }
         *   ]
         * });
         * ```
         */
        dottedLines?: Array<FamilyTree.dottedLine>,

         /**
         * Adds group dotted line.
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   groupDottedLines: [
         *       {from: 6, to: 1 }
         *   ]
         * });
         * ```
         */
        groupDottedLines?: Array<FamilyTree.dottedLine>,

        /**
         * The gap between each level. Default value - *60*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   levelSeparation: 50
         * });
         * ```
         */
        levelSeparation?: number,
        /**
         * The gap between nodes in a subtree. Default value - *20*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   siblingSeparation: 50
         * });
         * ```
         */
        siblingSeparation?: number,
        /**
         * The gap between subtrees. Default value - *40*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   subtreeSeparation: 50
         * });
         * ```
         */
        subtreeSeparation?: number,
        /**
         * The gap between nodes in vertical layout. Default value - *20*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   mixedHierarchyNodesSeparation: 5
         * });
         * ```
         */
        mixedHierarchyNodesSeparation?: number,
        /**
         * Set the assistant separation value. Default value - *100*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   assistantSeparation: 150
         * });
         * ```
         */
        assistantSeparation?: number,
        /**
         * Minimum gap between partner and node with partners. Default value - *50*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   minPartnerSeparation: 100
         * });
         * ```
         */
        minPartnerSeparation?: number,
        /**
         * Gap between partner links. Default value - *20*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   partnerChildrenSplitSeparation: 50
         * });
         * ```
         */
        partnerChildrenSplitSeparation?: number,
        /**
         * Gap between partners. Default value - *15*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   partnerNodeSeparation: 30
         * });
         * ```
         */
        partnerNodeSeparation?: number,
        /**
         * The number of colums if the family has multiple root nodes. Default value - *10*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   columns: 1
         * });
         * ```
         */
        columns?: number,
        /**
         * The padding option sets the padding area on all four sides of the FamilyTree. Default value - *30*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   padding: 20
         * });
         * ```
         */
        padding?: number,
        /**
         * Specifies the orientation of the Family Tree JS. could accept one of the following values:
         * - FamilyTree.orientation.top
         * - FamilyTree.orientation.bottom
         * - FamilyTree.orientation.right
         * - FamilyTree.orientation.left
         * - FamilyTree.orientation.top_left
         * - FamilyTree.orientation.bottom_left
         * - FamilyTree.orientation.right_top
         * - FamilyTree.orientation.left_top
         * 
         * Default value - *FamilyTree.orientation.top*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   orientation: FamilyTree.orientation.bottom
         * });
         * ```
         */
        orientation?: FamilyTree.orientation,
        /**
         * Sets the layout algoritm:
         * - FamilyTree.layout.normal
         * - FamilyTree.layout.mixed
         * - FamilyTree.layout.tree
         * - FamilyTree.layout.treeLeftOffset
         * - FamilyTree.layout.treeRightOffset
         * - FamilyTree.layout.treeLeft
         * - FamilyTree.layout.treeRight
         * 
         * Default value - *FamilyTree.layout.normal*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   layout: FamilyTree.layout.mixed
         * });
         * ```          
         */
        layout?: FamilyTree.layout | number,
        /**
         * The scale factor determines what fraction of the entire scale is visible at one time.
         * - FamilyTree.match.height
         * - FamilyTree.match.width
         * - FamilyTree.match.boundary
         * - [number]
         * 
         * Default value - *1*
         * ```typescript     
         * var family = new FamilyTree('#tree', {
         *   scaleInitial: FamilyTree.match.boundary
         * });
         * ```          
         * {@link https://balkan.app/FamilyTreeJS/Docs/Layout | See doc...}         
         */
        scaleInitial?: number | FamilyTree.match,
        /**
         * Determines the minimum scale factor. Default value - *0.1*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   scaleMin: 0.2
         * });
         * ```          
         */
        scaleMin?: number,
        /**
         * Determines the naximum scale factor. Default value - *5*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   scaleMax: 10
         * });
         * ```          
         */
        scaleMax?: number,
        /**
          * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array. Default value - *null*
          * ```typescript       
          * var family = new FamilyTree('#tree', {
          *   orderBy: "orderId",
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```    
          * ```typescript       
          * var family = new FamilyTree('#tree', {
          *   orderBy: {field: "orderId", desc: true},
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```      
          */
        orderBy?: string | Array<FamilyTree.orderBy>,
        /**
          * Filter the FamilyTree by the specified fields.
          * ```typescript       
          * var family = new FamilyTree('#tree', {
          *   filterBy: 'all'
          * });
          * ```    
          * ```typescript       
          * var family = new FamilyTree('#tree', {
          *   filterBy: ['country', 'title']
          * });
          * ```      
          * ```typescript       
          * var family = new FamilyTree('#tree', {
          *   filterBy: {
          *         name: { 'name 2': { checked: false, text: 'My text 2'} },
          *         title: {}
          *   }
          * });
          * ```      
          */
        filterBy?: string | Array<string> | {[key: string]: { [key: string] : {
            checked: boolean,
            text?: string
        } }},
        /**
          * @ignore
          */
        editUI?: FamilyTree.editUI,
        /**
          * @ignore
          */
        searchUI?: FamilyTree.searchUI,
        /**
          * @ignore
          */
        filterUI?: FamilyTree.filterUI,        
        /**
          * @ignore
          */
        xScrollUI?: any,
        /**
          * @ignore
          */
        yScrollUI?: any,
        /**
          * @ignore
          */
        nodeMenuUI?: FamilyTree.menuUI,
        /**
          * @ignore
          */
        nodeCircleMenuUI?: FamilyTree.circleMenuUI,
        /**
          * @ignore
          */
        nodeContextMenuUI?: FamilyTree.menuUI,
        /**
          * @ignore
          */
        toolbarUI?: FamilyTree.toolbarUI,
        /**
         * @ignore
         */
        notifierUI?: any,
        /**
         * @ignore
         */        
        menuUI?: FamilyTree.menuUI,
        /**
         * @ignore
         */
         UI?: any,        
        /**
         * The URL to the export server. Default value - *https://balkan.app/export*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   exportUrl: "https://balkan.app/export"
         * });
         * ```          
         */        
        exportUrl?: string,
        /**
         * Collapse specified level of the family and its children if allChildren is true.
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   collapse: {level: 2, allChildren: true}
         * });
         * ```          
         */         
        collapse?: {
            level: number,
            allChildren?: boolean
        },
        /**
         * Expand specified node ids and its children if allChildren is true. The expand option works only if collapse is set.
         * 
         * In the example above the second level of the family will be collapsed but node with id 155 and its children will be expanded.
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   collapse: {level: 2, allChildren: true},
         *   expand: {nodes: [155], allChildren: true}
         * });
         * ```          
         */         
        expand?: {
            nodes?: Array<string | number>,
            allChildren?: boolean
        },
        /**
         * The align option specifies the alignment of the nodes inside Family Tree JS.
         * - FamilyTree.align.center - centered
         * - FamilyTree.align.orientation - according to the orientation option
         * 
         * Default value - *FamilyTree.align.center*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   align: FamilyTree.align.orientation
         * });
         * ```          
         */         
        align?: FamilyTree.align | number,
        /**
         * Can be used to control the transition of the nodes on expand/collapse operation. Default value - *func: FamilyTree.anim.outPow, duration: 200*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   anim: {func: FamilyTree.anim.outBack, duration: 500}
         * });
         * ```          
         */                 
        anim?: {
            /**
             * defines how long time an animation should take to complete
             */
            func?: FamilyTree.anim,
            /**
             * Easing functions specify the speed at which an animation progresses at different points within the animation.
             */
            duration?: number
        },
        /**
         * Can be used to control the zooming sensitivity. Default value - *speed: 120, smooth: 12*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   zoom: {speed: 130, smooth: 10}
         * });
         * ```          
         */          
        zoom?: {
            speed?: number,
            smooth?: number
        },
        /**
         * Define nodes as roots. Default value - *null*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   roots: [2, 4]
         * });
         * ```          
         */           
        roots?: Array<string | number>,
        /**
         * Persist the state (scale, position, expanded/collapsed and min/max nodes) in the url or indexedDB. Default value - *null*
         * ```typescript       
         * var family = new FamilyTree('#tree', {
         *   state: {
         *       name: 'MyStateName',
         *       readFromLocalStorage: true,
         *       writeToLocalStorage: true,
         *       readFromIndexedDB: true,
         *       writeToIndexedDB: true,
         *       readFromUrlParams: true,                    
         *       writeToUrlParams: true
         *   }
         * });
         * ```          
         */          
        state?: {
            name?: string,
            readFromLocalStorage?: boolean,
            writeToLocalStorage?: boolean,
            readFromIndexedDB?: boolean,
            writeToIndexedDB?: boolean,
            readFromUrlParams?: boolean,
            writeToUrlParams?: boolean
        },
        /**
         * Configure the buildin edit form.
         * {@link https://balkan.app/FamilyTreeJS/Docs/Edit | See doc...}   
         */                
        editForm?: {
            readOnly?: boolean,
            titleBinding?: string,
            photoBinding?: string,            
            focusBinding?: string,
            addMore?: string,
            addMoreBtn?: string,
            addMoreFieldName?: string,
            saveAndCloseBtn?: string,
            cancelBtn?: string,
            generateElementsFromFields?: boolean,
            buttons?: {
                [key: string]: {
                    icon?: string,
                    text?: string,
                    hideIfEditMode?: boolean,
                    hideIfDetailsMode?: boolean
                } | null
            },
           // elements?: { [key: string]: FamilyTree.editFormElement | Array<FamilyTree.editFormElement> }
           elements?: Array<FamilyTree.editFormElement | Array<FamilyTree.editFormElement>>
        }
    }

    var ui: {
        defs(fromrender: string): string;
        lonely(config: Object): string;
        pointer(config: Object, action: FamilyTree.action, scale: number): string;
        node(node: FamilyTree.node, data: Object, animations: FamilyTree.anim, config: Object, x: number | undefined, y: number | undefined, nodeBinding: Object | undefined, action: FamilyTree.action, scale: number, sender: Object): string; 
        nodeBtns(config: Object, node: FamilyTree.node, action: FamilyTree.action, t: Object, sender: Object): string;
        expandCollapseBtn(family: FamilyTree, node: FamilyTree.node, layoutConfigs: any, action: FamilyTree.action, scale: number): string;
        link(node: FamilyTree.node, obj: Object, scale: number, bordersByRootIdAndLevel: Object, nodes: Object, action: FamilyTree.action): Array<string>;
        svg(width: number, height: number, viewBox: Array<number>, config: Object, content: string, scale: number): string;
        menuButton(config: Object): string;

    };

    var t: any;
}

declare class FamilyTreeBase {

    static icon: {
        png: (w: string| number, h: string | number, c: string) => string,
        pdf: (w: string | number| number, h: string | number, c: string) => string,
        svg: (w: string| number, h: string| number, c: string | number) => string,
        csv: (w: string| number, h: string| number, c: string| number) => string,
        excel: (w: string| number, h: string| number, c: string| number) => string,
        edit: (w: string| number, h: string| number, c: string| number) => string,
        details: (w: string| number, h: string| number, c: string| number) => string,
        remove: (w: string| number, h: string| number, c: string| number) => string,
        add: (w: string| number, h: string| number, c: string| number) => string,
        xml: (w: string| number, h: string| number, c: string| number) => string,
        link: (w: string| number, h: string| number, c: string| number) => string,
        happy: (w: string| number, h: string| number, c: string| number) => string,
        sad: (w: string| number, h: string| number, c: string| number) => string,
        share: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string,
        user: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string,
        addUser: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string,
        close: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string,
        ft: (w: string| number, h: string| number, c: string| number, x?: string| number, y?: string| number) => string
    }

    /**
     * Hides the tree menu
     * @param redraw 
     * @param callback called at the end of the animation
     */
    hideTreeMenu(redraw: boolean, callback?: () => void): void;

    /**
     * Shows tree menu
     * @param id node id
     * @param callback called at the end of the animation
     */
    showTreeMenu(id: string | number, callback?: () => void): void;


    /**
     * Adds child
     * @param data child node data
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...}  
     */
    addChildNode(data: object, callback?: () => void, fireEvent?: boolean): void;


    /**
     * Adds child and partner 
     * @param id id of the existing partner node
     * @param childData child data 
     * @param partnerData partner data
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...}       
     */
    addChildAndPartnerNodes(id: string | number, childData: object, partnerData: object, callback?: () => void, fireEvent?: boolean): void;

    /**
     * 
     * @param id id of the existing partner node
     * @param childIds ids of the child nodes
     * @param partnerData partner data
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...} 
     */
    addPartnerAndParentNodes(id: string | number, childIds: Array<string | number>, partnerData: object, callback?: () => void, fireEvent?: boolean): void;


    /**
     * Adds partner node
     * 
     * data.pids partner id should be an existing id
     * @param data new added partner data
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...}       
     */
    addPartnerNode(data: object, callback?: () => void, fireEvent?: boolean): void;


    /**
     * Adds parrent
     * @param childId node child id 
     * @param type mother or father 
     * @param data new added parent data
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...} 
     */
    addParentNode(childId:number | string, type: 'mid' | 'fid', data:object, callback?: () => void, fireEvent?: boolean): void;


    /**
     * Removes node if the node can be removed
     * @param id node id  to be removed
     * @param callback called at the end of the animation
     * @param fireEvent indicates if the update event will be called or not
     * {@link https://balkan.app/FamilyTreeJS/Docs/CreateProgrammatically | See doc...} 
     */
    removeNode(id:number | string, callback?: () => void, fireEvent?: boolean): void;

    /**
     * The on() method of the OrgChart class sets up a function that will be called whenever the specified event is delivered to the target.     * 
     * @category Event Listeners
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
     */
     on(type: "init" | "add" | "node-tree-menu-show" | "field" | "update" | "renderbuttons" | "label" | "render-link" | "redraw" | "expcollclick" | "exportstart" | "exportend" | "click" | "dbclick" | "slink-click" | "clink-click" | "up-click" | "import" | "adding" | "added" | "updated" | "key-down" | "visibility-change" | "renderdefs" | "render" | "prerender" | "screen-reader-text" | "removed" | "ready" | "ripple" | "node-initialized" | "node-layout", listener: (sender: FamilyTree, args?: any, args1?: any, args2?: any) => void | boolean): FamilyTree;

         /**
     * Removes an event listener previously registered. The event listener to be removed is identified using a combination of the event type and the event listener function itself. Returns true if success and false if fail.
     * @param type A string which specifies the type of event for which to remove an event listener
     * @param listener The event listener function of the event handler to remove from the event target
     */
    
    removeListener(type: "init" | "add" | "node-tree-menu-show" | "field" | "update" | "renderbuttons" | "label" | "render-link" | "redraw" | "expcollclick" | "exportstart" | "exportend" | "click" | "dbclick" | "slink-click" | "clink-click" | "up-click" | "import" | "adding" | "added" | "updated" | "key-down" | "visibility-change" | "renderdefs" | "render" | "prerender" | "screen-reader-text" | "removed" | "ready" | "ripple" | "node-initialized" | "node-layout", listener?: () => void): boolean;

    /**
     * Occurs when the node data has been updated, removed or added.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onUpdateNode((args) => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onUpdateNode(listener: (this: FamilyTree, args: {
        addNodesData: Array<object>,
        updateNodesData: Array<object>,
        removeNodeId: number | string
    }) => void): FamilyTree;

    /**
     * Occurs when node tree menu button is clicked. Use this event to modify the nodes in the tree menu.
     *  ```typescript     
     * var family = new FamilyTree('#tree', {});
     * family.onNodeTreeMenuShow((args) => {  
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onNodeTreeMenuShow(listener: (this: FamilyTree, args: {
        nodes: Array<object>,
        node: object
    }) => void): FamilyTree;
}



declare namespace FamilyTree {
    interface node {
        fid?: string | number,
                /**
         * mother id - same fid you provided in the source node, the default value is null if not provided or if node with the same id does not exist
         */
        mid?: string | number,
        /**
         *  partner parent id, it is the partner parent node id of the partner node, it is the same ppid you provided in the source node, the default value is undefined.
         */
    }
    interface options {
        nodeTreeMenu?: boolean
    }
    interface template {
        nodeTreeMenuButton: string,
        nodeTreeMenuCloseButton: string
    }
}
export default FamilyTree