const gridHTML = document.getElementById("grid")
const button = document.querySelector("button")
const levelHTML = document.getElementById("level")
let root = document.documentElement
let width = Number(getComputedStyle(root).getPropertyValue("--col-number"))
let bombsAmount = 15

let randomNumbers = []


// levelHTML.addEventListener("change", () => {
//     button.addEventListener("click", () => {
//         if (levelHTML.value == "medium") {
//             console.log("medium")
//             root.style.setProperty('--col-number', 9)
//         } else if (levelHTML.value == "easy") {
//             console.log("easy")
//             root.style.setProperty('--col-number', width)
//         } else if (levelHTML.value == "hard") {
//             console.log("hard")
//             root.style.setProperty('--col-number', 7)
//             console.log(getComputedStyle(root).getPropertyValue("--col-number"))
//         }
//         createGrid()
//     })



// })
button.addEventListener("click", createGrid)



function createGrid() {
    gridHTML.innerHTML = ""
    const bombArray = Array(bombsAmount).fill("bomb")
    const emptyArray = Array(width * width - bombsAmount).fill("empty")
    const boardArraySorted = bombArray.concat(emptyArray)
    const randomizedBoard = boardArraySorted.sort(() => Math.random() - 0.5)
    let boxes = []


    for (let i = 0; i < width ** 2; i++) {
        const box = document.createElement("div")
        let boxspan = document.createElement("span")
        box.classList.add("box")
        boxspan.classList.add(randomizedBoard[i])
        box.classList.add(randomizedBoard[i])
        boxspan.id = i
        gridHTML.appendChild(box)
        boxspan.classList.add("d-none")
        box.appendChild(boxspan)
        if (box.className.includes("bomb")) {
            boxspan.innerText = ""
            let bombImg = new Image()
            bombImg.src = "./assets/bomb.gif"
            bombImg.style.width = "50%"
            boxspan.append(bombImg)
        }

        boxes.push(boxspan)
        box.addEventListener("click", (e) => {
            let span = box.querySelector("span")
            span.classList.remove("d-none")
            if (span.classList.contains("bomb")) {
                alert("you lost")
                document.querySelector("main").style.backgroundColor = "brown"
                let bombs = document.querySelectorAll(".bomb")
                bombs.forEach((bomb) => {
                    bomb.classList.remove("d-none")
                })
            }
        })
        // box.addEventListener("click", (e) => {
        //     console.log(boxspan.innerText)
        //     box.classList.toggle("active")
        // })

    }

    console.log(boxes)

    for (let i = 0; i < boxes.length; i++) {

        const isOnLeftEdge = (i % width == 0)
        const isOnRightEdge = (i % width == width - 1)
        let adjacentBombs = 0
        if (boxes[i].classList.contains("empty")) {
            console.log("yo")

            if (i > 0 && !isOnLeftEdge && boxes[i - 1].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i > 9 && !isOnRightEdge && boxes[i + 1 - width].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i > width && boxes[i - width].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i > 11 && !isOnLeftEdge && boxes[i - 1 - width].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i < 98 && !isOnRightEdge && boxes[i + 1].className.includes("bomb")) {
                adjacentBombs++
            }

            if (i < 90 && !isOnLeftEdge && boxes[i - 1 + width].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i < 88 && !isOnRightEdge && boxes[i + 1 + width].className.includes("bomb")) {
                adjacentBombs++
            }
            if (i < 89 && boxes[i + width].className.includes("bomb")) {
                adjacentBombs++
            }

            boxes[i].innerText = adjacentBombs

        }
    }

}

createGrid()

// click(square) {
//     if (square.contains)
// }

console.log(randomNumbers)