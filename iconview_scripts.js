document.addEventListener('DOMContentLoaded', function(){ 

    iconview_actions.ready();

}, false);


const iconview_actions = ( function () {
    var elem = document.querySelector("#grid");
    var 
        iso,
        emptyIconBlock
    ;
    var inputField = document.querySelector('#intext');

    function ready() {

        document.querySelector('#intext').onkeyup = filterFunction;
        emptyIconBlock = createIconBlock();

        elem.innerHTML = "";

        for(var i =0; i<allIcons.length; i+=1) {
            elem.append(generateIcon(allIcons[i]));
        }

        iso = new Isotope(elem, {itemSelector: '.icon_block', layoutMode: 'fitRows'});

        function filterFunction () {
            iso.arrange(
                {
                    filter: function(itemElem) {
                        return itemElem.querySelector("div.icon_block>div")
                                .innerText.indexOf(document.querySelector('#intext').value) > -1;
                    }
                }
            )
        }

        function createIconBlock() {
            var
                icon_block = document.createElement("div"),
                icon_element = document.createElement("span"),
                icon_name = document.createElement("div")
                ;
            icon_block.setAttribute("class", "icon_block");
            icon_element.setAttribute("class", "icon_elem");
            icon_name.setAttribute("class", "icon_name");
    
            icon_block.appendChild(icon_element);
            icon_block.appendChild(icon_name);
    
            return icon_block;
        }


        function generateIcon(inObj) {
            var
                newIcon = emptyIconBlock.cloneNode(true)
            ;

            newIcon.querySelector(".icon_name").innerText = inObj.title;
            newIcon.querySelector(".icon_elem").innerText = String.fromCharCode(parseInt(inObj.charCode,16));

            return newIcon;
        }
    }


    return {
        ready: ready
    }
})();

