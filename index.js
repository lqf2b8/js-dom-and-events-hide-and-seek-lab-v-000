function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild(selector) {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i]) + n
  }
}