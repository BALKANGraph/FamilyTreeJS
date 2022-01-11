declare namespace FamilyTree {
    
    function isTrial(): boolean;

    function t(templateName: string, minimized?: boolean, scale?: number ) : any;

    enum orientation {
        top,
        left,
        right,
        bottom,
        top_left,
        bottom_left,
        right_top,
        left_top
    }
    enum action {
        /**
         * mouseScrool value
         */
        zoom,
        /**
         * mouseScrool value
         */
        scroll,
        /**
         * mouseScrool value
         */
        xScroll,
        /**
         * mouseScrool value 
         */
        yScroll,
        /**
        * Zoom on Ctrl + mouseScrool
        */
        ctrlZoom,
        /**
         * nodeMouseClick value
         */
        edit, 
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        details,
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        expandCollapse, 
        /**
         * nodeMouseClick, nodeMouseDbClick and mouseScrool value
         */
        none,
        update,
        centerNode,
        pan
    }
    enum scroll {
        visible,
    }

    enum match {
        height,
        width,
        boundary
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
        inOutBack
    }

    interface Loc {
        ppdfCmdTitle: string;
        ppdfSave: string;
        ppdfCancel: string;
        ppdfFormat: string;
        ppdfFitToDrwaing: string;
        ppdfA4: string;
        ppdfA3: string;
        ppdfA2: string;
        ppdfA1: string;
        ppdfLetter: string;
        ppdfLegal: string;
        ppdfLayout: string;
        ppdfPortrait: string;
        ppdfLandscape: string;
        ppdfFittopagewidth: string;
        ppdfMargin: string;
        ppdfHeader: string;
        ppdfFooter: string;
        ppdfScale: string;
    }
    
    const templates: any;

    const icon: any;

    const none: any;

    const CENTER: any;
    const ORIENTATION: any;
    
    const COLLAPSE: any;
    const EXPAND: any;

    const COLLAPSE_PARENT_NEIGHBORS: any;
    const COLLAPSE_SUB_CHILDRENS: any;

    const normal: any;  
    const mixed: any;
    const tree: any;
    const treeLeftOffset: any;
    const treeRightOffset: any;

    const slinkTemplates: any;
    
    const menuUI: any;
    
    const _guid: Function;
    const randomId: Function;

    var MINIMIZE: string;
    var MAXIMIZE: string;

    const state: State;

    const events: any;
    
    const wrapText: Function;
   
    const nodeMenu: any;
    const toolbarUI: any;
    const nodeMenuUi: any;
    const pdfPrevUI: any;
    const menuUi: any;
    const editUi: any;

    var SEARCH_PLACEHOLDER: string;

    const RES: any;

    const loc: Loc;
    
    const grCloseTag: any;
}

interface State {
    clear: Function;
}

interface Node {
    id: string | number,
    pid: string | number,
    spid: string | number,
    tags: Array <String>,
    [name: string]: any
}



interface NodeModel {
    id: string | number,
    pid: string | number,
    ppid: string | number,
    parent: NodeModel,
    stpid: string | number,
    stParent: NodeModel,
    isPartner: boolean,
    partnerSeparation: number,
    childrenIds: Array<string | number>,
    children: Array<NodeModel>,
    stChildrenIds: Array<string | number>,
    stChildren: Array<NodeModel>,
    tags: Array<string>,
    templateName: string,
    leftNeighbor: NodeModel,
    rightNeighbor: NodeModel,
    x: number,
    y: number,
    w: number,
    h: number,
    isAssistant: boolean,
    stContainerNodes: Array<NodeModel>,
    order: number,
    collapsed: boolean,
    level: number,
    min: boolean,
    subLevels: number,
    padding: number,
    lcn: string,
    isSplit: boolean
}

interface Menu {
    add?: any,
    edit?: any,
    details?: any,
    remove?: any,
    svg?: any,
    pdf?: any,
    png?: any,
    csv?: any,
    addInGroup?: any,
    addAsChild?: any,
    [name: string]: any,
}


interface Tags {
    [name: string]: Object,
}

interface FamilyTreeOptions {
    /**
     * FamilyTree JS can be displayed in "dark" or "light" modes by settong the mode option:
     * Default value: light;

    Code example:
 ```
    var chart = new FamilyTree(document.getElementById("tree"), {
        mode: 'dark',
    });
    ```
     */
    mode?: string,

    /**
     * Lazy loading is technique that defers loading of non-critical nodes at page load time. Instead, these non-critical nodes are loaded at the moment of need.
     * Default value: true

    Code example:
 ```
    var chart = new FamilyTree(document.getElementById("tree"), {
        lazyLoading: true;
    });
    ```
     */
    lazyLoading?: boolean,
    /**
     * Enables advanced search.

        Default value: true

        Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
        enableSearch: true,
    });
```
    */
    enableSearch?: boolean,
    /**
     * Specifies the orientation of the FamilyTree JS. could accept one of the following values:

- FamilyTree.orientation.top
- FamilyTree.orientation.bottom
- FamilyTree.orientation.right
- FamilyTree.orientation.left
- FamilyTree.orientation.top_left
- FamilyTree.orientation.bottom_left
- FamilyTree.orientation.right_top
- FamilyTree.orientation.left_top
Default value: FamilyTree.orientation.top

Code example:
``` 
        var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            orientation: FamilyTree.orientation.bottom
        });  
   ``` 
     */
    orientation?: FamilyTree.orientation,
    /**
     * mouseScrool can accept the following values:

    - FamilyTree.action.zoom - will zoom in/out on mouse scroll

    - FamilyTree.action.xScroll - left/right move of the chart on mouse scroll

    - FamilyTree.action.yScroll - up/down move of the chart on mouse scroll

    - FamilyTree.action.none - do nothing on mouse scroll

    Default value: FamilyTree.action.zoom


    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       mouseScrool: FamilyTree.action.zoom
    });
```
    */
    mouseScrool?: FamilyTree.action,
    /**
     * Node binding in FamilyTree JS maps node data to node template parameters.

Code example:
```
      var chart = new FamilyTree(document.getElementById("family-tree"), {
            nodeBinding: {
                field_0: "name"
            },
            nodes: [
                { id: 1, name: "Amber McKenzie" },
                { id: 2, pid: 1, name: "Ava Field" },
                { id: 3, pid: 1, name: "Peter Stevens" }
            ]
        });
 ```   
In the example above the field name will be bount to field_0 from the template.

Also you can define your own field in the templae, for more information go to Fields page on our website.
     */
    nodeBinding?: Object,
    /**
     * With the drag and drop features of FamilyTree, you can move nodes easily.
     * Default value: true

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
            enableDragDrop: true,
    });
```
    */
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    /**
     * Enables edit, add, remove and other node operations. Also you can define your own node operation for more information see Node Menu Item

        Default value: null

        Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
	    nodeMenu:{
                details: {text:"Details"},
                edit: {text:"Edit"},
                add: {text:"Add"},
                remove: {text:"Remove"}       
            },
    });
```
     */
    nodeMenu?: Menu,
    /**
     * Context menu. Also you can define your own node operation for more information see Menu

Default value: null

Code example:
```
     var chart = new FamilyTree(document.getElementById("tree"), {
	    nodeContextMenu:{
                details: {text:"Details"},
            	edit: {text:"Edit"},
            	add: {text:"Add"},
            	remove: {text:"Remove"}
            },
        ...
    });
 ```
    */
    nodeContextMenu?: Menu,
    /**
     * Use dragDropMenu with drag & drop and grouping feature.

    Default value: null

    Code example:
```
    var chart = new FamilyTree(document.getElementById("tree"), {
	    dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
    });
```
    */
    dragDropMenu?: Menu,
    /**
     * Enables export to excel, export to svg and other FamilyTree operations. Also you can define your own FamilyTree operation for more information see FamilyTree.ImportFormCSV

    Default value: null

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       menu: {
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
       },
    });
```
    */
    menu?: Menu,
    /**
     * A toolbar is a set of icons or buttons.

Default value: null

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: false
            },
            ...
        }); 
```    
     */
    toolbar?: Object,
    /**
     * Stop the org chart locking to the top of the screen once you move it.

Default value: true

Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
        sticky: false
        ...
    });
 ```    
     */
    sticky?: boolean,
    /**
     * nodeMouseClick can accept the following values:

    - FamilyTree.action.edit - will open the edit view for the clicked node on the right hand side
    
    - FamilyTree.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
     
    - FamilyTree.action.expandCollapse - will expand or collapse the children nodes
     
    - FamilyTree.action.none - do nothing on node click event
     
    Default value: FamilyTree.action.details

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       nodeMouseClick: FamilyTree.action.edit
    });
```    
     */
    nodeMouseClick?: FamilyTree.action,



    /**
     * nodeMouseDbClick can accept the following values:

- FamilyTree.action.edit - will open the edit view for the clicked node on the right hand side
- FamilyTree.action.details - will open the details view for the clicked node on the right hand side, the details view is very similar to the edit view the only difference is that is read only.
- FamilyTree.action.expandCollapse - will expand or collapse the children nodes
- FamilyTree.action.none - do nothing on node double click event

Default value: FamilyTree.none

Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       nodeMouseDbClick: FamilyTree.action.edit
        ...
    });
   ```  
     */
    nodeMouseDbClick?: FamilyTree.action,
    /**
     * showXScroll can accept the following values:

    - FamilyTree.none

    - FamilyTree.scroll.visible - Will display horisontal scroll bar

    Default value: FamilyTree.none

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       showXScroll: FamilyTree.scroll.visible
    });
```
    */
    showXScroll?: FamilyTree.scroll,
    /**
     * 
     * showYScroll can accept the following values:

    - FamilyTree.none

    - FamilyTree.scroll.visible - Will display vertical scroll bar

    Default value: FamilyTree.none

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       showYScroll: FamilyTree.scroll.visible
    });
```
    */
    showYScroll?: FamilyTree.scroll,
    /**
    Set template if you want to change the appearance of the chart. FamilyTree JS comes with number of build-in templates:

    - ana
    - ula  
    - olivia   
    - belinda
    - rony
    - mery
    - polina
    - mila
    - diva
    - luba
    - base
    - deborah
    
    Also you can define your own template. For more information see Creating Custom Template

    Default value: ana

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
       template: "ana"
    });
```
    */
    template?: string,
    /**
     * With tags option you can:

    - Set specific template for tagged nodes

    - Set the default state (expand/collapse) for tagged nodes

   - Define a group for tagged nodes

    - Set node as assistant for tagged nodes

    - Set node menu items for tagged nodes


    Set specific template for tagged nodes. See Multiple Templates in one chart for more details.

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
        tags: {
            Management: {
                template: "rony"
            }
        },     
        nodes: [
            { id: 1, tags: ["Management"] },        
        ]
    });
```
    Set the default state (expand/collapse) for tagged nodes. See Expand/Collapse for more details.

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
        tags: {
            hide: {
                state: FamilyTree.COLLAPSE
            }
        },
        nodes: [
            { id: "1" },
            { id: "2", tags: ["hide"] },
            { id: "3" }
        ]
    });
```    

    Define a group for tagged nodes. See Grouping for more details.

    Code example:
```
     var chart = new FamilyTree(document.getElementById("tree"), {
        tags: {
            HRs: {
                group: true,
                groupName: "HR Team",
                groupState: FamilyTree.EXPAND,
                template: "group_grey"
            }
        },
        nodes: [
            { id: 1, tags: ["HRs"] }
        ]
    });     
```    
    Set node as assistant for tagged nodes. See Assistant for more details.

    Code example:
```
     var chart = new FamilyTree(document.getElementById("tree"), {
        tags: {
            assistant: {
                template: "mery"
            }
        },
        nodes: [
            { id: 1, tags: ["assistant"] }
        ]
    });     
```    

    Set node menu items for tagged nodes. See Node Menu Item for more details.

    Code example:
``` 
    var chart = new FamilyTree(document.getElementById("tree"), {
        tags: 
            customMenuItems: {
                nodeMenu: {
                    add: { text: "Add New" }
                }
            }
          },
    });
```
     */
    tags?: Tags,
    /**
     * Link binding in FamilyTree JS maps node data to link template parameters.

Code example:
```
        var chart = new FamilyTree(document.getElementById("tree"), {
            linkBinding: {
                link_field_0: "createdAt"
            },
            nodes: [
                { id: "1", name: "Amber McKenzie"  },
                { id: "2", pid: "1", createdAt: "Since 08/08/2018" },
                { id: "3", pid: "1", createdAt: "Since 05/04/2018" }
            ]
        }); 
```
        */
    linkBinding?: Object,
    /**
     * Search by the fields defined in searchFields.

Default value: Empty array

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            searchFields: ["name", "title", etc...],
            ...
        }); 
 ```
        */
    searchFields?: Array<string>,
    /**
     * Array of node data JSON objects. nodes option is the data source of the chart.

Code example:
``` 
        var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            nodes: [
                { id: "1" },
                { id: "2", pid: "1" },
                { id: "3", pid: "1", tags: ["Sales"] }
            ]
        }); 
    ```
Node JSON objects could have unlimited number of properties, id, pid and tags are reserved node properties.

- id - unique identifier, it clould be integer or string
- pid - is the parent id
- tags - array of strings

     */
    nodes?: Array<Object>,
    /**
     *  Add C link.

Default value: null

Code example:
```
    var chart = new FamilyTree(document.getElementById('tree'), {
            clinks: [
                {from: 4, to: 0, label: 'text'}, 
                {from: 4, to: 5, template: 'blue', label: '4 reports to 5' },
                {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
            ]   
            ...
    });
 ```  
     */
    clinks?: Array<Object>,
    /**
     *  Add S link.

Default value: null

Code example:
``` 
     var chart = new FamilyTree(document.getElementById('tree'), {
            slinks: [
                {from: 4, to: 0, label: 'text'}, 
                {from: 4, to: 5, template: 'blue', label: 'reports to' },
                {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
            ]   
            ...
        });
   ``` 
     */
    slinks?: Array<Object>,
    /**
     * The gap between each level.

Default value: 60

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            levelSeparation: 50
        });
 ```
        */
    levelSeparation?: number,
    /**
     * The gap between nodes in a subtree.

Default value: 20

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            siblingSeparation: 50
        });  
 ```   
     */
    siblingSeparation?: number,
    /**
     * The gap between subtrees.

Default value: 40

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            subtreeSeparation: 50
        }); 
 ```
        */
    subtreeSeparation?: number,
    /**
     * The gap between nodes in vertical layout.

Default value: 20

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            mixedHierarchyNodesSeparation: 5
        }); 
 ```
        */
    mixedHierarchyNodesSeparation?: number,
    /**
     * The padding option sets the padding area on all four sides of the FamilyTree.

Default value: 30

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            padding: 20
        });  
 ```   
     */
    padding?: number,
    /**
     * The layout of the FamilyTree

- FamilyTree.normal
- FamilyTree.mixed
- FamilyTree.tree
- FamilyTree.treeLeftOffset
- FamilyTree.treeRightOffset
Default value: FamilyTree.normal

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            layout: FamilyTree.mixed
        });  
 ```   
     */
    layout?: FamilyTree,
    /**
     * The scale factor determines what fraction of the entire scale is visible at one time.

- FamilyTree.match.height
- FamilyTree.match.width
- FamilyTree.match.boundary
- [float]

Default value: 1

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            scaleInitial: 0.5
        });  
 ```
        For more information go to Layout page on our website.
     */
    scaleInitial?: FamilyTree.match | number,
    /**
     * Determines the minimum scale factor.

Default value: 0.1

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            scaleMin: 0.2
        });  
 ```
        */
    scaleMin?: number,
    /**
     * Determines the naximum scale factor.

Default value: 5

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            scaleMax: 10
        });  
 ```
        */
    scaleMax?: number,
    /**
     * The orderBy option is used to sort the nodes in ascending order by specified field. The default order is by nodes order in the nodes array.

Default value: null

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            ...
            orderBy: "orderId",
            nodes: [
                ...
                { id: 10, pid: 1, orderId: 2 },
                { id: 11, pid: 1, orderId: 1 }
                ...
            ]
        }); 
```
In the example above node with id 11 will be before node with id 10. orderBy can be set to any property from the node JSON object, string or integer.


     */
    orderBy?: string,
    editUI?: Object,
    searchUI?: Object,
    xScrollUI?: Object,
    yScrollUI?: Object,
    nodeMenuUI?: Object,
    nodeContextMenuUI?: Object,
    toolbarUI?: Object,
    notifierUI?: Object,
    //dragDropMenuUI?: Object, // removed
    menuUI?: Object,
    /**
     * The URL to the export server.

Default value: https://balkan.app/export

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            exportUrl: "https://balkan.app/export",
            ...
        }); 
 ```
        */
    exportUrl?: string,
    /**
     * Collapse specified level of the chart and its children if allChildren is true.

Code example:
```
        var chart = new FamilyTree(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            ...
        });
   ``` 
     */
    collapse?: Object,
    /**
     * Expand specified node ids and its children if allChildren is true.

The expand option works only if collapse is set.

In the example above the second level of the chart will be collapsed but node with id 155 and its children will be expanded.

Code example:
```
        var chart = new FamilyTree(document.getElementById("tree"), { 
            collapse: {
                level: 2,
                allChildren: true
            },
            expand:{
                nodes: [155],
                allChildren: true
            }
            ...
        });
   ``` 
     */
    expand?: Object,
    /**
     *  The align option specifies the alignment of the nodes inside FamilyTree JS.

Default value: FamilyTree.CENTER

- FamilyTree.CENTER - centered
- FamilyTree.ORIENTATION - according to the orientation option

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            align: FamilyTree.ORIENTATION,
            ...
        }); 
 ```   
     */
    align?: FamilyTree,
    UI?: FamilyTree,
    /**
     *Can be used to control the transition of the nodes on expand/collapse operation.

Default value: func: FamilyTree.anim.outPow, duration: 200

duration: defines how long time an animation should take to complete

func: Easing functions specify the speed at which an animation progresses at different points within the animation. Can accept one of the following values:

- FamilyTree.anim.inPow
- FamilyTree.anim.outPow
- FamilyTree.anim.inOutPow
- FamilyTree.anim.inSin
- FamilyTree.anim.outSin
- FamilyTree.anim.inOutSin
- FamilyTree.anim.inExp
- FamilyTree.anim.outExp
- FamilyTree.anim.inOutExp
- FamilyTree.anim.inCirc
- FamilyTree.anim.outCirc
- FamilyTree.anim.inOutCirc
- FamilyTree.anim.rebound
- FamilyTree.anim.inBack
- FamilyTree.anim.outBack
- FamilyTree.anim.inOutBack

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            anim: {
                func: FamilyTree.anim.outBack,
                duration: 500
            },
            ...
        });  
 ```
        */
    anim?: Object,
    /**
     * Can be used to control the zooming sensitivity.

Default value: speed: 120, smooth: 12

Code example:
```
         var chart = new FamilyTree(document.getElementById("tree"), {
            zoom: {
                speed: 130,
                smooth: 10
            },
            ...
        }); 
 ```   
     */
    zoom?: Object,
    roots?: Array<number>,
    onUpdate?: string,
    onRemove?: string,
    onAdd?: string,
    onRedraw?: string,
    onImageUploaded?: string,
    onClick?: string,
    onDbClick?: string,
    onExpCollClick?: string | Function,
    onExportStart?: string | Function,
    onExportEnd?: string | Function,
    onSearchClick?: string | Function,
    onReady?: string | Function,
    assistantSeparation?: number,
    columns?: number,

    state?: Object,

    minPartnerSeparation?: number,
    partnerChildrenSplitSeparation?: number,
    partnerNodeSeparation?: number,
    miniMap?: boolean,

    searchFieldsWeight?: Object,
    searchDisplayField?: String,

    enableKeyNavigation?: boolean,
    nodeCircleMenu?: Object,

    editForm?: Object

}



declare class FamilyTree {
    nodes: Array<Node>;
    nodeCircleMenuUI: any;
    editUI: any;
    menuUI: any;
    nodeMenu: any;
    nodeMenuUI: any;
    toolbarUI: any;
    nodeContextMenuUI: any;
    config: any;
   // static searchUI: any;
    searchUI: any;
    _layoutConfigs: any;
    
    constructor(element: HTMLElement, options: FamilyTreeOptions);


    /** 
     * Returns the node data for given node id
     * 
     Signature:
     ```
     chart.get(nodeId);
 ```
     Code example:
```
        var node = chart.get(5);
 ```   
     * @param nodeId

     * Returns JSON data */

    get(nodeId: string | number) : Node;

    /**
     * Updates the node JSON object.
     * 
      * Signature:
        ``` 
         chart.updateNode(nodeJSONdata, callback, fireEvent);
         ```   
      * Parameters:
      * @param nodeJSONdata - node json data
      * @param callback - (optional) callback function cakked when the animation colpletes
      * @param fireEvent - (optional) if it set to true the update event is called
      * 
      * Code example:
        ```
        chart.updateNode({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
        ```   
        Will update the node with id 4 and will redraw the chart.
      */
     
    updateNode(nodeJSONdata: Object, callback?: Function, fireEvent?: boolean) : void;

     /**
      * Updates the node JSON object.
      * 
      * Signature:
        ``` 
        chart.update(nodeJSONdata);
        ``` 
      * 
      Parameters:
      * @param nodeJSONdata - node json data
      *
      Code example:
        ```
         chart.update({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
        ```   
        Will find the node with id 4 but it will not redraw the chart, you can use this method when you need to update two or more nodes, then call the draw function. Returns the chart object.
      */
    update(nodeJSONdata: Object) : Object;
 
     /**
      * Removes specified node from nodes collection.
      * 
      *  Signature:
        ```
        chart.removeNode(nodeId, callback, fireEvent);        
        ```   
      * Parameters: 
      * @param nodeId - id of the node
      * @param callback - (optional) callback function will be called at the end of animation
      * @param fireEvent - (optional) indicates if the remove event will be called or not
      * 
      * Code example:
        ``` 
        chart.removeNode(5);
        ```   
        Will remove node with id 5 and will redraw the chart.
      */
     
    removeNode(nodeId: string | number, callback?: Function, fireEvent?: boolean): void;    

    /**
     *Removes specified node from nodes collection.

        Signature:
        ``` 
        chart.remove(nodeId);
        ```       
        Parameters:

     * @param nodeId - id of the node
     *
     Code example:
        ```
        chart.remove(5);
        ```   
    Will remove node with id 5 but it will not redraw the chart, you can use this method when you need to remove two ore more nodes, then call the draw function. Returns the chart object. 
     */
    remove(nodeId: string | number): Object;   

    /**
     * * Adds new node to the nodes collection.
     * 
     * Signature:
        ```
         chart.addNode(nodeJSONdata, callback, fireEvent);
        ```   
     * 
     Parameters:
     * @param nodeJSONdata - node JSON data
     * @param callback - (optional) callback function will be called at the end of animation
     * @param fireEvent - (optional) indicates if the add event will be called or not
     * 
     * Code example:
        ```
        chart.addNode({ id: 4, pid: 2, name: "Name 1", title: "Title 1" });
        ```    
     */

    addNode(nodeJSONdata: Object, callback?: Function, fireEvent?: boolean): void;

    /**
     * Adds new node to the nodes collection.

    Signature:
    ```
            chart.add(nodeJSONdata);
    ```   
    Parameters:

    * @param nodeJSONdata - node JSON data
    *
    Code example:
    ```
            chart.add({ id: 4, pid: 2, name: "Name 1", title: "Title 1" });
    ```   
   Will add new node but it will not redraw the chart, you can use this method when you need add two or more nodes, then call the draw function. Returns the chart object.
     */
    add(nodeJSONdata: Object) : Object;

    /**
     * Adds a link between two nodes.

Signature:
```
         chart.link(fromNodeId, toNodeId);
 ```

Parameters:

- fromNodeId - the id of the child node
- toNodeId - the id of the parent node

Code example:
```
         chart.link(5, 6);
```
It will create a link from node 5 to node 6.
     * @param fromNodeId 
     * @param toNodeId 
     */
    link(fromNodeId: string | number, toNodeId: string | number): void;

    /**
     * Adds a link between two nodes.

Signature:
```
         chart.linkNode(fromNodeId, toNodeId);
 ```   
Parameters:

- fromNodeId - the id of the child node
- toNodeId - the id of the parent node

Code example:
```
         chart.linkNode(5, 6);
 ```   
It will create a link from node 5 to node 6 and will redraw the chart.
     * @param fromNodeId 
     * @param toNodeId 
     */
    linkNode(fromNodeId: string | number, toNodeId: string | number) : void;

    /**
     * Center specified node on the screen.

Signature:
```
         chart.center(nodeId, options, callback);
 ```   
Parameters:

- nodeId - the id of the node
- options - { parentState: FamilyTree.COLLAPSE_PARENT_NEIGHBORS, childrenState: FamilyTree.COLLAPSE_SUB_CHILDRENS, rippleId: rippleId, vertical: false, horizontal: false });
- callback - callback function (optional)

Code example:
```
         chart.center(5,     {
                parentState: FamilyTree.COLLAPSE_PARENT_NEIGHBORS,
                childrenState: FamilyTree.COLLAPSE_SUB_CHILDRENS,
                rippleId: 1,
                vertical: true,
                horizontal: false
            }););
 ```   
     * @param nodeId 
     * @param options 
     * @param callback
     */
    center(nodeId: string | number, options: Object, callback?: Function ) : void;

    /**
     * Animate specified node with ripple animation - highlight the node.

Signature:
```
         chart.ripple(nodeId);
```
Parameters:

- nodeId - the id of the node

Code example:
```
        chart.ripple(5);
```
        * @param nodeId 
     */
    ripple(nodeId: string | number) : void;

    /**
     * Gets the current scale of the chart.

Signature:
``` 
        chart.getScale();
   ``` 
Code example:
``` 
        var scale = chart.getScale();
   ```
        */
    getScale() : number;

    /**
     * Zoom out or zoom in the chart.

Signature:
``` 
        chart.zoom(delta, center, anim, callback);
   ``` 
Parameters:

- delta - True for zoom in, false for zoom out or scale number, if scale is > 1 it will zoom in and scale < 1 zoom out.
- center - Array [x, y], where x is x percantege from the width and y is y percentage from the height. (optional)
- anim - true, false (optional)
- callback - callback frunction (optional)

Code example:
```
         chart.zoom(2, [20,20]);
 ```
         * @param delta 
     * @param center 
     * @param [anim] 
     * @param callback
     */
    zoom(delta: boolean | number, center: Array<number>, anim? : boolean, callback?: Function) : void;

    /**
     * Exports the chart to svg file.

Signature:
``` 
        chart.exportSVG(options, callback);
   ``` 

Code example:
``` 
         chart.exportSVG({
            filename: "MyFamilyTree.svg", 
            nodeId: 5, 
            openInNewTab: false,
            expandChildren: true, 
            padding: 10
        });
   ```
   Parameters:
        * @param options - export options
     * @param callback - (optional) calls when the export completes
     */

    exportSVG(options: Object, callback?: Function) : void;

    /**
     * Exports the chart to png file.

Signature:
```
         chart.exportPNG(options, callback);

 ```   
Parameters:

 * @param options - export options
 * @param callback - (optional) calls when the export completes

Code example:
```
        chart.exportPNG({
            filename: "MyFamilyTree.png", 
            nodeId: 5, 
            openInNewTab: false,
            expandChildren: true, 
            margin: [10,20,10,20],
            padding: 10
        });
 ```
     */
    exportPNG(options: Object, callback?: Function) : void;

    /**
     * Exports the chart to pdf file.

Signature:
``` 
        chart.exportPDF(options, callback);
  ```  
Parameters:

   * @param options - export options
   * @param callback - (optional) calls when the export completes

Code example:
``` 
        chart.exportPDF({
            landscape: true, //false
            format: "A4", //fit
            filename: "MyFamilyTree.pdf", 
            nodeId: 5, 
            openInNewTab: false,
            expandChildren: true, 
            margin: [10,20,10,20],
            padding: 10,
            header: 'My header',
            footer: 'Page {current-page} of {total-pages}',
            scale: 'fit' //100
        });
   ``` 
  
     */
    exportPDF(options: Object, callback?: Function) : void;

    /**
     * Exports the chart to CSV file.

Signature:
```
          chart.exportCSV(filename);
 ```   
Parameters:

     * @param filename - optional


Code example:
``` 
    chart.exportCSV("MyFamilyTree.svg");
   ```
   
     */
    exportCSV(filename?: String) : void;

        /**
     * Exports the chart to XML file.

Signature:
``` 
        chart.exportXML(filename);
   ``` 
Parameters:

- filename - the name of the file

Code example:
``` 
        chart.exportXML("MyFamilyTree.svg");
   ```
        * @param filename 
     */
    exportXML(filename: string) : void;

    /**
     * Import CSV file.

Signature:
``` 
        chart.importCSV();
   ``` 
Code example:
```
         chart.importCSV();
 ```
         */
    importCSV() : void;

    /**
     * Import XML file.

Signature:
``` 
        chart.importXML();
   ``` 
Code example:
``` 
        chart.importXML();
   ```
        */
    importXML() : void;

    /**
     * Draws the chart.

Signature:
``` 
        chart.draw(action, actionParams, callback);
   ``` 
Parameters:

- * @param action - (optional) FamilyTree.action.expandCollapse, FamilyTree.action.update and FamilyTree.action.centerNode
- * @param actionParams - (optional) parameters of the action
- * @param callback - (optional) called after the draw

Code example:
``` 
        chart.draw();
   ```
         
     */
    draw(action? : FamilyTree.action, actionParams?: Object, callback?: Function) : void;

    /**
     * Expand specified nodes.

Signature:
```
         chart.expand(id, ids, callback);
 ```   
Parameters:

- id - the id of the node that will not move
- ids - node ids that will be expanded
- callback - (optional) called after the animation completes

Code example:
``` 
        chart.expand(5, [155]);
   ```
        * @param id 
     * @param ids 
     * @param [callback] 
     */
    expand(id: string | number, ids: Array<string | number>, callback?: Function) : void;

    /**
     * Collapse specified nodes.

Signature:
``` 
        chart.collapse(id, ids, callback);
   ```
Parameters:

- id - the id of the node that will not move
- ids - node ids that will be collapsed
- callback - (optional) called after the animation completes

Code example:
```
         chart.collapse(5, [155]);
 ```
         * @param id 
     * @param ids 
     * @param [callback] 
     */
    collapse(id: string | number, ids: Array<string | number>, callback?: Function) : void;

    /**
     * Fits the content to the visible area.

Signature:
```
         chart.fit();
 ```   
Code example:
``` 
        chart.fit();
   ```
        */
    fit(): void;

    /**
     * Load nodes.

Signature:
``` 
        chart.load(nodesJsonArray);
   ``` 
Code example:
```
         chart.load([{id: 1}]);
 ```
     * @param jsonArray 
     */
    load(jsonArray: Array<Object>) : void;

    /**
     *Load nodes from xml.

Signature:
```
         chart.loadXML(xmlAsText);
 ```   
Code example:
``` 
        chart.loadXML('<?xml version="1.0" encoding="utf-8" ?><nodes><node id="1" name="plamen"/><node id="2" pid="1" name="ivan"/></nodes>');
   ```
        * @param xmlAsText 
     */
    loadXML(xmlAsText: string) : void;

    /**
     * Gets nodes as xml.

Signature:
```
 
        chart.getXML();
    
Code example:

 
        var xml = chart.getXML();
    
     * @returns xml 
     */
    getXML() : string;

    /**
     * Adds clink.

Signature:
```
         chart.addClink(fromId, toId, label, template);
 ```   
Code example:
```
         chart.addClink(5, 1, 'lorem ipsum', 'blue');
 ```
 Predefined templates:
  - orange
  - blue
  - yellow
         * @param fromId 
     * @param toId 
     * @param label 
     * @param template 
     */
    addClink(fromId: string | number, toId: string | number, label?: string, template?: string) : void;

    /**
     * Removes clink.

Signature:
``` 
        chart.removeClink(fromId, toId);
   ``` 
Code example:
``` 
        chart.removeClink(5, 1);
   ```
        * @param fromId 
     * @param toId 
     */
    removeClink(fromId: string | number, toId: string | Number): void;

    /**
     * Expand/Collapse to level.

Signature:
``` 
        chart.expandCollapseToLevel(id, collapse, expand, callback);
   ``` 
Code example:
```
         chart.expandCollapseToLevel({
                level: 2
            }, {
                nodes: [155]
            }, function(){
                console.log('callback')
            });
 ```
            * @param id 
     * @param collapse 
     * @param expand 
     * @param callback 
     */
    expandCollapseToLevel(id: string | number, collapse: Object, expand: Object, callback: Function) : void; // How works this one ?


    /**
     * Destroys the object.

Signature:
``` 
        chart.destroy();
   ```
        */
    destroy(): void;

    /**
     * Adds slink.

Signature:
``` 
        chart.addSlink(fromId, toId, label, template);
   ``` 
Code example:
``` 
        chart.addSlink(5, 1, 'lorem ipsum', 'blue');
   ```
        * @param fromId 
     * @param toId 
     * @param label 
     * @param template 
     */
    addSlink(fromId: string | number, toId: string | number, label: string, template: string) : void;


    /**
     * Removes slink.

Signature:
``` 
        chart.removeSlink(fromId, toId);
   ``` 
Code example:
``` 
        chart.removeSlink(5, 1);
   ```
        * @param fromId 
     * @param toId 
     */
    removeSlink(fromId: string | number, toId: string | number) : void;

    on(action: string, fun: Function): void;
    
    getNode(id: string | number): NodeModel;

    /**
     * Maximize the node. Without parameters maximize all nodes.
     * 
      Signature:
     * ```
     * chart.maximize(id, horizontalCenter, verticalCenter, callback);
     * ```
     * @param id - (optional) the id of the node
     * @param horizontalCenter - (optional) center horizontally (true,false)
     * @param verticalCenter  - (optional) center vertically (true,false)
     * @param callback - (optional) callback function is called when the animation completes
     *
     Code example:
     * ```
     * chart.maximize(5);
     * ``` 
     */
    maximize(id?: string | number, horizontalCenter?: boolean, verticalCenter?: boolean, callback?: Function) : void;
 
       /**
     * Minimize  the node. Without parameters minimize all nodes.
     * 
      Signature:
     * ```
     * chart.minimize(id, callback);
     * ```
     * @param id - (optional) the id of the node
     * @param callback - (optional) callback function is called when the animation completes
     *
     Code example:
     * ```
     * chart.minimize(5);
     * ``` 
     */
    minimize(id?: string | number, callback?: Function) : void;

    /**
     * Set orientation.
     * 
     * Signature:
     * ```
     * chart.setOrientation(orientation, lyoutConfigName);
     * ```
     * 
     * Parameters:
     * @param orientation  - orientation type, FamilyTree.orientation.top, FamilyTree.orientation.bottom, FamilyTree.orientation.right, FamilyTree.orientation.left, FamilyTree.orientation.top_left, FamilyTree.orientation.bottom_left, FamilyTree.orientation.right_top and FamilyTree.orientation.left_top
     * @param lyoutConfigName  - (optional) lyout config name for the specified sub tree
     *
     Code example:
     ```
     chart.setOrientation(FamilyTree.orientation.bottom);
     ```   
     */
    setOrientation(orientation: FamilyTree.orientation, lyoutConfigName?: string) : void;

    /**
     * Set layout.
     * 
     * Signature:
     * ```
     * chart.setLayout(layout, lyoutConfigName);
     * ```
     * Parameters:
     * @param layout - layout type, FamilyTree.normal, FamilyTree.mixed, FamilyTree.tree, FamilyTree.treeLeftOffset and FamilyTree.treeRightOffset
     * @param lyoutConfigName - (optional) lyout config name for the specified sub tree
     *
     * Code example:
     * ```
     * chart.setLayout(FamilyTree.tree);
     * ```     
     */
    setLayout(layout: FamilyTree, lyoutConfigName?: string) : void;

    /**
     * Magnify node.
     * 
     * Signature:
     * ```
     * chart.magnify(id, scale, front, anim, callback);
     * ```
     * Parameters:
     * @param id - the node id we want to highlight or magnify
     * @param scale - scale of the magnified node
     * @param front - (optional) true or false, display magnified node in front of other nodes if it is true
     * @param anim - (optional) animation effect for the magnified node, if not set the default is chart.config.anim
     * @param callback - (optional) callback function before the animation start
     * 
     *
     * Code example:
     * ```
     * chart.magnify(id, 1.04, false, null);
     * ```     
     */

    magnify(id: string | number, scale: number, front?: boolean, anim?: Object, callback?: Function ) : void;

    /**
     * Magnify back node.
     * 
     * Signature:
     * ```
     * chart.chart.magnifyBack(id, anim, callback);
     * ```
     * Parameters:
     * @param id - is the node id we want to highlight or magnify
     * @param anim - (optional) animation effect for the magnified node, if not set the default is chart.config.anim
     * @param callback - (optional) callback function after the animation ends
     * 
     *
     * Code example:
     * ```
     * chart.magnifyBack(id, { func: FamilyTree.anim.inSin, duration: 200});
     * ```     
     */
   
    magnifyBack(id: string | number,  anim?: Object, callback?: Function) : void;

    /**
     * State to url.
     * 
     * Signature:
     * ```
     * chart.stateToUrl();
     * ```
     * Code example:
     * ```
     * chart.stateToUrl();
     * ```     
     */
    stateToUrl() : String;

        /**
     * Expand and collapse nodes.
     * 
     * Signature:
     * ```
     * chart.expandCollapse(id, expandIds, collapseIds);
     * ```
     * Parameters:
     * @param id - fixed node
     * @param expandIds - array of expanding ids
     * @param collapseIds -  array of collapsing ids
     * 
     *
     * Code example:
     * ```
     * chart.expandCollapse(5, [6, 7], [8, 9]);
     * ```     
     */

    expandCollapse(id: string | number, expandIds: Array<string | number>, collapseIds: Array<string | number>) : void;

            /**
     * Search in the chart.
     * 
     * Signature:
     * ```
     * chart.search(value, searchInFileds, retrieveFields);
     * ```
     * Parameters:
     * @param value - value to search for
     * @param searchInFileds - (optional) array of fields to search in
     * @param retrieveFields - (optional) array of returned fields
     * 
     *
     * Code example:
     * ```
     * chart.search("c", ["Name", "Title"], ["Title"]);
     * ```     
     */

    search(value: string | number, searchInFileds?: Array<string>, retrieveFields?: Array<string>)  : any;

            /**
     * Returns the node DOM element.
     * 
     * Signature:
     * ```
     * chart.getNodeElement(id);
     * ```
     * Parameters:
     * @param id - id of the node
     * 
     *
     * Code example:
     * ```
     * chart.getNodeElement(5);
     * ```     
     */

    getNodeElement(id: string | number) : void;

    generateId() : string | number;

    changeRoots(id: null | string | number, roots: Array<string|number>, callback?: Function ) : void;
    /**
     * Exports the node details in PDF
     * 
     * Signature:
     * ```
     * chart.exportPDFProfile(ioptions, callback);
     * ```
     * Parameters:
     * @param options - options for export
     * @param callback - callback function
     * 
     *
     * Code example:
     * ```
     * chart.exportPDFProfile({id: 5});
     * ```     
     */
    exportPDFProfile(options:  Object, callback?: Function) : void;

        /**
     * Exports the node details in PNG
     * 
     * Signature:
     * ```
     * chart.exportPNGProfile(ioptions, callback);
     * ```
     * Parameters:
     * @param options - options for export
     * @param callback - callback function
     * 
     *
     * Code example:
     * ```
     * chart.exportPNGProfile({id: 5});
     * ```     
     */
    exportPNGProfile(options:  Object, callback?: Function) : void;

}export default FamilyTree