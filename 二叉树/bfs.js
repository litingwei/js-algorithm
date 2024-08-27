const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
        },
        {
          val: 'g',
        },
      ],
    },
  ],
}
const bfs = (root) => {
  const q = [root]
  while (q.length > 0) {
    const n = q.shift()
    console.log(v.val)
    n.children.forEach((child) => {
      q.push(child)
    })
  }
}
