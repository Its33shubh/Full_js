/*
 Core Concepts Learned:

1.  DOM Selection
   - document.getElementById("id")
   - document.querySelector("selector")
   - document.querySelectorAll("selector")

2.  Inspecting DOM Structure
   - document.title, document.URL
   - document.body, document.head
   - document.getElementsByClassName(), getElementsByTagName()

3.  DOM Tree Navigation
   - parentNode, childNodes
   - children, firstElementChild, lastElementChild
   - nextSibling, previousSibling

4.  Creating and Inserting Elements
   - document.createElement("div")
   - element.innerText / innerHTML
   - element.setAttribute("class", "value")
   - parent.appendChild(newElement)

5.  Styling Elements
   - element.style.color = "red"
   - element.classList.add("classname")
   - element.classList.remove("classname")

6.  Removing Elements
   - element.remove()
   - parent.removeChild(child)

7.  Working with Text
   - innerText → visible text only
   - textContent → all text including hidden
   - innerHTML → includes HTML tags

8.  Node vs Element
   - Node includes text, comment, and element nodes
   - Element is specifically an HTML tag

9. Useful Properties
   - nodeName, nodeType
   - hasChildNodes(), cloneNode()

10.  Practical Use Cases
   - Dynamically adding cards, sections, or buttons
   - Styling elements based on conditions
   - Traversing and modifying nested elements
*/