# ![FamilyTree JS](https://balkangraph.com/content/img/icon-FamilyTreeJS.png) FamilyTree JS 
Build family tree app with BALKAN FamilyTree JS JavaScript library. Family Tree also called a genealogy or a pedigree chart, is a chart representing family relationships in a conventional tree structure.

![Family Tree JS](https://balkan.app/Content/Img/ft.png)


## [Demos](https://balkan.app/FamilyTreeJS/Demos/BasicUsage)  &nbsp;&nbsp;&nbsp;&nbsp;  [Docs](https://balkan.app/FamilyTreeJS/Docs/GettingStarted)  &nbsp;&nbsp;&nbsp;&nbsp;  [Download](https://balkan.app/FamilyTreeJS/Download) &nbsp;&nbsp;&nbsp;&nbsp;  [Support](https://balkan.app/FamilyTreeJS/Support)

## Features
- Supports both local data and remote data (JSON)
- Smooth expand/collapse effects
- Align the chart in 8 orientations
- Supports pan and zoom
- Edit Form
- Node Customization
- Search
- Scroll Bars
- Lazy Loading
- Exporting

## Installation
Option 1 - [standalone build](https://balkan.app/FamilyTreeJS/Docs/GettingStarted)

Option 2 - NPM
```
npm i @balkangraph/familytree.js
```

Option 3 - Bower
```
bower install familytree.js
```


## Usage
```
    <script src="https://balkan.app/js/familytree.js"></script> 
    <div id="tree"/>
    <script>
    var tree = new FamilyTree(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name"
        },
        nodes: [
            { id: 1, pids: [2] },
            { id: 2, pids: [1] },
            { id: 3, mid: 1, fid: 2 }
        ]
    });
    </script>
```

## 1 click to talk 2 us

[![OrgChart](https://balkangraph.com/content/img/phone-icon4.png)](https://webcall.me/BALKANGraph)
