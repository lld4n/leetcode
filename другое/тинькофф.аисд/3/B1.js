class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  sl(node) {
    this.left = node;
  }

  sr(node) {
    this.right = node;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, _r;

let nodes;

function dfs(node, minv, maxv) {
  if (!node) {
    return 0;
  }

  if (node.value <= minv || node.value >= maxv) {
    return -1;
  }

  const lh = dfs(node.left, minv, node.value);
  const rh = dfs(node.right, node.value, maxv);

  if (lh === -1 || rh === -1) {
    return -1;
  }

  if (Math.abs(lh - rh) > 1) {
    return -1;
  }

  return Math.max(lh, rh) + 1;
}

function isAVL(node) {
  if (!node) {
    return true;
  }

  const stack = [];
  stack.push({ node, minv: -Infinity, maxv: Infinity, depth: 0 });

  while (stack.length > 0) {
    const { node, minv, maxv, depth } = stack.pop();

    if (node.value <= minv || node.value >= maxv) {
      return false;
    }

    if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
      return false;
    }

    if (node.left) {
      stack.push({
        node: node.left,
        minv,
        maxv: node.value,
        depth: depth + 1,
      });
    }

    if (node.right) {
      stack.push({
        node: node.right,
        minv: node.value,
        maxv,
        depth: depth + 1,
      });
    }
  }

  return true;
}

function getHeight(node) {
  if (!node) {
    return 0;
  }

  const stack = [];
  let height = 0;

  stack.push({ node, depth: 1 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    height = Math.max(height, depth);

    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }

    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return height;
}

let i = -1;
rl.on("line", (line) => {
  const [l, r] = line.split(" ").map(Number);
  if (i === -1) {
    n = l;
    _r = r;
    nodes = new Array(n).fill(null).map((_, i) => new TreeNode(i));
  } else {
    if (l !== -1) {
      nodes[i].sl(nodes[l]);
    }
    if (r !== -1) {
      nodes[i].sr(nodes[r]);
    }
  }
  i++;
  if (i === n) {
    const root = nodes[_r];
    const ans = isAVL(root, -Infinity, Infinity);
    console.log(ans ? 1 : 0);

    rl.close();
  }
});
