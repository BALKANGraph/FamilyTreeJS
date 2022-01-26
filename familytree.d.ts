declare class FamilyTree {
    nodes: { [key: string | number]: FamilyTree.node };
    isVisible: boolean;

    /**
     * @param element HTML element or string selector for example '#tree'
     * @param options configuration options
     */
    constructor(element: HTMLElement | string, options?: FamilyTree.options);

    /**
     * Updates the node data, redraws the chart and fires update event.
     * @param data node data
     * @param callback function called when the animation completes
     * @param fireEvent if it set to true the update event is called
     */
    updateNode(data: object, callback?: () => void, fireEvent?: boolean): void;
    /**
     * Updates the node data
     * @param newData node data
     */
    update(newData: object): FamilyTree;
    /**
     * Removes specified node from nodes collection, redraws the chart and fires remove event.
     * @param id identification number of the node
     * @param callback called at the end of animation
     * @param fireEvent indicates if the remove event will be called or not
     */
    removeNode(id: string | number, callback?: () => void, fireEvent?: boolean): void;
    /**
     * Removes specified node from nodes collection
     * @param id identification number of the node
     */
    remove(id: string | number): FamilyTree;
    /**
     * Adds new node to the nodes collection, redraws the chart and fires remove event
     * @param data node data
     * @param callback called at the end of animation
     * @param fireEvent indicates if the add event will be called or not
     */
    addNode(data: object, callback?: () => void, fireEvent?: boolean): void;
    /**
     * Adds new node to the nodes collection
     * @param data node data
     */
    add(data: object): FamilyTree;
    /**
     * Gets node data.
     * @param id identification number of the node
     */
    get(id: string | number): object;
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
     */
    load(data: Array<object>): FamilyTree;
    /**
     * Loads nodes from xml.
     * @param xml Xml with node structure
     */
    loadXML(xml: string): FamilyTree;
    /**
     * Gets nodes as xml.
     */
    getXML(): string;
    /**
     * Draws the chart.
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
     * Gets the current scale of the chart.
     * @param viewBox 
     */
    getScale(viewBox?: Array<number>): void;
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
     * @param options { parentState: FamilyTree.COLLAPSE_PARENT_NEIGHBORS, childrenState: FamilyTree.COLLAPSE_SUB_CHILDRENS, rippleId: rippleId, vertical: false, horizontal: false });
     * @param callback called when the animation completes
     */
    center(nodeId: string | number, options?: {
        parentState: unknown,
        childrenState: unknown,
        rippleId: string | number,
        vertical: boolean,
        horizontal: boolean
    }, callback?: () => void): void;
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
    setLayout(layout: FamilyTree.layout | number, lcn?: string): void;
    /**
     * Sets orientation.
     * @param orientation  orientation type
     * @param lcn lyout config name for the specified sub tree
     */
    setOrientation(orientation: FamilyTree.orientation, lcn?: string): void;
    /**
     * Search in the chart.
     * @param value search for value
     * @param searchInFileds search in field names
     * @param retrieveFields retrive data for fields
     * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}            
     */
    search(value: string, searchInFileds?: Array<string>, retrieveFields?: Array<string>): void;
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
    /**
     * Exports the details form to PDF.
     * @param options export options
     * @param callback called when the export completes
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}        
     */
    exportPNGProfile(options: FamilyTree.exportOptions, callback?: () => void): void;
    /**
     * Exports to CSV
     * @param id if not defained exports all nodes if defined exports childrens
     * {@link https://balkan.app/FamilyTreeJS/Docs/Exporting | See doc...}            
     */
    exportCSV(id?: string | number): void;
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
    importXML(filename?: string): void;
    /**
     * Zoom out or zoom in the chart.
     * @param delta true for zoom in, false for zoom out or scale number, if scale is > 1 it will zoom in and scale < 1 zoom out.
     * @param center array [x, y], where x is x percantege from the width and y is y percentage from the height.
     * @param shouldAnimate should animate 
     * @param callback called when the animation completes
     */
    zoom(delta: boolean | number, center?: Array<number>, shouldAnimate?: boolean, callback?: () => void): void;


    /**
     * The on() method of the FamilyTree class sets up a function that will be called whenever the specified event is delivered to the target.     * 
     * @category Event Listeners
     * @param type A case-sensitive string representing the event type to listen for.
     * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
     */
    on(type: "init" | "field" | "update" | "add" | "remove" | "renderbuttons" | "label" | "render-link" | "drag" | "drop" | "redraw" | "expcollclick" | "exportstart" | "exportend" | "click" | "dbclick" | "slink-click" | "clink-click" | "up-click" | "import" | "adding" | "added" | "updated" | "key-down" | "visibility-change" | "renderdefs" | "render" | "prerender" | "screen-reader-text" | "removed" | "ready" | "ripple", listener: (sender: FamilyTree, args: unknown, args1: unknown, args2: unknown) => void | boolean): FamilyTree;

    /**
     * The onField() method of the FamilyTree class sets up a function that will be called whenever the specified event is delivered to the target.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onField((args) => {
     *      //return false; to cancel
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onField(listener: (args: { 
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
        value: unknown, 
        /**
         * svg or html element of the filed, can be changed in the event
         */
        element: string, 
        /**
         * name of the field
         */
        name: string 
    }) => void | boolean): FamilyTree;

    /**
     * Occurs when the nodes in FamilyTree has been created and loaded to the DOM.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onInit(() => {
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */
    onInit(listener: () => void): FamilyTree;
    
    /**
     * Occurs when the node data has been updated by updateNode method.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onUpdateNode((args) => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */    
    onUpdateNode(listener: (args: { 
        /**
         * old node data
         */
        oldData: object,
        /**
         * new node data
         */ 
        newData: object
    }) => void): FamilyTree;
    /**
     * Occurs when a node has been removed by removeNode method. 
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onRemoveNode((args) => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */        
    onRemoveNode(listener: (args: { 
        /**
         * node id
         */
        id: number | string, 
        /**
         * parent ids and sub tree parents ids that needs to be updated on the server. For example if you remove a node that has children all chilren nodes will change their pid to the parent node id of the removed node.
         */
        newPidsAndStpidsForIds: {
            newPidsForIds: {[key: string | number] : string | number},
            newStpidsForIds: {[key: string | number] : string | number}
    }}) => void): FamilyTree;

    /**
     * Occurs when a node has been added by addNode method.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onAddNode((args) => {     
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */  
    onAddNode(listener: (args: { 
        /**
         * new added data node
         */
        data: object
    }) => void): FamilyTree;
    /**
     * The onDrag event occurs when a node is dragged. *enableDragDrop* option has to be turned on.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onDrag(() => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */      
    onDrag(listener: (args: { 
        /**
         * dragged node id
         */
        dragId: string | number
    }) => void): FamilyTree;
    /**
     * The onDrop event occurs when a node is dropped. *enableDragDrop* option has to be turned on.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onDrop(() => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */          
    onDrop(listener: (args: { 
        /**
         * dragged node id
         */
        dragId: string | number, 
        /**
         * dropped node id
         */
        dropId: string | number 
    }) => void): FamilyTree;

    /**
     * The onRedraw event occurs when the chart is redrawed.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onRedraw(() => {
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */        
    onRedraw(listener: () => void): FamilyTree;

    /**
     * The onExpandCollpaseButtonClick event occurs when the chart is redrawed.
     *  ```typescript     
     * var chart = new FamilyTree('#tree', {});
     * chart.onExpandCollpaseButtonClick(() => {
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExpandCollpaseButtonClick(listener: (args: {
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
     * var chart = new FamilyTree('#tree', {});
     * chart.onExporStart(() => {
     *  args.styles += '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
     *  //return false; to cancel the operation
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */             
    onExporStart(listener: (args: 
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
     * var chart = new FamilyTree('#tree', {});
     * chart.onExporEnd(() => {
     *  //return false; to cancel the operation for example id you prefer the exported document to not download
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */         
    onExporEnd(listener: (args: 
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
     * var chart = new FamilyTree('#tree', {});
     * chart.onNodeClick(() => {
     *  //return false; to cancel the operation      
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */   
    onNodeClick(listener: (args: {
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
     * var chart = new FamilyTree('#tree', {});
     * chart.onNodeDoubleClick(() => {
     *  //return false; to cancel the operation 
     * });
     * ```
     * @category Event Listeners
     * @param listener 
     */       
    onNodeDoubleClick(listener: (args: {
        /**
         * clicked node data
         */
        data: object
    }) => void): FamilyTree;

    editUI: FamilyTree.editUI;
    searchUI: FamilyTree.searchUI;
    nodeMenuUI: FamilyTree.menuUI;
    nodeCircleMenuUI: FamilyTree.circleMenuUI;
    nodeContextMenuUI: FamilyTree.menuUI;
    menuUI: FamilyTree.menuUI;
    toolbarUI: FamilyTree.toolbarUI;

    static fileUploadDialog(callback: () => void): void;
    static isMobile(): boolean;
    /**
     * Checks if the used libraris is licnsed or not
     */
    static isTrial(): boolean;
    /**
     * Count all children nodes of the specified id.
     * @param chart FamilyTree instance
     * @param node 
     * @param count 
     */
    static childrenCount(chart: FamilyTree, node: FamilyTree.node, count?: number): number;
    static collapsedChildrenCount(chart: FamilyTree, node: FamilyTree.node, count?: number): number;
    static getRootOf(node: FamilyTree.node): FamilyTree.node;
    static isNEU(val: unknown): boolean;
    static gradientCircleForDefs(id: string | number, colors: Array<string> | string, r: number, strokeWidth: number): string;


    /**
     * Shows/hides lloading image. Usefull when export large data to pdf. You can override and show your own loading image.
     */
    static loading: {
        show: (chart: FamilyTree) => void,
        hide: (chart: FamilyTree) => void
    }

    static clinkTemplates: {
        orange?: FamilyTree.linkTemplate,
        blue?: FamilyTree.linkTemplate,
        yellow?: FamilyTree.linkTemplate,
        [key: string]: FamilyTree.linkTemplate
    }

    static slinkTemplates: {
        orange?: FamilyTree.linkTemplate,
        blue?: FamilyTree.linkTemplate,
        yellow?: FamilyTree.linkTemplate,
        [key: string]: FamilyTree.linkTemplate
    }


    static icon: {
        png: (w: string, h: string, c: string) => string,
        pdf: (w: string, h: string, c: string) => string,
        svg: (w: string, h: string, c: string) => string,
        csv: (w: string, h: string, c: string) => string,
        excel: (w: string, h: string, c: string) => string,
        edit: (w: string, h: string, c: string) => string,
        details: (w: string, h: string, c: string) => string,
        remove: (w: string, h: string, c: string) => string,
        add: (w: string, h: string, c: string) => string,
        xml: (w: string, h: string, c: string) => string,
        link: (w: string, h: string, c: string) => string,
        happy: (w: string, h: string, c: string) => string,
        sad: (w: string, h: string, c: string) => string,
        share: (w: string, h: string, c: string, x: string, y: string) => string,
        user: (w: string, h: string, c: string, x: string, y: string) => string
    }





    static templates :{ [key: string]: FamilyTree.template} ;




    static events: {
        on(type: "node-created" | "layout", listener: (args: unknown, args1: unknown, args2: unknown) => void): void
    };
    static state: { clear(stateName: string): void };

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
    * @ignore
    */
    static SEARCH_PLACEHOLDER: string;
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
    static MOVE_INTERVAL: number;
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

}

declare namespace FamilyTree {
    /**
     * deprecated, use FamilyTree.align.center isntead
     * @ignore
     */
    const CENTER: number;    
    /**
     * deprecated, use FamilyTree.align.orientation isntead
     * @ignore
     */
    const ORIENTATION: number;

    
    /**
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

    /**
     * deprecated, use FamilyTree.layout.normal isntead
     * @ignore
     */
    const normal: number;  
    
    /**
     * deprecated, use FamilyTree.layout.mixed isntead
     * @ignore
     */
    const mixed: number;
    /**
     * deprecated, use FamilyTree.layout.tree isntead
     * @ignore
     */    
    const tree: number;
    /**
     * deprecated, use FamilyTree.layout.treeLeftOffset isntead
     * @ignore
     */    
    const treeLeftOffset: any;
    /**
     * deprecated, use FamilyTree.layout.treeRightOffset isntead
     * @ignore
     */        
    const treeRightOffset: any;


    const scroll: {
        visible?: boolean,
        smooth?: number,
        speed?: number,
        safari?: { smooth?: number; speed?: number; },
        edge?: { smooth?: number; speed?: number; },
        chrome?: { smooth?: number; speed?: number; },
        firefox?: { smooth?: number; speed?: number; },
        opera?: { smooth?: number; speed?: number; }
    };

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
            nodeCircleMenuButton?: string,
            min?: template
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
        on(type: "show" | "element-btn-click" | "button-click" | "hide", listener: (sender: editUI, args: unknown, args1: unknown, args2: unknown) => void | boolean): editUI;
        /**
         * Shows the edit form for the specified node id
         * @param id node id
         * @param detailsMode If true the edit form is in read only mode
         * @param dontAnim 
         */
        show(id: string | number, detailsMode: boolean, dontAnim: boolean): void;
        /**
         * Hides the edit form
         */
        hide(): void;
        content(id: string | number, detailsMode: boolean, dontAnim: boolean, width: string, dontRenderButtons: boolean): string;
    }

    interface searchUI {
        init(obj: FamilyTree): void;
        /**
         * The on() method of the searchUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "searchclick", listener: (sender: FamilyTree, args: unknown, args1: unknown, args2: unknown) => void | boolean): searchUI;
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
    }

    interface menuUI {
        init(obj: FamilyTree, menu: { [key: string]: menu }): void;
        /**
         * The on() method of the menuUI interface sets up a function that will be called whenever the specified event is delivered to the target.     * 
         * @category Event Listeners
         * @param type A case-sensitive string representing the event type to listen for.
         * @param listener The object that receives a notification when an event of the specified type occurs. This must be a JavaScript function. 
         */        
        on(type: "show", listener: (sender: menuUI, args: unknown, args1: unknown, args2: unknown) => void | boolean): menuUI;
        /**
         * Shows menu next to html element
         * @param stickToElement 
         * @param firstNodeId 
         * @param secondNodeId 
         * @param menu 
         */
        showStickIn(stickToElement: HTMLElement, firstNodeId: string | number, secondNodeId: string | number, menu: { [key: string]: menu }): void;
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
        show(x: number, y: number, firstNodeId: string | number, secondNodeId: string | number, menu: { [key: string]: menu }): void;
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
        show(nodeId: string | number, menu: { [key: string]: menu }): void;
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
        on(type: "show" | "drag" | "drop" | "mouseenter" | "mouseout", listener: (sender: circleMenuUI, args: unknown, args1: unknown, args2: unknown) => void | boolean): circleMenuUI;
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



    type toolbar = {
        layout?: boolean,
        zoom?: boolean,
        fit?: boolean,
        expandAll?: boolean,
        fullScreen?: boolean
    }


    type exportOptions = {
        margin?: Array<number>,
        padding?: number,
        landscape?: boolean,
        filename?: string,
        scale?: "fit" | number,
        format?: "A1" | "A2" | "A3" | "A4" | "A5" | "A4" | "Letter" | "Legal",
        header?: string,
        footer?: string,
        openInNewTab?: boolean
    }

    type linkTemplate = {
        defs?: string,
        link?: string,
        label?: string,
        labelPosition?: string
    }
    type menu = {
        [key: string]: {
            text?: string,
            icon?: string,
            onClick?: Function,
            color?: string,
            draggable?: boolean
        }
    }
    type editFormElement = {
        type?: string,
        label?: string,
        binding?: string,
        options?: Array<unknown>,
        btn?: string,
        vlidators?: { required?: string, email?: string }
    }
    type link = {
        from?: string | number,
        to?: string | number,
        template?: string,
        label?: string
    }
    type orderBy = {
        field?: string,
        desc?: boolean
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
        treeRightOffset
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

    type node = {
        /**
         * the same id you provided in the source node
         */
        id?: string | number,
        /**
         * same pid you provided in the source node, the default value is null if not provided or if node with the same id does not exist
         */
        pid?: string | number,
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
         * template name, you can specify multiple templates with tags in one chart
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
        isSplit?: boolean | undefined
    }

    interface options  {
        /**
         * Enables or disables the browser events handlers like click, pan, zoom, pinch, etc. Default value - *true*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      interactive: false
         * });
         * ```
         */
        interactive?: boolean,

        /**
         * Color mode. Default value - *light*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      mode: "dark"
         * });
         * ```
         */
        mode?: "dark" | "light",
        /**
         * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need. Default value - *true*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      lazyLoading: false
         * });
         * ```
         */
        lazyLoading?: boolean,

        /**
         * With the drag and drop features enabled you can move nodes easily and change the tree structure. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      enableDragDrop: true
         * });
         * ```
         */
        enableDragDrop?: boolean,

        /**
         * Enables advanced search. Default value is true.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      enableSearch: false
         * });
         * ```
         */
        enableSearch?: boolean,

        /**
         * Enable touch instead of mouse for particular devices with touchscreen/touchpad/trackpad. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      enableTouch: true
         * });
         * ```
         */
        enableTouch?: boolean,
        /**
         * Enable keyboard navigation. Use "f" for find, arrows and space to navigate in the chart. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      enableKeyNavigation: true
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/KeyNavigation | See doc...}
         */
        enableKeyNavigation?: boolean,
        /**
         * Shows mini map over the expanded tree. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      miniMap: true
         * });
         * ```
         */
        miniMap?: boolean,
        /**
         * Enables edit, add, remove and other node operations. Also you can define your own node operation.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
        nodeCircleMenu?: FamilyTree.menu,
        /**
         * Customizable context menu. Also you can define your own node operation.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
         * Stops the chart locking to the top of the screen once you move it.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * - FamilyTree.action.pan - allows you to move the chart in any direction
         * 
         * Default value - *FamilyTree.action.details*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
         *      nodeMouseDbClick: FamilyTree.action.edit
         * });
         * ```
         */
        nodeMouseDbClick?: FamilyTree.action,
        /**
         * mouseScrool can accept the following values:
         * - FamilyTree.action.zoom - will zoom in/out on mouse scroll
         * - FamilyTree.action.ctrlZoom - will zoom in/out on mouse scroll and ctrl button is pressed
         * - FamilyTree.action.xScroll - left/right move of the chart on mouse scroll
         * - FamilyTree.action.yScroll - up/down move of the chart on mouse scroll
         * - FamilyTree.action.none - do nothing on mouse scroll
         * 
         * Default value - *FamilyTree.action.zoom*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      mouseScrool: FamilyTree.action.ctrlZoom
         * });
         * ```
         */
        mouseScrool?: FamilyTree.action,
        /**
         * Shows horizontal scrollbar. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      showXScroll: true
         * });
         * ```
         */
        showXScroll?: boolean ,
        /**
         * Shows vertical scrollbar. Default value - *false*.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *      showYScroll: true
         * });
         * ```
         */
        showYScroll?: boolean ,
        /**
         * Set template if you want to change the appearance of the chart. Family Tree JS comes with number of build-in templates:
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
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
                nodeCircleMenu?: FamilyTree.menu,
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
         * var chart = new FamilyTree('#tree', {
         *      min: true
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/MinMax | See doc...}
         */
        min?: false,
        /**
         * Node binding in Family Tree JS maps node data to node template parameters.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
         *   nodeBinding: {
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
         * var chart = new FamilyTree('#tree', {
         *   searchFields: ["name", "title", etc...]
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
        searchFields?: Array<string>,
        /**
         * Displays a field in the search result.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   searchDisplayField: "name"
         * });
         * ```
         * {@link https://balkan.app/FamilyTreeJS/Docs/Search | See doc...}
         */
        searchDisplayField?: string,
        /**
         * Search by weight of the fields.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * Array of node data JSON objects. nodes option is the data source of the chart. Node JSON objects could have unlimited number of properties, id, pid, ppid, stpid and tags are reserved node properties.
         * - id - unique identifier, it clould be integer or string
         * - pid - is the parent id
         * - stpid - subtree parent id
         * - ppid - parent partner id
         * - tags - array of strings
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   nodes: [
         *       { id: 1 },
         *       { id: 2, pid: 1, tags: ["Sales"] },
         *       { id: 3, stpid: 2  }
         *   ]
         * });
         * ```
         */
        nodes?: Array<string | number>,
        /**
         * Adds curved link.
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
         * The gap between each level. Default value - *60*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   levelSeparation: 50
         * });
         * ```
         */
        levelSeparation?: number,
        /**
         * The gap between nodes in a subtree. Default value - *20*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   siblingSeparation: 50
         * });
         * ```
         */
        siblingSeparation?: number,
        /**
         * The gap between subtrees. Default value - *40*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   subtreeSeparation: 50
         * });
         * ```
         */
        subtreeSeparation?: number,
        /**
         * The gap between nodes in vertical layout. Default value - *20*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   mixedHierarchyNodesSeparation: 5
         * });
         * ```
         */
        mixedHierarchyNodesSeparation?: number,
        /**
         * Set the assistant separation value. Default value - *100*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   assistantSeparation: 150
         * });
         * ```
         */
        assistantSeparation?: number,
        /**
         * Minimum gap between partner and node with partners. Default value - *50*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   minPartnerSeparation: 100
         * });
         * ```
         */
        minPartnerSeparation?: number,
        /**
         * Gap between partner links. Default value - *20*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   partnerChildrenSplitSeparation: 50
         * });
         * ```
         */
        partnerChildrenSplitSeparation?: number,
        /**
         * Gap between partners. Default value - *15*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   partnerNodeSeparation: 30
         * });
         * ```
         */
        partnerNodeSeparation?: number,
        /**
         * The number of colums if the chart has multiple root nodes. Default value - *10*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
         *   columns: 1
         * });
         * ```
         */
        columns?: number,
        /**
         * The padding option sets the padding area on all four sides of the FamilyTree. Default value - *30*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
         * 
         * Default value - *FamilyTree.layout.normal*
         * ```typescript     
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
         *   scaleInitial: FamilyTree.match.boundary
         * });
         * ```          
         * {@link https://balkan.app/FamilyTreeJS/Docs/Layout | See doc...}         
         */
        scaleInitial?: number | FamilyTree.match,
        /**
         * Determines the minimum scale factor. Default value - *0.1*
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
         *   scaleMin: 0.2
         * });
         * ```          
         */
        scaleMin?: number,
        /**
         * Determines the naximum scale factor. Default value - *5*
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
         *   scaleMax: 10
         * });
         * ```          
         */
        scaleMax?: number,
        /**
          * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array. Default value - *null*
          * ```typescript       
          * var chart = new FamilyTree('#tree', {
          *   orderBy: "orderId",
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```    
          * ```typescript       
          * var chart = new FamilyTree('#tree', {
          *   orderBy: [field: "orderId", desc: true],
          *   nodes: [
          *       { id: 10, pid: 1, orderId: 2 },
          *       { id: 11, pid: 1, orderId: 1 }
          *   ]
          * });
          * ```      
          */
        orderBy?: string,
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
         * var chart = new FamilyTree('#tree', {
         *   exportUrl: "https://balkan.app/export"
         * });
         * ```          
         */        
        exportUrl?: string,
        /**
         * Collapse specified level of the chart and its children if allChildren is true.
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
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
         * In the example above the second level of the chart will be collapsed but node with id 155 and its children will be expanded.
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
         *   align: FamilyTree.align.orientation
         * });
         * ```          
         */         
        align?: FamilyTree.align | number,
        /**
         * Can be used to control the transition of the nodes on expand/collapse operation. Default value - *func: FamilyTree.anim.outPow, duration: 200*
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
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
         * var chart = new FamilyTree('#tree', {
         *   roots: [2, 4]
         * });
         * ```          
         */           
        roots?: Array<string | number>,
        /**
         * Persist the state (scale, position, expanded/collapsed and min/max nodes) in the url or indexedDB. Default value - *null*
         * ```typescript       
         * var chart = new FamilyTree('#tree', {
         *   state: {
         *       name: 'StateForMyOrgChart',
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
            addMore?: string,
            addMoreBtn?: string,
            addMoreFieldName?: string,
            generateElementsFromFields?: boolean,
            buttons?: {
                [key: string]: {
                    icon?: string,
                    text?: string,
                    hideIfEditMode?: boolean,
                    hideIfDetailsMode?: boolean
                }
            },
            elements?: { [key: string]: FamilyTree.editFormElement | Array<FamilyTree.editFormElement> }
        }
    }
}export default FamilyTree