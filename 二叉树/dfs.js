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
const dfs = (root) => {
  console.log(root.val)
  if (!root.children) return
  root.children.forEach(dfs)
}
dfs(tree)
